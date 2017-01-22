/*
   Script : Cse_Main.js
   Author : Satheesh Kumar
   Date   : 21/1/2017
   Version: 0.1
*/

$(document).ready(function(){$(".se-pre-con").fadeOut("slow");$('[data-toggle="tooltip"]').tooltip();$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html, body').animate({scrollTop:target.offset().top},1000);return!1}}})});$(function(){$(".dropdown").hover(function(){$('.dropdown-menu',this).stop(!0,!0).fadeIn("fast");$(this).toggleClass('open')},function(){$('.dropdown-menu',this).stop(!0,!0).fadeOut("fast");$(this).toggleClass('open')})})