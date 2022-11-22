$(function(){
    $('.header__list-item').on('click', function(){
    $('.header__list-item').removeClass('header__list-item_active');
    $(this).addClass('header__list-item_active');
    })
})