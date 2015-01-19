//= require "ga"
//= require "jquery-1.11.1.min.js"
//= require "fastclick/lib/fastclick"
//= require "jquery.easing-1.3.pack"
//= require "jquery.biggerlink.min"
//= require "jquery-smooth-scroll/jquery.smooth-scroll.min"


// twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

// nav
(function($){
    // Menu Functions
    $(document).ready(function(){
    $('#menuToggle').click(function(e){
        var $parent = $(this).parent('nav');
      $parent.toggleClass("open");
      var navState = $parent.hasClass('open') ? "hide" : "show";
      $(this).attr("title", navState + " navigation");
            // Set the timeout to the animation length in the CSS.
            setTimeout(function(){
                console.log("timeout set");
                $('#menuToggle > span').toggleClass("navClosed").toggleClass("navOpen");
            }, 200);
        e.preventDefault();
    });
  });
})(jQuery);

/*
 * searchua
 * version: 0.1.0
 * lastupdate: 2014-01-20
 * author: Masaki Hongo
 * git: https://github.com/masakihongo/searchUA
 * license: MIT
 */
! function(a, b) {
    "use strict";
    a.ua = {};
    var c = a.ua;
    c.name = a.navigator.userAgent.toLowerCase(), c.isIE = c.name.indexOf("msie") >= 0 || c.name.indexOf("trident") >= 0, c.isiPhone = c.name.indexOf("iphone") >= 0, c.isiPod = c.name.indexOf("ipod") >= 0, c.isiPad = c.name.indexOf("ipad") >= 0, c.isiOS = c.isiPhone || c.isiPod || c.isiPad, c.isAndroid = c.name.indexOf("android") >= 0, c.isTablet = c.isiPad || c.isAndroid && c.name.indexOf("mobile") < 0, c.isIE && (c.verArray = /(msie|rv:?)\s?([0-9]{1,})([\.0-9]{1,})/.exec(c.name), c.verArray && (c.ver = parseInt(c.verArray[2], 10))), c.isiOS && (c.verArray = /(os)\s([0-9]{1,})([\_0-9]{1,})/.exec(c.name), c.verArray && (c.ver = parseInt(c.verArray[2], 10))), c.isAndroid && (c.verArray = /(android)\s([0-9]{1,})([\.0-9]{1,})/.exec(c.name), c.verArray && (c.ver = parseInt(c.verArray[2], 10))), c.isIE && b("body").addClass("ie ie_" + c.ver), c.isiPhone && b("body").addClass("iPhone"), c.isiPod && b("body").addClass("iPod"), c.isiPad && b("body").addClass("iPad"), c.isiOS && b("body").addClass("iOS iOS_" + c.ver), c.isAndroid && b("body").addClass("android android_" + c.ver), c.isTablet && b("body").addClass("tablet")
}(this, jQuery);
if (ua.isIE) {
    $('body').addClass('ie ie_' + ua.ver);
}
if (ua.isiPhone) {
    $('body').addClass('iPhone');
}
if (ua.isiPod) {
    $('body').addClass('iPod');
}
if (ua.isiPad) {
    $('body').addClass('iPad');
}
if (ua.isiOS) {
    $('body').addClass('iOS iOS_' + ua.ver);
}
if (ua.isAndroid) {
    $('body').addClass('android android_' + ua.ver);
}
if (ua.isTablet) {
    $('body').addClass('tablet');
}

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

// header
// var header = $('header');
// $(window).scroll(function() {
//     if ($(window).scrollTop() > 450) {
//         header.addClass('header-scroll');
//     } else {
//         header.removeClass('header-scroll');
//     }
// });

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
