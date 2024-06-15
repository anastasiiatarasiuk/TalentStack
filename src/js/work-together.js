import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const sendForm = document.querySelector('.send-form');
const valueEmail = document.querySelector('.value-email');
const inputFormValue = document.querySelector('.input-form');
const checkMark = document.querySelector('.checkmark');
const messageField = document.querySelector('.message-form');

const validateEmail = () => {
  const email = sendForm.elements['email'].value.trim();
  const emailPattern = new RegExp(
    sendForm.elements['email'].getAttribute('pattern')
  );

  if (!emailPattern.test(email)) {
    checkMark.style.display = 'none';
    valueEmail.style.display = 'block';
    inputFormValue.style.color = '#e74a3b';
  } else {
    checkMark.style.display = 'block';
    valueEmail.style.display = 'none';
    inputFormValue.style.color = '#292929';
  }
};

sendForm.addEventListener('submit', async e => {
  e.preventDefault();

  const email = sendForm.elements['email'].value.trim();
  const message = sendForm.elements['message'].value.trim();
  const emailPattern = new RegExp(
    sendForm.elements['email'].getAttribute('pattern')
  );

  validateEmail();

  if (!emailPattern.test(email)) {
    iziToast.error({
      title: 'OOPS',
      message: 'Please enter a valid email address.',
      position: 'topCenter',
    });
    return;
  }

  if (message === '' || email === '') {
    iziToast.error({
      title: 'OOPS',
      message: 'Message field and email cannot be empty.',
      position: 'topCenter',
    });
    return;
  }

  try {
    const response = await axios.post(
      'https://portfolio-js.b.goit.study/api/requests',
      {
        email: email,
        comment: message,
      }
    );

    if (response.status === 201) {
      sendForm.reset();
      checkMark.style.display = 'none';

      iziToast.info({
        title: 'YES YES',
        message: 'Thank you for your interest in cooperation!',
        position: 'topCenter',
      });
    } else {
      throw new Error(response.data.message || 'Unknown error');
    }
  } catch (error) {
    iziToast.error({
      title: 'error',
      message:
        error.response?.data?.message || error.message || 'Unknown error',
      position: 'topCenter',
    });
  }
});

messageField.addEventListener('focus', validateEmail);
sendForm.elements['email'].addEventListener('blur', validateEmail);
