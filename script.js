$(".request-consultation").on("click", function() {
    $(".mobile-call-to-action").css("top", "0px");
    $(".close-request-consultation").css("display", "block");
    $("#right-arrow").css("display", "none");
    $("#left-arrow").css("display", "none");
    $(".request-consultation").css("padding", "0 0 20px 0");
});
$(".close-request-consultation").on("click", function() {
    $(".mobile-call-to-action").css("top", "93vh");
    $(".close-request-consultation").css("display", "none");
    $("#right-arrow").css("display", "block");
    $("#left-arrow").css("display", "block");
});