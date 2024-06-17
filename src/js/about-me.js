import aboutMeMobile1x from '../img/about-me-img/about-me-mobile.png';
import aboutMeMobile2x from '../img/about-me-img/about-me-mobile@2x.png';
import aboutMeTablet1x from '../img/about-me-img/about-me-tablet.png';
import aboutMeTablet2x from '../img/about-me-img/about-me-tablet@2x.png';
import aboutMeDesktop1x from '../img/about-me-img/about-me-desktop.png';
import aboutMeDesktop2x from '../img/about-me-img/about-me-desktop@2x.png';

const imgContainer = document.querySelector('.image-container');

const sources = [
  {
    media: '(min-width: 1280px)',
    srcset: `${aboutMeDesktop1x} 1x, ${aboutMeDesktop2x} 2x`,
  },
  {
    media: '(min-width: 768px) and (max-width: 1279px)',
    srcset: `${aboutMeTablet1x} 1x, ${aboutMeTablet2x} 2x`,
  },
];

const sourceMarkup = sources
  .map(
    source => `
  <source
    media="${source.media}"
    srcset="${source.srcset}"
  />
`
  )
  .join('');

const markup = `
  <picture>
    ${sourceMarkup}
    <img
      src="${aboutMeMobile1x}"
      srcset="${aboutMeMobile1x} 1x, ${aboutMeMobile2x} 2x"
      alt="developer with laptop"
      class="about-img"
    />
  </picture>
`;

imgContainer.insertAdjacentHTML('beforeend', markup);
