<?php
namespace Municipio\Controller;

/**
 * Class Single
 * @package Municipio\Controller
 */
class Post
{
    public function __construct($post)
    {
        foreach (array_keys((array)$post) as $key) {
            $this->{$key} = $post->{$key};
        }
        
        $this->thumbnail = $this->getThumbnail();
        $this->url = get_permalink($this->ID);
    }

    public function getThumbnail()
    {
        $image_dimensions = array(600, 600);
            
        $image = wp_get_attachment_image_src(
            get_post_thumbnail_id($this->ID),
            apply_filters(
                'Modularity/index/image',
                municipio_to_aspect_ratio('3:4', $image_dimensions),
                $this->args
            )
        );

        return $image;
    }
}
