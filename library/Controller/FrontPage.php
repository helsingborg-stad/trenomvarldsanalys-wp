<?php

namespace Municipio\Controller;

/**
 * Class Single
 * @package Municipio\Controller
 */
class FrontPage extends \Municipio\Controller\Singular
{
    /**
     * @return array|void
     */
    public function init()
    {
        parent::init();

        $this->setHeroPosts();
    }

    public function setHeroPosts()
    {
        $posts = get_field('_to_hero_post_wall');
        $class = count($posts) === 3 ? 'u-width--33' : 'u-width--25';

        $this->data['heroPosts'] = array_map(function ($heroPost) {
            return new HeroPost($heroPost);
        }, $posts);

        $this->data['heroPostClass'] = 'hero-post ' . $class;

        $this->data['currentTopics'] = $this->getTopics();
        $this->data['currentCategories'] = $this->getCategories();
        $this->data['news'] = $this->getNews();
    }

    public function getTopics()
    {
        $label = get_field('_to_topics_label', 'option');
        $description = apply_filters('the_content', get_field('_to_topics_description', 'option'));
        $topics = get_field('_to_current_topics', 'option');

        return (object)[
            'label' => $label,
            'description' => $description,
            'topics' => array_map(function ($topicId) {
                return get_tag($topicId);
            }, $topics)
        ];
    }

    public function getCategories()
    {
        $label = get_field('_to_categories_label', 'option');
        $description = apply_filters('the_content', get_field('_to_categories_description', 'option'));
        $categories = get_field('_to_current_categories', 'option');

        return (object)[
            'label' => $label,
            'description' => $description,
            'categories' => array_map(function ($categoryId) {
                return get_category($categoryId);
            }, $categories)
        ];
    }

    public function getNews()
    {
        $label = get_field('_to_news_label', 'option');
        $description = apply_filters('the_content', get_field('_to_news_description', 'option'));
        $categoryId = get_field('_to_news_category', 'option');
        $posts = query_posts("cat=$categoryId&showposts=3");

        return (object)[
            'label' => $label,
            'description' => $description,
            'posts' => array_map(function ($post) {
                return new Post($post);
            }, $posts)
        ];
    }
}
