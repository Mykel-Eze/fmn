$(window).scroll(function () {
    $('nav.trans-nav').toggleClass('scrolled-nav', $(this).scrollTop() > 50);
});