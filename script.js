$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $(".navbar").addClass("sticky-header");
    $(".navbar").css("margin-top", "0px");
  } else {
    $(".navbar").removeClass("sticky-header");
    $(".navbar").css("margin-top", "40px");
  }
});

$("body").scrollspy({ target: "#navbar-spy" });
