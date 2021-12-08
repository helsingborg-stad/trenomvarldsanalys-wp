@extends('templates.master')

@section('content')
    <div class="hero-content u-padding__y--6 u-padding__x--3 u-text-align--center u-flex-direction--column u-align-items--center">
        {!! $post->postContentFiltered !!}
    </div>

    @include('partials.filter-search-box')

    @include('partials.topics-box')

    @include('partials.categories-box')

    {!! $hook->searchNotices !!}

    <div id="filter-posts">
        @include('partials.filter-result')
    </div>
@stop