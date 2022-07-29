const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".main-menu");
const menuBtnIcon = document.querySelector(".menu-btn");
const description = document.querySelector(".description");
const descriptionBackdrop = document.querySelector(".description__backdrop");

descriptionBackdrop.style.height = description.offsetHeight + "px";

menuBtn.onclick = () => {
  const classToAdd = "main-menu_open";
  menu.classList.toggle(classToAdd);
  menu.style.transform = `scaleY(${+menu.classList.contains(classToAdd)})`;
};

window.onresize = () => descriptionBackdrop.style.height = description.offsetHeight + "px";

console.log(window.innerWidth);