<div class="topics u-text-align--center u-margin__top--6 u-align-items--center u-display--flex u-flex-direction--column u-width--75 u-width--100@xs u-margin-x--auto">
    <h2>{{ $currentCategories->label }}</h2>
    {!! $currentCategories->description !!}

    <div class="u-margin__top--2">
        @foreach ($currentCategories->categories as $category)
            <a href="search?topic_id={{ $category->slug }}" class="badge">
                {{ $category->name }}
            </a>
        @endforeach
        
    </div>
</div>