import tippy from 'tippy.js';
import axios from 'axios'
const SHOULD_XHR_PATH = '/filter'

export default class TrendFilter{

    constructor(){
        this.elements = document.querySelectorAll('.filter-btn')
        
        this.params = {
            'category': [], 
            'topic': [],
            'term': null
        }

        this.setParams()
        this.setPath()

        this.init()

        tippy('[data-tippy-content]')
    }

    get hasFilters(){
        return this.params.category.length > 0 || this.params.topic.length > 0 || this.params.term.length > 0
    }

    init(){
        if(this.hasFilters){
            this.dimNonFilterBadges()
            this.setFilterTerm()
        }

        if(this.pathName == SHOULD_XHR_PATH){
            this.bindEvents()
            this.bindPdfBtn()
        }

        const formEl = document.getElementById('filter-search-form')
        formEl.addEventListener("submit", (e) => {
            e.preventDefault()

            this.onFormSubmit()
        })
    }

    syncState(self){
        let params = Object.keys(self.params).map(function(key) {
            return encodeURIComponent(key) + '=' + (Array.isArray(self.params[key]) ? self.params[key].join(",") : self.params[key])
        }).join('&')

        history.replaceState({}, '', `${self.pathName}?${params}`)
    }

    bindPdfBtn(){
        const pdfButton = document.getElementById("make-pdf-btn")

        pdfButton.addEventListener('click', (event) => {
            event.preventDefault()
            this.fetchPdf(this.params)
        })
    }

    bindEvents(){
        this.elements.forEach(el => {
            el.addEventListener('click', (event) => {
                event.preventDefault()
                
                let type = el.dataset.type;
                let id = parseInt(el.dataset.rel);
                
                let idx = this.params[type].findIndex(i => i === id)
                if(idx > -1){
                    this.params[type].splice(idx, 1)
                } else {
                    this.params[type].push(id)
                }

                this.dimNonFilterBadges()
                this.syncState(this)
                this.fetchResult(this.params, this)
            })
        })
    }

    dimNonFilterBadges(){
        this.elements.forEach(el => {
            let id = parseInt(el.dataset.rel)
            let type = el.dataset.type
            el.classList.remove("dimmed")
            
            if(!this.params[type].includes(id)){
                //Isn't in query, dim
                el.classList.add("dimmed")
            }
        })
        
    }

    setPath(){
        this.pathName = location.pathname;       
    }

    setFilterTerm(){
        if(!this.params.term){
            return false
        }

        document.getElementById("input_filter-search-form--field").value = this.params.term
    }

    setParams(){
        const allowedParams = ['category','topic','term']
        const urlSearchParams = new URLSearchParams(window.location.search);
        let params = Object.fromEntries(urlSearchParams.entries());

        Object.keys(params)
            .forEach(key => {
                if(!allowedParams.includes(key)){
                    delete params[key]
                    return false
                }

                if(key === 'term'){
                    return
                }
                
                if(params[key].includes(',')){
                    params[key] = params[key].split(',')
                } else {
                    params[key] = [params[key]]
                }

                params[key] = params[key].map(i => parseInt(i)).filter(i => !isNaN(i))
            })

        this.params = Object.assign(this.params, params)
    }

    onFormSubmit(){
        const term = document.getElementById("input_filter-search-form--field").value

        this.params.term = term
        this.syncState(this)
        this.fetchResult(this.params, this)
    }
    
    async fetchPdf(params){
        if(!ajaxFilterData){
            console.error("Missing nonce for filtering")
        }

        const filterPostsEl = document.getElementById('filter-posts')
        filterPostsEl.classList.add('loading')

        const filterPostsChecked = Array.from(document.querySelectorAll('.filter-post__checked:checked')).map(el => el.value)

        const formData = new FormData()
        formData.append('action', 'ajaxMakePdf')
        formData.append('nonce', ajaxFilterData.nonce)
        formData.append('posts',filterPostsChecked)
        formData.append('topic', params.topic)
        formData.append('category', params.category)

        const { data } = await axios.post(ajaxFilterData.ajax_url, formData)
        
        const linkSource = `data:application/pdf;base64,${data}`;
        const downloadLink = document.createElement("a");
        const fileName = "trend-omvarlds-analys_rapport-{}.pdf";

        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.target = "_blank";
        downloadLink.click();                

        filterPostsEl.classList.remove('loading')
    }

    async fetchResult(params, self){
        if(!ajaxFilterData){
            console.error("Missing nonce for filtering")
        }
        
        const filterPostsEl = document.getElementById('filter-posts')
        filterPostsEl.classList.add('loading')

        const formData = new FormData()
        formData.append('action', 'ajaxGetFilterView')
        formData.append('nonce', ajaxFilterData.nonce)
        formData.append('topic', params.topic)
        formData.append('category', params.category)
        formData.append('term', params.term)

        const { data } = await axios.post(ajaxFilterData.ajax_url, formData)

        const el = document.getElementById("filter-posts")
        el.innerHTML = data

        self.bindPdfBtn()
        filterPostsEl.classList.remove('loading')
    }
}