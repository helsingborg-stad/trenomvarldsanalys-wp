<?php

namespace Municipio\Controller;

class Filter extends \Municipio\Controller\Archive
{
    public function init()
    {
        parent::init();

        $this->parseSearch();

        //Translations
        $this->data['lang']->allPages = __("All pages", 'municipio');
        $this->data['lang']->noResult = __("The searchquery did not match any content.", 'municipio');
        $this->data['lang']->found = __("Found", 'municipio');
        $this->data['lang']->results = __("results", 'municipio');
        $this->data['lang']->searchFor = __("Search for", 'municipio');
        $this->data['lang']->viewPage = __("View page", 'municipio');

        //Search general data
        $this->data['resultCount'] = $this->wpQuery->found_posts;
        $this->data['post'] = \Municipio\Helper\Post::preparePostObject($this->posts[0]);
        $this->data['featuredImage'] = $this->getFeaturedImage($this->data['post']);
        $this->data['posts'] = $this->getSearchResult($this->wpQuery->posts);

        //Hooks
        $this->data['hook']->searchNotices = $this->hook('search_notices');
        $this->data['hook']->customSearchPage = $this->hook('custom_search_page');

        // Show or hide sidebars
        $this->data['showSidebars'] = false;

        $this->data['currentTopics'] = Topics::get();
        $this->data['currentCategories'] = Categories::get();
        $this->data['currentSearch'] = FilterSearch::get();
    }
    /**
     * Default wordpress search
     * @return object
     */
    private function getSearchResult($posts)
    {
        if (empty($posts)) {
            return [];
        }

        foreach ($posts as $postKey => $post) {
            $posts[$postKey] = \Municipio\Helper\Post::preparePostObject($post);
            $posts[$postKey]->category = get_the_category($post)[0] ?? false;
            $posts[$postKey]->topics = get_the_tags($post) ?? false;
        }

        return \apply_filters('Municipio/Controller/Search/prepareSearchResultObject', $posts);
    }

    private function parseSearch()
    {
        $args = [
            'posts_per_page' => -1
        ];

        //Has category search?
        if (get_query_var('category')) {
            $args['cat'] = $this->filterVar(get_query_var('category'));
        }

        //Has topic search?
        if (get_query_var('topic')) {
            $args['tag__in'] = $this->filterVar(get_query_var('topic'));
        }

        //Has specific post ids search?
        if (get_query_var('posts')) {
            $args['post__in'] = $this->filterVar(get_query_var('posts'));
        }

        //Has content matching term
        if (get_query_var('term')) {
            $args['s'] = get_query_var('term');
        }

        $this->wpQuery = new \WP_Query($args);
    }

    public function filterVar($params)
    {
        if (!is_array($params)) {
            $params = explode(",", $params);
        }

        $params = array_filter($params, function ($item) {
            return is_numeric($item);
        });

        return $params;
    }

    private function getFeaturedImage($post)
    {
        $image_dimensions = array(1200, 300);
            
        $image = wp_get_attachment_image_src(
            get_post_thumbnail_id($post->ID),
            apply_filters(
                'Modularity/index/image',
                municipio_to_aspect_ratio('16:3', $image_dimensions),
                $this->args
            )
        );

        return $image;
    }

    public static function doAjaxSearch()
    {
        $filter = new Filter();

        $topic = $filter->filterVar($_POST['topic']);
        $category = $filter->filterVar($_POST['category']);
        $posts = $filter->filterVar($_POST['posts']);
        $term = $_POST['term'];
        
        set_query_var("topic", $topic);
        set_query_var("category", $category);
        set_query_var("posts", $posts);
        set_query_var("term", $term);

        $filter->init();

        return $filter;
    }
}
