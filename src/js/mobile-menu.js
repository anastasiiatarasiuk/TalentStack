const btnMenu = document.querySelector(".menu-btn");
const btnClose = document.querySelector(".btn-close");
const backdrob = document.querySelector(".mobile-container");
const menuLinks = document.querySelectorAll(".menu-item-nav");
const body = document.querySelector("body")

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



// switch

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
  }
  changeBackGround(checkbox.checked || checkboxMob.checked);
