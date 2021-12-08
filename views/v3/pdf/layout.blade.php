<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Trend- och omvärldsanalys</title>
    <meta name="author" content="Helsingborgs stad">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
    
    <style>
        @page {
            margin: 2cm 4cm;
        }

        body {
            font-size: .75rem;
            font-family: "Open Sans", sans-serif;
        }

        div.frontpage,
        div.backpage {
            width: 210mm;
            height: 297mm;
            background-size: cover;
            position: absolute;
            top: -2cm;
            left: -4cm;
        }

        div.frontpage,
        .page-break {
            page-break-after: always;
        }

        h1,
        h2,
        h3,
        h4 {
            margin-top: 0;
            font-weight: 400
        }

        header {
            position: fixed;
            top: -1.5cm;
            left: -3.5cm;
            right: -3.5cm;
            height: 1cm;

            color: white;
            line-height: 1;
        }

        footer {
            position: fixed;
            bottom: -1.5cm;
            left: -3.5cm;
            right: -3.5cm;
            height: 1cm;

            /** Extra personal styles **/
            text-align: center;
            line-height: 35px;
        }

        footer span:after {
            content: counter(page);
        }

        img {
            max-width: 100%;
        }

    </style>
</head>

<body>

    <header>
        <img src="{{ $logo['sizes']['large'] }}"/>
    </header>

    <footer>
        <span></span>
    </footer>

    <div class="pagi"><span></span></div>
    <!-- Front page -->
    @include('pdf.frontpage')
    <!-- /Front page -->

    <!-- Article pages -->
    @foreach ($posts as $post)
        @include('pdf.post')
    @endforeach
    <!-- /Article pages -->

    <!-- Back page -->
    @include('pdf.backpage')
    <!-- /Back page -->
