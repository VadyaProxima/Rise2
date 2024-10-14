document.addEventListener('DOMContentLoaded', () => {
	const sliderList = document.querySelector('.testimonials__list')
	const slides = Array.from(sliderList.children)
	const prevButton = document.querySelector('.slider__button--prev')
	const nextButton = document.querySelector('.slider__button--next')
	const dotsContainer = document.querySelector('.slider__dots')

	let currentIndex = 0

	// Create dots
	slides.forEach((_, index) => {
		const dot = document.createElement('span')
		dot.classList.add('dot')
		if (index === 0) dot.classList.add('active')
		dot.addEventListener('click', () => goToSlide(index))
		dotsContainer.appendChild(dot)
	})

	const updateDots = index => {
		dotsContainer.querySelectorAll('span').forEach((dot, idx) => {
			dot.classList.toggle('active', idx === index)
		})
	}

	const goToSlide = index => {
		currentIndex = index
		sliderList.style.transform = `translateX(-${100 * index}%)`
		updateDots(index)
	}

	prevButton.addEventListener('click', () => {
		currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1
		goToSlide(currentIndex)
	})

	nextButton.addEventListener('click', () => {
		currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1
		goToSlide(currentIndex)
	})
})



