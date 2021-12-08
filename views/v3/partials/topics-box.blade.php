<div class="topics u-text-align--center u-margin__top--6 u-align-items--center u-display--flex u-flex-direction--column u-width--75 u-width--100@xs u-margin-x--auto">
    <h2>{{ $currentTopics->label }}</h2>
    {!! $currentTopics->description !!}

    <div class="u-margin__top--2">
        @foreach ($currentTopics->topics as $topic)
            <a href="/filter?topic={{ $topic->term_id }}" data-tippy-content="{{ $topic->description }}" class="badge filter filter-btn" data-type="topic" data-rel="{{ $topic->term_id }}">
                {{ $topic->name }}
            </a>
        @endforeach
    </div>
</div>