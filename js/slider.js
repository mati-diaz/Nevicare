document.addEventListener('DOMContentLoaded', () => {
    slider();
});

// Slider
function slider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const nextBtn = document.querySelector('.flecha-der');
    const prevBtn = document.querySelector('.flecha-izq');
    let currentSlide = 0;

    nextBtn.addEventListener('click', () => {
        if(currentSlide === slides.length - 1) {
            currentSlide = 0;
        } else {
            currentSlide += 1;
        }
        updateSlideDot(dots, slides, currentSlide);
    });

    prevBtn.addEventListener('click', () => {
        if(currentSlide === 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide -= 1;
        }
        updateSlideDot(dots, slides, currentSlide);
    });
    
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentSlide = Number(dot.classList[1].split('-')[1]) - 1;
            updateSlideDot(dots, slides, currentSlide);
        });
    });
}

const updateSlideDot = (dots, slides, currentSlide) => {
    dots.forEach(dot => {
        if(dot.classList.contains('current-dot') ) {
            dot.classList.remove('current-dot')
            dots[currentSlide].classList.add('current-dot');
        }
    })

    slides.forEach(slide => {
        if(slide.classList.contains('show')) {
            slide.classList.remove('show');
            slides[currentSlide].classList.add('show');
        }
    });
}