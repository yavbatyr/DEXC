$(function(){
    $('.header__list-item').on('click', function(){
    $('.header__list-item').removeClass('header__list-item_active');
    $(this).addClass('header__list-item_active');
    })

    $('.themes').on('click', function(){
        $('.themes').toggleClass('themes_active');
        $('.themes__switch').toggleClass('themes__switch_active');
    })
})