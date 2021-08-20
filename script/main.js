$(document).ready(function () {
    move()
})

function move() {
    $("li").click(function () {
        if ($(this).find(".borderOverlay").length) {
            $(this).find(".borderOverlay").remove();
        } else {
            $(this).append('<div class="borderOverlay"><i class="fa fa-check"></i></div>');
        }
    })
}