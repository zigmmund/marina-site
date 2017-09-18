// Triggering mobile menu
$('.site-header__menu-icon').on('click', function() {

  $(this).toggleClass('site-header__menu-icon--close-x');
  $('.primary-nav').slideToggle(300);

});

// Sticky header
var h = window.innerHeight;
var wrap = $('.site-header');

$(document).on('scroll', function() {
  scrollTop = $(document).scrollTop();
  h = $(window).innerHeight();

  if (scrollTop > h) {
    wrap.addClass("site-header--fixed");
  } else {
    wrap.removeClass("site-header--fixed");
  }
})


// $(document).scroll(function() {
//     console.log($(document).scrollTop());
// })


// Slider initialization
$(function() {

    $(".rslides").responsiveSlides({
      auto: true,
      pager: false,
      nav: true,
      speed: 500,
      namespace: "centered-btns"
    });

    $('.animate').scrolla();
});

// Smooth Scrolling

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
