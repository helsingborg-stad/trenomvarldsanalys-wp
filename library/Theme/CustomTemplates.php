<?php

namespace Municipio\Theme;

class CustomTemplates
{
    public function __construct()
    {
        \Municipio\Helper\Template::add(
            __('Frontpage', 'municipio'),
            \Municipio\Helper\Template::locateTemplate('front-page.blade.php'),
            'all'
        );

        \Municipio\Helper\Template::add(
            __('Filter', 'municipio'),
            \Municipio\Helper\Template::locateTemplate('filter.blade.php'),
            'all'
        );

        \Municipio\Helper\Template::add(
            __('Full width', 'municipio'),
            \Municipio\Helper\Template::locateTemplate('full-width.blade.php'),
            'all'
        );

        \Municipio\Helper\Template::add(
            __('One page (no article)', 'municipio'),
            \Municipio\Helper\Template::locateTemplate('one-page.blade.php'),
            'all'
        );

        \Municipio\Helper\Template::add(
            __('Page (two columns)', 'municipio'),
            \Municipio\Helper\Template::locateTemplate('page-two-column.blade.php'),
            'all'
        );

        \Municipio\Helper\Template::add(
            __('Sidebar right', 'municipio'),
            \Municipio\Helper\Template::locateTemplate('sidebar-right.blade.php'),
            'all'
        );
    }
}
