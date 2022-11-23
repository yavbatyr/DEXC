$(function(){
    $('.header__list-item').on('click', function (e) { 
        e.preventDefault();
        const id = $(this).attr('data-id');
    
        $(".header__list-item").removeClass("header__list-item_active");    
        $(".form").removeClass("form_active");
        $(`.header__list-item[data-id='${id}']`).addClass("header__list-item_active");    
        $(`.form[data-content='${id}']`).addClass("form_active");
    });

    $('.themes').on('click', function(){
        $('.themes').toggleClass('themes_active');
        $('.themes__switch').toggleClass('themes__switch_active');
    })

//dropdown
    $('.header__dropdown-list').each(function() {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 250; // длительность анимации 
    
        _this.hide();
        _this.wrap('<div class="header__dropdown-list"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);
    
        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);
    
        const selectList = selectHead.next('.new-select__list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'new-select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
        }
    
        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
        selectHead.on('click', function() {
            if ( !$(this).hasClass('on') ) {
                $(this).addClass('on');
                selectList.slideDown(duration);
    
                selectItem.on('click', function() {
                    let chooseItem = $(this).data('value');
    
                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text( $(this).find('span').text() );
    
                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });
    
            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });
    });
})