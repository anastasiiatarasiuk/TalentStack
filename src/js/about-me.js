const devImages = {
  mobile: {
    '1x': '../img/about-me-img/about-me-mobile.png',
    '2x': '../img/about-me-img/about-me-mobile@2x.png',
  },
  tablet: {
    '1x': '../img/about-me-img/about-me-tablet.png',
    '2x': '../img/about-me-img/about-me-tablet@2x.png',
  },
  desktop: {
    '1x': '../img/about-me-img/about-me-desktop.png',
    '2x': '../img/about-me-img/about-me-desktop@2x.png',
  },
};

const imgContainer = document.querySelector('.image-container');

const markup = `
  <picture>
    <source
      media="(min-width: 1280px)"
      srcset="${devImages.desktop['1x']} 1x, ${devImages.desktop['2x']} 2x"
    />
    <source
      media="(min-width: 768px) and (max-width: 1279px)"
      srcset="${devImages.tablet['1x']} 1x, ${devImages.tablet['2x']} 2x"
    />
    <img
      src="${devImages.mobile['1x']}"
      srcset="${devImages.mobile['2x']}"
      alt="developer with laptop"
      class="about-img"
    />
  </picture>
`;

imgContainer.insertAdjacentHTML('beforeend', markup);
