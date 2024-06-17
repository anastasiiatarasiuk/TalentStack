import spriteSvg from '/img/icons.svg';

function insertSVGIcon(containerClass, iconName) {
  const containers = document.querySelectorAll(`.${containerClass}`);
  containers.forEach(container => {
    container.innerHTML = `
      <svg class="benefits-svg-icon" width="24" height="24">
        <use href="${spriteSvg}#${iconName}"></use>
      </svg>
    `;
  });
}

insertSVGIcon('icon-user-container', 'icon-user');
insertSVGIcon('icon-message-container', 'icon-message');
insertSVGIcon('icon-brush-container', 'icon-brush');
insertSVGIcon('icon-hourglass-container', 'icon-hourglass');
