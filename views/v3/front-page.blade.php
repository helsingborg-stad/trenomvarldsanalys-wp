@extends('templates.master')
@section('hero')
    <div>
        @dump(get_field('_to_hero_post_wall'))
    </div>
@stop