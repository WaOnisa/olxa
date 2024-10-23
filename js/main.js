const swiper1 = new Swiper('.swiper1', {

	direction: 'horizontal',
	loop: true,

	pagination: {
		el: '.swiper-pagination1',
	},

	navigation: {
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev1',
	},
})

const swiper2 = new Swiper('.swiper2', {
	direction: 'horizontal',
	loop: true,

	pagination: {
		el: '.swiper-pagination2',
		clickable: true,
		type: 'custom',
	},
})

const swiper3 = new Swiper('.swiper3', {
	direction: 'horizontal',
	slidesPerView: 2,
	centeredSlides: true,
	spaceBetween: 20,
	loop: true,

	pagination: {
		el: '.swiper-pagination3',
	},

	navigation: {
		nextEl: '.swiper-button-next3',
		prevEl: '.swiper-button-prev3',
	},
})
