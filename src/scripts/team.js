$(
    () => {
    let memberParam = document.getElementsByClassName("name__row")
    let memberArray = Array.from(memberParam)

    memberArray.forEach((element) => {
        element.addEventListener("click", function(e) {
            e.preventDefault();

            let target = $(e.target).closest('.name__row')
            let targetBox = $(target).siblings('.member__param-box')
            let targetStatus = $(targetBox).css("display")
            let arrow = $(e.target).siblings(".arrow-down")

            arrow.toggleClass("arrow--up")
            
            if (targetStatus == "none") {
                $('.member__param-box').css("display", "none")
                $(targetBox).css("display", "grid");
            } else if (targetStatus == "grid") {
                $(targetBox).css("display", "none");
            }

        })
    })
});