<?php

namespace Municipio;

/**
 * Class App
 * @package Municipio
 */
class App
{
    /**
     * App constructor.
     */
    public function __construct()
    {

        /**
         * Template
         */
        new \Municipio\Template();

        /**
         * Theme
         */
        new \Municipio\Theme\Enqueue();
        new \Municipio\Theme\Support();
        new \Municipio\Theme\Sidebars();
        new \Municipio\Theme\General();
        new \Municipio\Theme\OnTheFlyImages();
        new \Municipio\Theme\ImageSizeFilter();
        new \Municipio\Theme\CustomCodeInput();
        new \Municipio\Theme\Blog();
        new \Municipio\Theme\FileUploads();
        new \Municipio\Theme\Archive();
        new \Municipio\Theme\CustomTemplates();
        new \Municipio\Theme\Font();
        new \Municipio\Theme\ColorScheme();
        new \Municipio\Theme\Navigation();

        new \Municipio\Search\General();
        new \Municipio\Search\Algolia();

        /**
         * Content
         */
        new \Municipio\Content\CustomPostType();
        new \Municipio\Content\CustomTaxonomy();
        new \Municipio\Content\PostFilters();
        new \Municipio\Content\ShortCode();
        new \Municipio\Content\Cache();

        /**
         * Widget
         */
        new \Municipio\Widget\Widgets();

        /**
         * Comments
         */
        new \Municipio\Comment\HoneyPot();
        new \Municipio\Comment\Likes();
        new \Municipio\Comment\CommentsFilters();
        new \Municipio\Comment\CommentsActions();

        /**
         * Admin
         */
        new \Municipio\Admin\General();
        new \Municipio\Admin\LoginTracking();

        new \Municipio\Admin\Gutenberg\Blocks\Button();

        new \Municipio\Admin\ExternalDeptendents();

        new \Municipio\Admin\Options\Theme();
        new \Municipio\Admin\Options\Timestamp();
        new \Municipio\Admin\Options\Favicon();
        new \Municipio\Admin\Options\GoogleTranslate();
        new \Municipio\Admin\Options\Archives();
        new \Municipio\Admin\Options\ContentEditor();
        new \Municipio\Admin\Options\AttachmentConsent();

        new \Municipio\Admin\Acf\PrefillIconChoice();

        new \Municipio\Admin\Roles\General();
        new \Municipio\Admin\Roles\Editor();

        new \Municipio\Admin\UI\BackEnd();
        new \Municipio\Admin\UI\FrontEnd();
        new \Municipio\Admin\UI\Editor();
        new \Municipio\Admin\UI\Customizer();

        new \Municipio\Admin\TinyMce\LoadPlugins();

        /**
         * Api
         */
        new \Municipio\Api\Navigation();

        /**
         * Customizer
         */
        new \Municipio\Customizer\Design();
        new \Municipio\Customizer\DesignLibrary();

        add_filter('Modularity/CoreTemplatesSearchPaths', function ($paths) {
            $paths[] = get_stylesheet_directory() . '/views/v3';
            $paths[] = get_template_directory() . '/views/v3';
            return $paths;
        });

        /**
         * Custom for Trend och omvärldsanalys
         */

        new \Municipio\Filter\Ajax();

        add_filter('query_vars', function ($vars) {
            //Add custom URL parameters for filtering/searching
            $vars[] = "category";
            $vars[] = "topic";

            return $vars;
        });


        if (function_exists('acf_add_options_page')) {
            acf_add_options_page(array(
                'page_title' 	=> 'Trend och omvärldsanalys',
                'menu_title'	=> 'Trend och omvärldsanalys',
                'menu_slug' 	=> 'trend-och-omvarldsanalys',
                'capability'	=> 'edit_posts',
                'redirect'		=> false
            ));
        }
    }
}
