// const { active } = require("browser-sync")


const sections = $("section")
const display = $(".main")
const sidemenu = $('.pager')

let inScroll = false

sections.first().addClass('active')

const countSectionPosition = sectionEq => {
		return sectionEq * -100;
}

const changeMenuThemeForSection = sectionEq => {
		const currentSection = sections.eq(sectionEq)
		const menuTheme = currentSection.attr('data-sidemenu-theme')
		const activeClass = 'circle--shadowed'

		if (menuTheme == 'black') {
			sidemenu.addClass(activeClass)
		} else {
			sidemenu.removeClass(activeClass)
		}
}

const performTransition = sectionEq => {
	if ($('body').hasClass("scrollLock")) {
		return
	}
	if (inScroll == false) {
		inScroll = true;
		const position = countSectionPosition(sectionEq)

		changeMenuThemeForSection(sectionEq)

		display.css({
        transform: `translateY(${position}%)`
    });

		sections.eq(sectionEq).addClass('active').siblings().removeClass('active')

		setTimeout(() => {
			inScroll = false;

			sidemenu.find('.pager__item').eq(sectionEq).addClass('pager__item--active').siblings().removeClass('pager__item--active');
		}, 1300);
	}
}

const scrollViewport = direction => {
	const activeSection = sections.filter('.active')
	const nextSection = activeSection.next()
	const prevSection = activeSection.prev()

	if (direction == 'next' && nextSection.length ) {
		performTransition(nextSection.index())
	}
	
	if (direction == 'prev' && prevSection.length) {
		performTransition(prevSection.index())
	}
}

$(window).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;

    if (deltaY > 0) {
				scrollViewport('next')
    } else if (deltaY < 0) {
        scrollViewport('prev')
    }
})

$(window).on('keydown', e => {
const tagName = e.target.tagName.toLowerCase()

if (tagName != 'input' && tagName != 'textarea') {
	switch(e.keyCode) {
		case 38:
		scrollViewport('prev')
			break;

		case 40: 
		scrollViewport('next')
			break;
	}
}
})

const mobileDetect = new MobileDetect(window.navigator.userAgent)
const isMobile = mobileDetect.mobile();

if (isMobile) {
	$("body").swipe({
	swipe:function(event, direction,) {

		if (direction == 'up') {
			scrollViewport('next')
		} 
			
		if (direction == 'down') {
			scrollViewport('prev')
		}
	}
})};

$('.wapper').on('touchmove', e => {
	e.preventDefault();
})

$('[data-scroll-to]').click(e => {
	e.preventDefault()
	$('body').removeClass('scrollLock')

	const target = $(e.currentTarget)
	const targetScroll = target.attr('data-scroll-to')
	const reqSection = $(`[data-section-id=${targetScroll}]`)

	performTransition(reqSection.index())
})

