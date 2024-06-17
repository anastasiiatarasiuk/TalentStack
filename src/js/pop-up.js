export { modal };

const modal = () => {
  const backdrop = document.querySelector('.modal');
  const modalCloseBtn = document.querySelector('.modal-close-btn');
  const modalOverlay = document.querySelector('.modal-overlay');
  backdrop.style.display = 'flex';
  modalOverlay.style.display = "block"
  const closeModal = () => {
    backdrop.style.display = 'none';
    modalOverlay.style.display = "none"
  };
  modalCloseBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', evt => {
    if (evt.target === backdrop) {
      closeModal();
    }
  });
  document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
      closeModal();
    }
  });
};
