const nextSlideBtn = document.querySelector('.quiz__btn--next');
const prevSlideBtn = document.querySelector('.quiz__btn--prev');
const doneBtn = document.querySelector('.quiz__btn--done');

const body = document.body;
const answers = document.querySelectorAll('.quiz__answer input');

const quiz = new Swiper('.quiz__slider', {
  slidesPerView: 1,
  allowTouchMove: false,
  autoHeight: true,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
  },
  on: {
    activeIndexChange: function () {
      if (quiz.activeIndex) {
        prevSlideBtn.style.display = 'block';
      } else {
        prevSlideBtn.style.display = '';
      }

      if (quiz.slides.length - 1 === quiz.activeIndex) {
        prevSlideBtn.style.display = '';
        doneBtn.style.display = 'block';
        nextSlideBtn.style.display = 'none';
      }
    }
  }
});

nextSlideBtn.addEventListener('click', ()=> {
  quiz.slideNext();
});

prevSlideBtn.addEventListener('click', ()=> {
  quiz.slidePrev();
});

doneBtn.addEventListener('click', ()=> {
  body.classList.add('quiz--done');
 
  let points = 0;

  answers.forEach(answer => {
    if (answer.checked) {
      points += +answer.value;
    }
  })

  const quizResult = document.querySelector(`.quiz__result[data-result="${points}"]`);

  quizResult.style.display = 'flex';
})
