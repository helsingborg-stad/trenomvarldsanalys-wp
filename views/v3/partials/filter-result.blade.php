@if (!$resultCount)
        <section class="o-container t-searchform u-margin__top--6">
            <div class="o-grid">
                <div class="o-grid-8 u-margin-x--auto">
                    @notice([
                        'type' => 'info',
                            'message' => [
                                'text' => $lang->noResult,
                                'size' => 'md',
                            ]
                    ])
                    @endnotice
                </div>
            </div>
        </section>
    @else

        <section class="t-searchresult u-width--75 u-margin-x--auto">
            <div class="o-grid">
                <div class="o-grid-12 u-margin__top--6">
                    <div id="filter-loader" class="u-margin__top--6 u-text-align--center">
                        @include('partials.loader')
                    </div>

                    {!! $hook->loopStart !!}
                        
                    @foreach ($posts as $post)
                        {{-- @dump($post) --}}
                        <article class="filter-post u-margin__top--4">
                            @if ($post->category)
                                <span class="filter-post__category">{{ $post->category->name }}</span>
                            @endif
                            <h2>
                                <input type="checkbox" class="filter-post__checked" name="post-id-{{$post->id}}" value="{{ $post->id }}" aria-checked="true" checked /> 
                                <a href="{{ $post->permalink}}">{{ $post->postTitleFiltered }}</a>
                            </h2>
                            <p>
                                {{ $post->excerpt }}
                            </p>
                            <div class="filter-post__topics">
                                @if ($post->topics)
                                    @foreach ($post->topics as $topic)
                                    
                                        <a href="/filter?topic={{ $topic->term_id }}" data-type="topic" data-rel="{{ $topic->term_id }}" class="filter filter-post__topics-topic">{{ $topic->name }}</a>
                                    @endforeach
                                @endif
                            </div>
                        </article>
                    @endforeach

                    {!! $hook->loopEnd !!}

                </div>
            </div>

            <button id="make-pdf-btn" class="c-button c-button__outlined c-button__outlined--primary c-button--md ripple ripple--before">Skapa PDF</button>
        </section>
    @endif