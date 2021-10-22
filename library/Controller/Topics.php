<?php

namespace Municipio\Controller;

/**
 * Class Single
 * @package Municipio\Controller
 */
class Topics
{
    /**
     * @return array|void
     */
    public static function get()
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
}
