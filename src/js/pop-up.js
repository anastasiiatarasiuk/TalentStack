//версія марини
// const backdrop = document.querySelector('.backdrop');
// const modalCloseBtn = document.querySelector('.modal-close-btn');

// backdrop.style.display = 'flex';
// const closeModal = () => {
//   backdrop.style.display = 'none';
// };
// modalCloseBtn.addEventListener('click', closeModal);
// backdrop.addEventListener('click', evt => {
//   if (evt.target === backdrop) {
//     closeModal();
//   }
// });
// document.addEventListener('keydown', evt => {
//   if (evt.key === 'Escape') {
//     closeModal();
//   }
// });

//2 версія
export { modal };

const modal = () => {
  const backdrop = document.querySelector('.backdrop');
  const modalCloseBtn = document.querySelector('.modal-close-btn');

  backdrop.style.display = 'flex';
  const closeModal = () => {
    backdrop.style.display = 'none';
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
