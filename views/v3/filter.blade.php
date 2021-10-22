@extends('templates.master')

@section('hero')
    <div
        class="hero-content u-padding__y--6 u-padding__x--3 u-text-align--center u-flex-direction--column u-align-items--center">
        {!! $post->postContentFiltered !!}
    </div>
    <div class="hero-posts">

        @if (isset($featuredImage[0]) && !empty($featuredImage[0]))
            @image([
            'src'=> $featuredImage[0],
            'classList' => ['c-article__feature-image']
            ])
            @endimage
        @endif
    </div>
@stop

@section('content')
    @include('partials.topics-box')

    @include('partials.categories-box')

    {!! $hook->searchNotices !!}

    <div id="filter-posts">
        @include('partials.filter-result')
    </div>
@stop
