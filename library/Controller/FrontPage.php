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
    }
}
