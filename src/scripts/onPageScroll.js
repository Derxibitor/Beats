const sections = $("section")
const display = $(".main")

const performTransition = sectionEq => {
    const position = sectionEq * -100;

    display.css({
        transform: `translateY(${position}%)`
    });
}

$(window).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;

    if (deltaY > 0) {
        performTransition(8);
    } else if (deltaY < 0) {
        console.log(deltaY);
    }
})