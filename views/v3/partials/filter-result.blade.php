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

                    {{-- 'heading' => $post->postTitleFiltered,
                    'subHeading' => $siteName,
                    'content' => $post->excerpt,
                    'link' => $post->permalink,
                    'classList' => ['u-margin__top--4'] --}}
                        

                    @foreach ($posts as $post)
                        <article class="filter-post u-margin__top--4">
                            {{-- @dump($post) --}}
                            @if ($post->category)
                                <span class="filter-post__category">{{ $post->category->name }}</span>
                            @endif
                            <h2>{{ $post->postTitleFiltered }}</h2>
                            <p>
                                {{ $post->excerpt }}
                            </p>
                            <div class="filter-post__topics">
                                @if ($post->topics)
                                    @foreach ($post->topics as $topic)
                                        <span class="filter-post__topics-topic">{{ $topic->name }}</span>
                                    @endforeach
                                @endif
                            </div>
                        </article>
                    @endforeach

                    {!! $hook->loopEnd !!}

                </div>
            </div>

            <button id="make-pdf-btn">Skapa PDF</button>
        </section>
    @endif