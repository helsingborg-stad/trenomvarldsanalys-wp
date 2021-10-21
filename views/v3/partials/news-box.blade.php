<div
    class="topics u-text-align--center u-margin__top--6 u-align-items--center u-display--flex u-flex-direction--column u-width--75 u-width--100@xs u-margin-x--auto">
    <h2>{{ $news->label }}</h2>
    {!! $news->description !!}

    <div class="u-width--100 u-margin__top--2 u-display--flex">
        @foreach ($news->posts as $post)
            <a href="{{ $post->url }}" class="u-width--33 u-margin__x--2 news-post u-position--relative">
                <img src="{{ $post->thumbnail[0] }}" />

                <div class="post-overlay">
                    <h4>
                        {{ $post->post_title }}
                    </h4>
                </div>
            </a>
        @endforeach
    </div>
</div>
