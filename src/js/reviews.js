import Swiper from 'swiper';
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';
import 'swiper/css';
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


function showErrorToast(message) {
  iziToast.show({
    message,
    image: '../img/bi_x-octagon.svg',
    messageColor: '#FFF',
    position: 'topRight',
    backgroundColor: '#d66c66',
    maxWidth: '472px',
    imageWidth: 24,
  });
}

function renderReviewItem(item) {
  return ` <li class="reviews-item swiper-slide" data-id="${item._id}" tabindex="0">
        <p>${item.review}</p>
        <div class="block-author-review">
          <img class="author-photo-review" src="${item.avatar_url}" alt="photo author">
          <p class="author-name-review">${item.author}</p>
        </div>
      </li>`;
}

const prevButton = document.querySelector('.swiper-button-prev');
const nextButton = document.querySelector('.swiper-button-next');

function createReviewList(items) {
  const reviewList = document.querySelector('.reviews-list');
  const notFound = document.querySelector('.reviews-not-found');

  items = items || [];
  if (items.length) {
    reviewList.innerHTML = items.map(renderReviewItem).join('');
  } else {
    prevButton.disabled = true;
    nextButton.disabled = true;
    reviewList.classList.add('hidden');
    notFound.classList.remove('hidden');
  }
}

function initSlider() {

  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Keyboard, Mousewheel],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoHeight: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 32,
      },
      1280: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: {
      invert: false,
      forceToAxis: true,
    },
  });

  const slides = document.querySelectorAll('.swiper-slide');
  slides.forEach((slide, index) => {
    slide.addEventListener('focus', () => {
      swiper.slideTo(index);
    });
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
      const activeSlide = document.activeElement;
      if (activeSlide && activeSlide.classList.contains('swiper-slide')) {
        if (event.shiftKey) {
          swiper.slidePrev();
        } else {
          swiper.slideNext();
        }
        event.preventDefault();
        const newActiveSlide = document.querySelector('.swiper-slide-active');
        if (newActiveSlide) {
          newActiveSlide.focus();
        }
      }
    }
  });


  swiper.on('slideChange', () => {
    prevButton.disabled = swiper.isBeginning;
    nextButton.disabled = swiper.isEnd;
  });
}


axios.get('https://portfolio-js.b.goit.study/api/reviews')
  .then(response => {
    if (response.status === 200) {
      createReviewList(response.data);
      initSlider();

    } else {
      showErrorToast('Sorry, something went wrong. Try one more time.');
      createReviewList([]);
    }
  })
  .catch(() => {
    showErrorToast('Sorry, something went wrong. Try one more time.');
    createReviewList([]);

  });

