const slider = document.querySelector('.slider');
const photo = document.querySelector('.photo');
const quote = document.querySelector('.quote');
const name = document.querySelector('.name');
const designation = document.querySelector('.designation');

const btnPrevious = document.querySelector('#previous');
const btnNext = document.querySelector('#next');

const testimonials = [
    {
        photo: './images/image-tanya.jpg',
        quote: `I’ve been interested in coding for a while but never taken the
        jump, until now. I couldn’t recommend this course enough. I’m
        now in the job of my dreams and so excited about the future.`,
        name: 'Tanya Sinclair',
        designation: 'UX Engineer'
    },
    {
        photo: './images/image-john.jpg',
        quote: `If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer.`,
        name: 'John Tarkpor',
        designation: 'Junior Front-end Developer'
    }
];

let currSlideIndex = 0;

populateSlide();

btnPrevious.addEventListener('click', () => {
    if (currSlideIndex === 0) {
        currSlideIndex = testimonials.length - 1;
    } else {
        currSlideIndex--;
    }
    populateSlide();
});

btnNext.addEventListener('click', () => {
    const last = testimonials.length - 1;
    if (currSlideIndex === last) {
        currSlideIndex = 0;
    } else {
        currSlideIndex++;
    }
    populateSlide();
});

function populateSlide() {
    const testimonial = testimonials[currSlideIndex];

    if (!testimonial) {
        return;
    }

    photo.setAttribute('src', testimonial.photo);
    quote.innerHTML = `“ ${testimonial.quote} ”`;
    name.innerHTML = testimonial.name;
    designation.innerHTML = testimonial.designation;

    startTransition();
}

function startTransition() {
    slider.classList.remove('transition-slide');

    // cause reflow so that the animation restarts
    void (slider.offsetHeight);

    slider.classList.add('transition-slide');
}