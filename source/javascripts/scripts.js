//= require "ga"
//= require jquery/dist/jquery
//= require "foundation/js/foundation.min"
//= require "user_agent"
//= require "jquery.biggerlink.min"
//= require "jquery.heightLine"
//= require "jquery-smooth-scroll/jquery.smooth-scroll.min"


// foundation
$(document).foundation();

// biggerlink
$('.project-box').biggerlink();

// scroll blocks
$('a').smoothScroll({
    easing: 'swing',
    speed: 1000
});

// scroll top
var topBtn = $('.pagetop');
topBtn.hide();
$(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
        topBtn.fadeIn();
    } else {
        topBtn.fadeOut();
    }
});
topBtn.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 700);
    return false;
});

// hover fade
$('a img, .fade').hover(
    function() {
        $(this).stop().fadeTo(200, 0.6);
    },
    function() {
        $(this).stop().fadeTo(200, 1.0);
    });

// rollover
$(".rollover").mouseover(function() {
    $(this).attr("src", $(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
}).mouseout(function() {
    $(this).attr("src", $(this).attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1$2"));
}).each(function() {
    $("<img>").attr("src", $(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"));
});
