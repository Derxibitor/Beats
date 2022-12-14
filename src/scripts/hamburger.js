$(
    () => {
    $(".cross").on("click", () => {
        $(".fullscreen__menu").css("display", "none")
				$('body').removeClass('scrollLock')
    })

    $(".dropdown").on("click", () => {
        $(".fullscreen__menu").css("display", "flex")
				$('body').addClass('scrollLock')
    })

		$('.menu__link').on('click',() => {
			$(".fullscreen__menu").css("display", "none")
			$('body').removeClass('scrollLock')
		})
});