$('.site-header__menu-icon').on('click', function() {
  $(this).toggleClass('site-header__menu-icon--close-x');
  $('.primary-nav').slideToggle(300);
});
