<article class="filter-post u-margin__top--4">
    {{-- @dump($post) --}}
    @if ($post->category)
        <span class="filter-post__category">{{ $post->category->name }}</span>
    @endif
    <h2>{{ $post->postTitleFiltered }}</h2>
    
    {!! $post->postContentFiltered !!}
    
    <div class="filter-post__topics">
        @if ($post->topics)
            @foreach ($post->topics as $topic)
                <span class="filter-post__topics-topic">{{ $topic->name }}</span>
            @endforeach
        @endif
    </div>
</article>

<div class="page-break"></div>