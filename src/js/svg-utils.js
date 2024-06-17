import spriteUrl from '/img/icons.svg';

function renderSvgIcon(iconId, svgClass, svgWidth, svgHeight) {
  return ` <svg class="${svgClass}" width="${svgWidth}" height="${svgHeight}">
          <use href="${spriteUrl}#${iconId}">
          </use>
        </svg>`;
}

function addSvgIcon(container, iconId, svgClass, svgWidth, svgHeight) {
  if(typeof container === "string") {
    container =document.querySelector(container);
  }
  const markup = renderSvgIcon(iconId, svgClass, svgWidth, svgHeight);
  container.insertAdjacentHTML('beforeend', markup);
}

export {addSvgIcon};