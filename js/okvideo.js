function videoint() {
    var vch = $(".video-container video");

    // Always make video full screen
    vch.css({
        "width": $(window).width() + "px",
        "height": $(window).height() + "px",
        "object-fit": "cover"
    });
}

// Run on page load
$(document).ready(function () {
    videoint();
});

// Run again when window resizes (desktop resize / mobile rotation)
$(window).on("resize", function () {
    videoint();
});
