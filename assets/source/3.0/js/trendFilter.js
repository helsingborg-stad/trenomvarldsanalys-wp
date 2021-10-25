const SHOULD_XHR_PATH = '/filter'

export default class TrendFilter{

    constructor(){
        this.elements = document.querySelectorAll('.badge.filter')
        
        this.params = {
            'category': [], 
            'topic': []
        }

        this.setParams()
        this.setPath()

        this.init()
    }

    get hasFilters(){
        return this.params.category.length > 0 || this.params.topic.length > 0
    }

    init(){
        if(this.hasFilters){
            this.dimNonFilterBadges()
        }

        if(this.pathName == SHOULD_XHR_PATH){
            this.bindEvents()
        }
    }

    syncState(self){
        let params = Object.keys(self.params).map(function(key) {
            return encodeURIComponent(key) + '=' + self.params[key].join(",")
        }).join('&')

        history.replaceState({}, '', `${self.pathName}?${params}`)
    }

    bindEvents(){
        const pdfButton = document.getElementById("make-pdf-btn")

        pdfButton.addEventListener('click', (event) => {
            event.preventDefault()
            this.fetchPdf(this.params)
        })

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

                console.log(this.params, type, id)
                this.dimNonFilterBadges()
                this.syncState(this)
                this.fetchResult(this.params)
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
        console.log(this.pathName)
    }

    setParams(){
        const allowedParams = ['category','topic']
        const urlSearchParams = new URLSearchParams(window.location.search);
        let params = Object.fromEntries(urlSearchParams.entries());

        Object.keys(params)
            .forEach(key => {
                if(!allowedParams.includes(key)){
                    delete params[key]
                    return false
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
    
    async fetchPdf(params){
        if(!ajaxFilterData){
            console.error("Missing nonce for filtering")
        }

        $.ajax({
            url: ajaxFilterData.ajax_url,
            type: 'post',
            data: {
                action: 'ajaxMakePdf',
                nonce: ajaxFilterData.nonce,
                topic: params.topic,
                category: params.category
            },
            beforeSend: function() {
                //Hide current result and show loader
                jQuery('#filter-posts').addClass('loading')
            },
            success: function(response) {
                const linkSource = `data:application/pdf;base64,${response}`;
                const downloadLink = document.createElement("a");
                const fileName = "abc.pdf";
                downloadLink.href = linkSource;
                downloadLink.download = fileName;
                downloadLink.click();                

                jQuery('#filter-posts').removeClass('loading')
            },
        });
    }

    async fetchResult(params){
        if(!ajaxFilterData){
            console.error("Missing nonce for filtering")
        }

        jQuery.ajax({
            url: ajaxFilterData.ajax_url,
            type: 'post',
            data: {
                action: 'ajaxGetFilterView',
                nonce: ajaxFilterData.nonce,
                topic: params.topic,
                category: params.category
            },
            beforeSend: function() {
                //Hide current result and show loader
                jQuery('#filter-posts').addClass('loading')
            },
            success: function(response) {
                const el = document.getElementById("filter-posts")
                el.innerHTML = response

                jQuery('#filter-posts').removeClass('loading')
            },
        });
    }
}