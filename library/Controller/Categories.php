<?php

namespace Municipio\Controller;

/**
 * Class Single
 * @package Municipio\Controller
 */
class Categories
{
    /**
     * @return array|void
     */
    public static function get()
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
}
