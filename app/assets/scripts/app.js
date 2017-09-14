$('.site-header__menu-icon').on('click', function() {
  $(this).toggleClass('site-header__menu-icon--close-x');
  $('.primary-nav').slideToggle(300);
});

$(document).ready(function() {
  $("#lightSlider").lightSlider({
    pager: false,
    auto: false,
    item: 1,
    loop: true,
    slideMove: 1,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 800,
    pause: 3000
   });
 });
