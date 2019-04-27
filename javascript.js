$(".header-subtitle").click(function() {
  $(".call-to-action").slideToggle("slow");
});

$(".call-button").click(function () {
  event.preventDefault();
  $(".column img").toggleClass("bigger")
});
