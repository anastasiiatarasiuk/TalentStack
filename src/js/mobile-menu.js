const btnMenu = document.querySelector(".menu-btn");
const btnClose = document.querySelector(".btn-close");
const backdrob = document.querySelector(".mobile-container");
const menuLinks = document.querySelectorAll(".menu-item-nav");
const body = document.querySelector("body");
const socialBoxHero = document.querySelector('.social-list-box');
const greenBoxHero = document.querySelector('.green-box');


const toggleMenu = () => {
  backdrob.classList.toggle("show");
btnMenu.classList.toggle("disabled");
btnClose.classList.toggle("show");
body.classList.toggle("no-scroll")
};

btnMenu.addEventListener("click", toggleMenu);
btnClose.addEventListener("click", toggleMenu);


menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      backdrob.classList.remove("show");
        btnClose.classList.remove("show");
        btnMenu.classList.remove("disabled");
        body.classList.remove("no-scroll");
    });
});




const checkbox = document.querySelector(".switch-checkbox");
const checkboxMob = document.querySelector(".switch-checkbox-mob");
const svgMenu = document.querySelector(".icon-menu");
const svgClose = document.querySelector(".icon-menu-close");


checkboxMob.addEventListener("change", function() {
    changeBackGround(checkboxMob.checked)
    checkbox.checked = checkboxMob.checked;
  });



checkbox.addEventListener("change", function() {
    changeBackGround(checkbox.checked )
    checkboxMob.checked = checkbox.checked;
  });

 export function changeBackGround (isChecked) {
    document.body.style.backgroundColor = isChecked ? "#292929": "#f0f0f0";
    document.body.style.color = isChecked ? "#f0f0f0": "#292929";
    svgMenu.style.fill = isChecked ? "#f0f0f0": "#292929";
    svgClose.style.stroke = isChecked ?" #f0f0f0": "#292929";
    backdrob.style.backgroundColor = isChecked ? "#292929": "#f0f0f0";
    greenBoxHero.style.backgroundColor = isChecked ? '#204136' : '#BCDFD1';
    socialBoxHero.style.backgroundColor = isChecked ? '#2a2d32' : '#E4E5E6';


  }
  changeBackGround(checkbox.checked || checkboxMob.checked);

 
  

  import backgroundImageTop from '../img/header/Group68-1x.png';
  import backgroundImageBottom from '../img/header/Group64-1x.png';

const backgroundElement = document.querySelector('.background');
backgroundElement.style.setProperty('--background-image', `url(${backgroundImageTop})`);


const backgroundElementBottom = document.querySelector('.background');
backgroundElementBottom.style.setProperty('--background-image-bottom', `url(${backgroundImageBottom})`);