$(
    () => {
    let userLink = document.getElementsByClassName("user-list__link")
    let userArray = Array.from(userLink)

    const findBlockByAlias = alias => {
        return $(".review__item").filter((ndx, item) => {
            return $(item).attr("data-linked-with") == alias;
        })
    }

    userArray.forEach((element) => {
        element.addEventListener("click", function (e) {
            let currentLink = $(e.target).closest(userLink)
            const target = $(e.target).attr("data-open")
            const itemToShow = findBlockByAlias(target)

            e.preventDefault();
            $(currentLink).addClass("user-list__link--active").siblings().removeClass("user-list__link--active")
            itemToShow.addClass("review__item--active").siblings().removeClass("review__item--active")
        });
    })
});