import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
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

const reviewList = document.querySelector('.reviews-list');

function renderReviewList(items) {
  if (items && items.length) {
    return items.map(renderReviewItem).join('');
  }
  reviewList.style.justifyContent = 'center';
  return  '<div class="reviews-not-found"><p>Not found</p></div>';
}



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

      swiper.on('slideChange', function () {
        updateNavigationButtons();
      });

      function updateNavigationButtons() {
        const prevButton = document.querySelector('.swiper-button-prev');
        const nextButton = document.querySelector('.swiper-button-next');

        if (swiper.isBeginning) {
          prevButton.disabled = true;
        } else {
          prevButton.disabled = false;
        }

        if (swiper.isEnd) {
          nextButton.disabled = true;
        } else {
          nextButton.disabled = false;
        }
      }

    } else {
      showErrorToast('Sorry, something went wrong. Try one more time.');
      reviewList.innerHTML = '<p class="reviews-not-found">Not found</p>';
    }
  })
  .catch(() => {
      showErrorToast('Sorry, something went wrong. Try one more time.');
      reviewList.style.justifyContent = 'center';
      reviewList.innerHTML = '<p class="reviews-not-found">Not found</p>';

  });

