!function(){"use strict";var a=function(){$(".loader").fadeOut("slow")},t=function(){new Typed("#text-slider-tech",{strings:"Backend developer, Java, Springboot, Microservice".split(", "),typeSpeed:50,loop:!0,backDelay:900,backSpeed:30})},e=function(){$(window).stellar()},n=function(){var a=0;$(".animate-box").waypoint(function(t){"down"!==t||$(this.element).hasClass("animated-fast")||(a++,$(this.element).addClass("item-animate"),setTimeout(function(){$("body .animate-box.item-animate").each(function(a){var t=$(this);setTimeout(function(){var a=t.data("animate-effect");"fadeIn"===a?t.addClass("fadeIn animated-fast"):"fadeInLeft"===a?t.addClass("fadeInLeft animated-fast"):"fadeInRight"===a?t.addClass("fadeInRight animated-fast"):t.addClass("fadeInUp animated-fast"),t.removeClass("item-animate")},100*a,"easeInOutExpo")})},50))},{offset:"85%"})},s=function(){$(".js-gotop").on("click",function(a){return a.preventDefault(),$("html, body").animate({scrollTop:$("html").offset().top},500,"easeInOutExpo"),!1}),$(window).scroll(function(){$(window).scrollTop()>200?$(".js-top").addClass("active"):$(".js-top").removeClass("active")})},i=function(){$(".chart").easyPieChart({scaleColor:!1,lineWidth:4,lineCap:"butt",barColor:"#00baff",trackColor:"#f5f5f5",size:160,animate:1e3})},o=function(){$("#na-skills").length>0&&$("#na-skills").waypoint(function(a){"down"!==a||$(this.element).hasClass("animated")||(setTimeout(i,400),$(this.element).addClass("animated"))},{offset:"90%"})};$(function(){a(),t(),n(),s(),e(),i(),o()})}();