import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

import 'swiper/css';
// import 'swiper/css/keyboard';
// import 'swiper/css/navigation';
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


function showErrorToast(message) {
  iziToast.show({
    message,
    image: '../img/bi_x-octagon.svg',
    messageColor: '#FFF',
    position: 'topRight',
    backgroundColor: '#E74A3B',
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

function renderReviewList(items) {
  if (items && items.length) {
    return items.map(renderReviewItem).join('');
  }
  return '';
}

const reviewList = document.querySelector('.reviews-list');


axios.get('https://portfolio-js.b.goit.study/api/reviews')
  .then(response => {
    if (response.status === 200) {
      reviewList.innerHTML = renderReviewList(response.data);

      const swiper = new Swiper('.swiper', {

        modules: [Navigation, Keyboard, Mousewheel],
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoHeight: true,
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

    } else {
      showErrorToast('Sorry, something went wrong. Try one more time.');
    }
  })
  .catch(() => {
      showErrorToast('Sorry, something went wrong. Try one more time.');
  });

