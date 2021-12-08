<?php

namespace Municipio\Filter;

use Philo\Blade\Blade as Blade;
use Exception;
use Municipio\Controller\Filter;
use Municipio\Helper\Template;

class Ajax extends \Municipio\Helper\Ajax
{
    public function __construct()
    {
        //Data
        $this->data['ajax_url'] = admin_url('admin-ajax.php');
        $this->data['nonce'] = wp_create_nonce('filterNonce');

        //Localize
        $this->localize('ajaxFilterData', 'municipio-js');

        //Hook method to ajax
        $this->hook('ajaxGetFilterView', false);
        $this->hook('ajaxMakePdf', false);
    }

    public function preFlight()
    {
        if (! defined('DOING_AJAX') && ! DOING_AJAX) {
            return false;
        }

        if (! wp_verify_nonce($_POST['nonce'], 'filterNonce')) {
            die('Busted!');
        }

        ignore_user_abort(true);
    }

    /**
     * Ajax function to make PDF from filtered result
     *
     * @return void
     */
    public function ajaxMakePdf()
    {
        $this->preFlight();
        
        $filter = Filter::doAjaxSearch(get_query_var('topic'), get_query_var('category'));
        $data = $filter->getData();

        $pdf = PdfGenerator::init($data);

        echo $pdf->renderPdf();

        wp_die();
    }

    /**
     * Ajax method to get filtered result rendered as view
     * @return boolean
     */
    public function ajaxGetFilterView()
    {
        $this->preFlight();
        
        $filter = Filter::doAjaxSearch(get_query_var('topic'), get_query_var('category'), get_query_var('term'));
       
        echo render_blade_view('partials.filter-result', $filter->getData());

        wp_die();
    }
}
