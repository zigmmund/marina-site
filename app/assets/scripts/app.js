$('.site-header__menu-icon').on('click', function() {
  $(this).toggleClass('site-header__menu-icon--close-x');
  $('.primary-nav').slideToggle(300);
});

$(function() {
    $(".rslides").responsiveSlides({
      auto: true,
      pager: false,
      nav: true,
      speed: 500,
      namespace: "centered-btns"
    });
});
