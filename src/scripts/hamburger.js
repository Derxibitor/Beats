$(
    () => {
    $(".cross").on("click", () => {
        $(".fullscreen__menu").css("display", "none")
    })

    $(".dropdown").on("click", () => {
        $(".fullscreen__menu").css("display", "flex")
    })
});