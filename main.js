$(document).ready(function () {
  $(".btn-container button").click(function () {
    let num = $(this).html();
    $(".screen").append(num);
  });
  $(".equal").click(function () {
    let display = $(".screen").html();
    let total=eval(display)

    $(".screen").html(total);
  });
});
