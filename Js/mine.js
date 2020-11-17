$(document).ready(function () {

  

  $("nav .navbar-togggler-menu .bar").click(function () {
    $("nav .menu").slideToggle();
  });

  $("#myText").on("keyup", function () {
    var count = $("#myText").val().trim().split(" ");
    $(".num-words").text(count.length);
  });

  $(".Checked").circleProgress({
    value: 1,
    fill: {
      gradient: ["#307bbb"],
    },
    size: 60,
  });
  $(".Plagiarism").circleProgress({
    value: 1,
    fill: {
      gradient: ["#f00"],
    },
    size: 60,
  });
  $(".Unique").circleProgress({
    value: 1,
    fill: {
      gradient: ["#ccc"],
    },
    size: 60,
  });

  var myStr = $(".page-content .Results .Plagiarism-box .phrase").text();
  var subStr = myStr.substring(0, 20) + "...";
  $(".page-content .Results .Plagiarism-box .phrase").html(subStr);

 

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    smartSpeed:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
});
