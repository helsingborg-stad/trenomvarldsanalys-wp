<?php

namespace Municipio\Filter;

use Dompdf\Dompdf;
use Dompdf\Options;
use Municipio\Controller\Filter;
use Municipio\Helper\Template;

class PdfGenerator
{
    public $data;
    public $pages = [];

    public function __construct($data)
    {
        $this->data = $data;
        
        $html = $this->renderView();

        $this->renderPdf($html);
    }

    public function renderView()
    {
        $posts = $this->data['posts'];
        $frontpage = get_field('_to_pdf_frontpage', 'option');
        $backpage = get_field('_to_pdf_backpage', 'option');
        $logo = get_field('logotype', 'option');

        // dd($logo);

        return render_blade_view('pdf.layout', compact('posts', 'frontpage', 'backpage', 'logo'));
    }

    public function renderPdf($html)
    {
        $options = new Options([
            'isRemoteEnabled' => true,
            'dpi' => 300
        ]);
        // instantiate and use the dompdf class
        $dompdf = new Dompdf($options);
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation
        $dompdf->setPaper('A4', 'portrait');
        // $dompdf->set_option('isRemoteEnabled', true);
        // Render the HTML as PDF
        $dompdf->render();

        // Output the generated PDF to Browser
        $dompdf->stream();
    }

    public static function init($data)
    {
        return new self($data);
    }
}
