<?php

namespace Municipio\Controller;

/**
 * Class Single
 * @package Municipio\Controller
 */
class FilterSearch
{
    /**
     * @return array|void
     */
    public static function get()
    {
        $label = get_field('_to_search_label', 'option');
        $description = apply_filters('the_content', get_field('_to_search_description', 'option'));

        return (object)[
            'label' => $label,
            'description' => $description
        ];
    }
}
