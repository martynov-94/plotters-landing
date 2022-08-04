const getEl = selector => document.querySelector(selector);

const menuBtn = getEl(".menu-btn");
const menu = getEl(".main-menu");
const menuBtnIcon = getEl(".menu-btn");
const description = getEl(".description");
const descriptionBackdrop = getEl(".description__backdrop");
const moreBtn = document.querySelectorAll(".plotter-card__more-btn");


descriptionBackdrop.style.height = description.offsetHeight + "px";

menuBtn.onclick = () => {
  const classToAdd = "main-menu_open";

  menu.classList.toggle(classToAdd);
  menu.style.transform = `scaleY(${+menu.classList.contains(classToAdd)})`;
};

window.onresize = () => descriptionBackdrop.style.height = description.offsetHeight + "px";


const popupWindow = getEl(".popup-window");
const popupContent = getEl('.popup-window__content');
const popupCloseButton = getEl('.popup-window__close-btn');

moreBtn.forEach(btn => {
  btn.onclick = e => {
    const goodsToDisplay = goods.find(item => item.id === e.target.parentElement.dataset.id) || {};
    console.log(goodsToDisplay);  

    const popupTitle = getEl(".popup-window__goods-title");
    popupTitle.textContent = goodsToDisplay.name;

    popupWindow.classList.remove("visually-hidden");
  }
});

popupWindow.onclick = (e) => {
  if (!popupContent.contains(e.target) || e.target.tagName == "A") {
    popupWindow.classList.add("visually-hidden");
  }
};

popupCloseButton.onclick = () => {
  popupWindow.classList.add("visually-hidden");
};

document.onkeydown = (evt) => {
  if (evt.key == "Escape") popupWindow.classList.add("visually-hidden");
}

// console.log(goodsData)