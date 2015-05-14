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
