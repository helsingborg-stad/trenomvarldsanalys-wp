
<div class="topics u-text-align--center u-margin__top--6 u-align-items--center u-display--flex u-flex-direction--column u-width--75 u-width--100@xs u-margin-x--auto">
    <h2>{{ $currentSearch->label }}</h2>
    {!! $currentSearch->description !!}

    <div class="u-margin__top--2 u-width--100">
        <form id="filter-search-form" method="get">
            @group(['direction' => 'horizontal'])
                @field([
                    'id' => 'filter-search-form--field',
                    'type' => 'text',
                    'attributeList' => [
                        'type' => 'search',
                        'name' => 'filter-term'
                    ],
                    'placeholder' => get_field('_to_search_placeholder', 'option'),
                    'classList' => ['u-flex-grow--1'],
                    'size' => 'lg',
                    'radius' => 'xs',
                    'icon' => ['icon' => 'search']
                ])
                @endfield
                @button([
                    'id' => 'search-form--submit',
                    'text' => $lang->search,
                    'color' => 'default',
                    'type' => 'submit',
                    'size' => 'lg',
                    'classList' => ['u-box-shadow--0'],
                    'attributeList' => [
                        'id' => 'search-form--submit'
                    ]
                ])
                @endbutton
            @endgroup
        </form>
    </div>
</div>

{{-- <div class="topics u-text-align--center u-margin__top--6 u-align-items--center u-display--flex u-flex-direction--column u-width--75 u-width--100@xs u-margin-x--auto">
    <h2>{{ $currentCategories->label }}</h2>
    {!! $currentCategories->description !!}

    <div class="u-margin__top--2">
        @foreach ($currentCategories->categories as $category)
            <a href="/filter?category={{ $category->term_id }}" class="badge filter filter-btn" data-tippy-content="{{ $category->description }}" data-type="category" data-rel="{{ $category->term_id }}">
                {{ $category->name }}
            </a>
        @endforeach
        
    </div>
</div> --}}