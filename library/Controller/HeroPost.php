<?php
namespace Municipio\Controller;

/**
 * Class Single
 * @package Municipio\Controller
 */
class HeroPost
{
    public $post;

    public function __construct($heroPost)
    {
        $this->post = $heroPost['_to_page_link'];
        $this->title = $heroPost['_to_page_title'] ?? $this->post->post_title;
        $this->thumbnail = $this->getThumbnail();
        $this->url = get_permalink($this->post);
    }

    public function getThumbnail()
    {
        $image_dimensions = array(600, 600);
            
        $image = wp_get_attachment_image_src(
            get_post_thumbnail_id($this-> post->ID),
            apply_filters(
                'Modularity/index/image',
                municipio_to_aspect_ratio('1:1', $image_dimensions),
                $this->args
            )
        );

        return $image;
    }
}
