$(
() => {
    let color  = document.getElementsByClassName("colors__item")
    let colorArray = Array.from(color)

    colorArray.forEach((element) => {
        element.addEventListener("click", function(e) {
            targetText = $(e.target).next(".color__info")
            targetTextStatus = $(targetText).css("width")
            targetBlock = $(e.target).find(".color__menu-block")
            targetBox = $(e.target).closest(".colors__item")
            colorItem = document.querySelectorAll(".colors__item")

            if (targetTextStatus == "0px") {
                $(".colors__title").addClass("color__title--hover")
                $(".color__info").removeClass("color__info--hover")
                $(targetText).addClass("color__info--hover")
                $(colorItem).addClass("color__item--hover")
                $(targetBox).removeClass("color__item--hover")
            } else {
                $(".colors__item").removeClass("color__item--hover")
                $(".color__info").removeClass("color__info--hover")
                $(".colors__title").removeClass("color__title--hover")
            }
        })
    })
})