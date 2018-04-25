$(document).ready(function(){
  $('.projects').slick();
  $("#scrollto-landing").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio-landing").offset().top
    }, 500);
  });
  $("#scrollto-projects").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects-carousel").offset().top
    }, 500);
  });
  $("#scrollto-skills").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills").offset().top
    }, 500);
  });
  $("#scrollto-resume").click(function() {
    $('html, body').animate({
        scrollTop: $("#resume").offset().top
    }, 500);
  });
  $("#scrollto-contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 500);
  });
});
