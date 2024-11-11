// slider

const swiper1 = new Swiper('.swiper1', {
	direction: 'horizontal',
	loop: true,
	

	pagination: {
		el: '.swiper-pagination1',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev1',
	},
})



const swiper3 = new Swiper('.swiper3', {
	direction: 'horizontal',
	spaceBetween: 20,
	loop: true,

	breakpoints: {
		320: {
			slidesPerView: 1,
			centeredSlides: false,
		},

		576: {
			slidesPerView: 1.2,
			centeredSlides: true,
		},

		992: {
			slidesPerView: 1.5,
			centeredSlides: true,
		},
		1400: {
			slidesPerView: 2,
			centeredSlides: true,
		},
	},

	pagination: {
		el: '.swiper-pagination3',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper-button-next3, .swiper-button-next31',
		prevEl: '.swiper-button-prev3, .swiper-button-prev31',
	},
})

function updateNavigation() {
	const windowWidth = window.innerWidth

	if (windowWidth <= 576) {
		swiper3.params.navigation.nextEl = '.swiper-button-next31'
		swiper3.params.navigation.prevEl = '.swiper-button-prev31'
	} else {
		swiper3.params.navigation.nextEl = '.swiper-button-next3'
		swiper3.params.navigation.prevEl = '.swiper-button-prev3'
	}

	swiper3.navigation.destroy()
	swiper3.navigation.init()
	swiper3.navigation.update()
}

window.addEventListener('resize', updateNavigation)
updateNavigation()

const swiper4 = new Swiper('.swiper4', {
	direction: 'horizontal',
	spaceBetween: 20,
	loop: true,

	breakpoints: {
		320: {
			slidesPerView: 1,
		},

		576: {
			slidesPerView: 2,
		},

		992: {
			slidesPerView: 2,
		},
		1400: {
			slidesPerView: 3,
		},
	},

	pagination: {
		el: '.swiper-pagination4',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper-button-next4',
		prevEl: '.swiper-button-prev4',
	},
})

const swiper5 = new Swiper('.swiper5', {
	direction: 'horizontal',
	loop: true,

	navigation: {
		nextEl: '.swiper-button-next5',
		prevEl: '.swiper-button-prev5',
	},
})

const swiper6 = new Swiper('.swiper6', {
	direction: 'horizontal',
	loop: true,

	navigation: {
		nextEl: '.swiper-button-next6',
		prevEl: '.swiper-button-prev6',
	},
})
const swiper7 = new Swiper('.swiper7', {
	direction: 'horizontal',
	loop: true,
	spaceBetween: 10,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},

		576: {
			slidesPerView: 2,
		},

		992: {
			slidesPerView: 2,
		},
		1400: {
			slidesPerView: 3,
		},
	},

	navigation: {
		nextEl: '.swiper-button-next7',
		prevEl: '.swiper-button-prev7',
	},
})

const swiper8 = new Swiper('.swiper8', {
	direction: 'horizontal',
	loop: true,
	spaceBetween: 20,

	breakpoints: {
		320: {
			slidesPerView: 1,
		},

		576: {
			slidesPerView: 2,
		},

		992: {
			slidesPerView: 3,
		},
		1400: {
			slidesPerView: 3,
		},
	},

	navigation: {
		nextEl: '.swiper-button-next8, .swiper-button-next81',
		prevEl: '.swiper-button-prev8, .swiper-button-prev81',
	},
})

function updateNavigation2() {
	const windowWidth = window.innerWidth

	if (windowWidth <= 576) {
		swiper8.params.navigation.nextEl = '.swiper-button-next81'
		swiper8.params.navigation.prevEl = '.swiper-button-prev81'
	} else {
		swiper8.params.navigation.nextEl = '.swiper-button-next8'
		swiper8.params.navigation.prevEl = '.swiper-button-prev8'
	}

	swiper8.navigation.destroy()
	swiper8.navigation.init()
	swiper8.navigation.update()
}

window.addEventListener('resize', updateNavigation2)
updateNavigation2()

// anchor


if (window.localStorage && window.location.hash) {
	if (!localStorage.getItem('firstLoad')) {
		localStorage['firstLoad'] = true
		window.location.reload()
	} else {
		localStorage.removeItem('firstLoad')
	}
}

document.addEventListener('DOMContentLoaded', function () {
	const hash = window.location.hash
	if (!hash) return
	const scrollTarget = document.querySelector(hash)
	const topOffset = document.querySelector('header').offsetHeight
	const elementPosition = scrollTarget.getBoundingClientRect().top
	const offsetPosition = elementPosition - topOffset

	window.scrollBy({
		top: offsetPosition,
		behavior: 'smooth',
	})
})

document.querySelectorAll('a[href*="#"').forEach(link => {
	link.addEventListener('click', function (e) {
		const currentUrl = window.document.href
		let href = this.getAttribute('href').split('#')

		if (currentUrl !== href) window.location.replace(href.join('#'))
		e.preventDefault()

		const scrollTarget = document.getElementById(href[1])
		const topOffset = document.querySelector('header').offsetHeight
		const elementPosition = scrollTarget.getBoundingClientRect().top
		const offsetPosition = elementPosition - topOffset

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth',
		})
	})
})