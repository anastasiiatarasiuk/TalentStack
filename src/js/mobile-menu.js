const btnMenu = document.querySelector(".menu-btn");
const btnClose = document.querySelector(".btn-close");
const menu = document.querySelector(".mobile-container");
const menuLinks = document.querySelectorAll(".menu-item-nav");
const body = document.querySelector("body")

const toggleMenu = () => {
    menu.classList.toggle("show");
btnMenu.classList.toggle("disabled");
btnClose.classList.toggle("show");
body.classList.toggle("no-skroll")
};

btnMenu.addEventListener("click", toggleMenu);
btnClose.addEventListener("click", toggleMenu);


menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("show");
        btnClose.classList.remove("show");
        btnMenu.classList.remove("disabled");
        body.classList.remove("no-skroll");
    });
});



// switch

const checkbox = document.querySelector(".switch-checkbox");
const checkboxMob = document.querySelector(".switch-checkbox-mob");
const svgMenu = document.querySelector(".icon-menu");
const svgClose = document.querySelector(".icon-menu-close");


// const changeBackGround = () => {
//     if (checkbox.checked || checkboxMob.checked) {
//         document.body.style.backgroundColor = "#292929";
//         document.body.style.color = "#f0f0f0";
//         svgMenu.style.fill = "#f0f0f0";
//         svgClose.style.stroke = "#f0f0f0";
//     } else {
//         document.body.style.backgroundColor = "#f0f0f0";
//         document.body.style.color = "#292929";
//         svgMenu.style.fill = "#292929";
//         svgClose.style.stroke = "#292929";
//     }
// };

// checkbox.addEventListener("change", changeBackGround);


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
  }
  changeBackGround(checkbox.checked || checkboxMob.checked);
