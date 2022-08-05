const getEl = selector => document.querySelector(selector);

const menuBtn = getEl(".menu-btn");
const menu = getEl(".main-menu");
const menuBtnIcon = getEl(".menu-btn");
const orderBtn = getEl(".page-header__order-btn");
const description = getEl(".description");
const descriptionBackdrop = getEl(".description__backdrop");
const moreBtn = document.querySelectorAll(".plotter-card__more-btn");


// настройка высоты главной картинки
descriptionBackdrop.style.height = description.offsetHeight + "px";


// открытие меню
menuBtn.onclick = () => {
  const classToAdd = "main-menu_open";

  menu.classList.toggle(classToAdd);
  menu.style.transform = `scaleY(${+menu.classList.contains(classToAdd)})`;
};

window.onresize = () => descriptionBackdrop.style.height = description.offsetHeight + "px";


// всплывающее окно с характеристиками товара
const popupWindow = getEl(".popup-window");
const popupContent = getEl('.popup-window__content');
const popupCloseButton = getEl('.popup-window__close-btn');
const popupStubText = getEl('.popup-window__stub-text');

moreBtn.forEach(btn => {
  btn.onclick = e => {
    const goodsToDisplay = goods.find(item => item.id === e.target.parentElement.dataset.id) || {};

    const title = getEl(".popup-window__title");
    const specs = getEl(".popup-window__specs");

    specs.innerHTML = "";
    popupStubText.innerHTML = "";

    title.textContent = goodsToDisplay.name;

    if (goodsToDisplay.specs.length) {
      for (const spec of goodsToDisplay.specs) {
        const row = specs.insertRow();
        const cellSpecName = row.insertCell();
        const cellSpecValue = row.insertCell();
  
        cellSpecName.textContent = spec.name;
        cellSpecValue.textContent = spec.value;
      }
    } else {
      popupStubText.textContent = "Характеристики будут добавлены позже";
    }

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

// вызов телефона
function callNumber() {
  open("tel://+79622021066");
}