const slider = document.querySelector('.slider');
const photo = document.querySelector('.photo');
const quote = document.querySelector('.quote');
const name = document.querySelector('.name');
const designation = document.querySelector('.designation');

const btnPrevious = document.querySelector('#previous');
const btnNext = document.querySelector('#next');

const testimonials = [
    {
        photo: './assets/images/image-tanya.jpg',
        quote: `I’ve been interested in coding for a while but never taken the
        jump, until now. I couldn’t recommend this course enough. I’m
        now in the job of my dreams and so excited about the future.`,
        name: 'Tanya Sinclair',
        designation: 'UX Engineer'
    },
    {
        photo: './assets/images/image-john.jpg',
        quote: `If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer.`,
        name: 'John Tarkpor',
        designation: 'Junior Front-end Developer'
    }
];

const PREVIOUS = -1;
const NEXT = 1;

let currSlideIndex = 0;

populateSlide();

btnPrevious.addEventListener('click', () => {
    if (currSlideIndex === 0) {
        currSlideIndex = testimonials.length - 1;
    } else {
        currSlideIndex--;
    }
    populateSlide(PREVIOUS);

    playClickSound();
});

btnNext.addEventListener('click', () => {
    const last = testimonials.length - 1;
    if (currSlideIndex === last) {
        currSlideIndex = 0;
    } else {
        currSlideIndex++;
    }
    populateSlide(NEXT);

    playClickSound();
});

function populateSlide(direction) {
    const testimonial = testimonials[currSlideIndex];

    if (!testimonial) {
        return;
    }

    photo.setAttribute('src', testimonial.photo);
    quote.innerHTML = `“ ${testimonial.quote} ”`;
    name.innerHTML = testimonial.name;
    designation.innerHTML = testimonial.designation;

    const firstLoad = !direction;
    if (firstLoad) {
        playInitialAnimation();

    } else {
        startTransition(direction);
    }
}

function playInitialAnimation() {
    slider.classList.add('initial-animation');
}

function startTransition(direction) {
    // First make sure to remove the inital animation class
    slider.classList.remove('initial-animation');

    if (direction === PREVIOUS) {
        slider.classList.remove('transition-slide-left');
        slider.classList.remove('transition-slide-right');
        reflow();
        slider.classList.add('transition-slide-left');
    }

    if (direction === NEXT) {
        slider.classList.remove('transition-slide-left');
        slider.classList.remove('transition-slide-right');
        reflow();
        slider.classList.add('transition-slide-right');
    }

    // Causes reflow so that the animation restarts
    function reflow() {
        void (slider.offsetHeight);
    }
}

let audio = new Audio();
function playClickSound() {
    audio.pause();
    audio = new Audio('./assets/audio/click.mp3');
    audio.volume = 0.2;
    audio.play();
}