<?php

namespace Municipio\Filter;

use Dompdf\Dompdf;
use Dompdf\Options;
use Municipio\Controller\Filter;
use Municipio\Helper\Template;

class PdfGenerator
{
    public $data;
    public $html;
    public $pages = [];

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function renderView()
    {
        $posts = $this->data['posts'];
        $frontpage = get_field('_to_pdf_frontpage', 'option');
        $backpage = get_field('_to_pdf_backpage', 'option');
        $logo = get_field('logotype', 'option');

        return render_blade_view('pdf.layout', compact('posts', 'frontpage', 'backpage', 'logo'));
    }

    public function renderPdf()
    {
        $html = $this->renderView();

        $options = new Options([
            'isRemoteEnabled' => true,
            'dpi' => 300
        ]);
        // instantiate and use the dompdf class
        $dompdf = new Dompdf($options);
        $dompdf->loadHtml($html);
        $dompdf->setPaper('A4', 'portrait');
        $dompdf->render();

        // Return encoded output
        return base64_encode($dompdf->output());
    }

    public static function init($data)
    {
        return new self($data);
    }
}
