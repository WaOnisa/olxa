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

const swiper2 = new Swiper('.swiper2', {
	direction: 'horizontal',
	loop: true,
	spaceBetween: 20,

	pagination: {
		el: '.swiper-pagination2',
		clickable: true,
		renderBullet: function (i, classes) {
			const buttons = ['Территория', 'Близко', 'Природа', 'Комфорт']
			const svg = [
				`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22V15L10 13M14 14L12 16M17 8V8.8C18.1625 9.46723 19.0682 10.5045 19.5725 11.7464C20.0767 12.9883 20.1507 14.3633 19.7824 15.6521C19.4142 16.9409 18.625 18.0693 17.5408 18.8574C16.4565 19.6454 15.1396 20.0476 13.8 20H10C8.62897 19.9069 7.32269 19.3817 6.26881 18.4998C5.21493 17.6178 4.46768 16.4246 4.13438 15.0914C3.80109 13.7582 3.8989 12.3537 4.41377 11.0796C4.92864 9.80549 5.83407 8.72734 7.00002 8C7.00002 6.67392 7.52681 5.40215 8.46449 4.46447C9.40217 3.52678 10.6739 3 12 3C13.3261 3 14.5979 3.52678 15.5356 4.46447C16.4732 5.40215 17 6.67392 17 8Z" stroke="#748A5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>`,
				`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 17H21C21.6 17 22 16.6 22 16V13C22 12.1 21.3 11.3 20.5 11.1C18.7 10.6 16 10 16 10C16 10 14.7 8.6 13.8 7.7C13.3 7.3 12.7 7 12 7H5C4.4 7 3.9 7.4 3.6 7.9L2.2 10.8C2.06758 11.1862 2 11.5917 2 12V16C2 16.6 2.4 17 3 17H5M19 17C19 18.1046 18.1046 19 17 19C15.8954 19 15 18.1046 15 17M19 17C19 15.8954 18.1046 15 17 15C15.8954 15 15 15.8954 15 17M5 17C5 18.1046 5.89543 19 7 19C8.10457 19 9 18.1046 9 17M5 17C5 15.8954 5.89543 15 7 15C8.10457 15 9 15.8954 9 17M9 17H15" stroke="#748A5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>`,
				`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 5L17 2M17 2L20 5M17 2V14M14 10L17 7L20 10M17 14H7L2 22H22L17 14ZM8 14V22M9 14L14 22M6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4Z" stroke="#748A5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>`,
				`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C13.8565 22 15.637 21.2625 16.9497 19.9497C18.2625 18.637 19 16.8565 19 15C19 13 18 11.1 16 9.5C14 7.9 12.5 5.5 12 3C11.5 5.5 10 7.9 8 9.5C6 11.1 5 13 5 15C5 16.8565 5.7375 18.637 7.05025 19.9497C8.36301 21.2625 10.1435 22 12 22Z" stroke="#748A5B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>`,
			]
			return `<span class="${classes}">${svg[i]}<p>${buttons[i]}</p></span>`
		},
	},
})

const swiper3 = new Swiper('.swiper3', {
	direction: 'horizontal',

	loop: true,

	breakpoints: {
		320: {
			slidesPerView: 1,
			centeredSlides: true,
		},

		576: {
			slidesPerView: 1.2,
		},

		992: {
			slidesPerView: 1.5,
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

	swiper3.navigation.destroy() // Удаляем предыдущие навигационные элементы
	swiper3.navigation.init() // Переинициализируем навигацию
	swiper3.navigation.update() // Обновляем навигационные элементы
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

	navigation: {
		nextEl: '.swiper-button-next7',
		prevEl: '.swiper-button-prev7',
	},
})

// anchor
