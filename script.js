const getEl = selector => document.querySelector(selector);


// настройка высоты главной картинки
const descriptionBackdrop = getEl(".description__backdrop"),
      description = getEl(".description");

descriptionBackdrop.style.height = description.offsetHeight + "px";


// открытие меню
const menuBtn = getEl(".menu-btn"),
      menu = getEl(".main-menu");

menuBtn.onclick = () => {
  const classToAdd = "main-menu_open";

  menu.classList.toggle(classToAdd);
  menu.style.transform = `scaleY(${+menu.classList.contains(classToAdd)})`;
};

window.onresize = () => descriptionBackdrop.style.height = description.offsetHeight + "px";


// всплывающее окно с характеристиками товара
const specsPopupWindow = getEl(".specs-popup-window"),
      specsPopupContent = getEl('.specs-popup-window__content'),
      specsPopupCloseButton = getEl('.specs-popup-window__close-btn'),
      specsPopupStubText = getEl('.specs-popup-window__stub-text'),
      moreBtn = document.querySelectorAll(".plotter-card__more-btn");

moreBtn.forEach(btn => {
  btn.onclick = e => {
    const goodsToDisplay = goods.find(item => item.id === e.target.parentElement.dataset.id) || {};

    const title = getEl(".specs-popup-window__title");
    const specs = getEl(".specs-popup-window__specs");
    
    specs.innerHTML = "";
    specsPopupStubText.innerHTML = "";

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
      specsPopupStubText.textContent = "Характеристики будут добавлены позже";
    }

    specsPopupWindow.classList.remove("visually-hidden");
  }
});

specsPopupWindow.onclick = (e) => {
  if (!specsPopupContent.contains(e.target) || e.target.tagName == "A") {
    specsPopupWindow.classList.add("visually-hidden");
  }
};

specsPopupCloseButton.onclick = () => {
  specsPopupWindow.classList.add("visually-hidden");
};




// поведение при нажатии на кнопку "заказать" в главном меню
const orderBtn = getEl(".page-header__order-btn"),
      orderPopupWindow = getEl(".order-popup-window"),
      orderPopupContent = getEl('.order-popup-window__content'),
      orderPopupCloseButton = getEl('.order-popup-window__close-btn'),
      orderPopupSelectField = getEl('.order-popup-window__select'),
      orderPopupSubmitButton = getEl('.order-popup-window__submit-btn'),
      orderPopupSenderName = getEl('#order-popup-window__input-name'),
      orderPopupSenderPhone = getEl('#order-popup-window__input-phone'),
      orderPopupMailBody = getEl('#order-popup-window__message-area');

orderBtn.onclick = () => {
  orderPopupWindow.classList.remove("visually-hidden");
}

orderPopupCloseButton.onclick = () => {
  orderPopupWindow.classList.add("visually-hidden");
};

orderPopupWindow.onclick = (e) => {
  if (!orderPopupContent.contains(e.target) || e.target.tagName == "A") {
    orderPopupWindow.classList.add("visually-hidden");
  }
};

orderPopupSelectValues = {
  "jinka-pe": "Купить Jinka PE",
  "rabbit-n": "Купить Rabbit N",
  "rabbit-k": "Купить Rabbit K",
  "jinka-xl": "Купить Jinka XL",
  "heat-press": "Купить Термопресс",
  "consult": "Получить консультацию"
}

// отправка сообщения при нажатии кнопки "Заказать"
const orderPopupForm = getEl(".order-popup-window__form");

orderPopupForm.addEventListener("submit", e => {
  e.preventDefault();

  const mailSubject = orderPopupSelectValues[orderPopupSelectField.value];
  const senderName = orderPopupSenderName.value;
  const senderPhone = orderPopupSenderPhone.value;
  const mailBody = orderPopupMailBody.value;

  const message = `
Отправитель: ${senderName}
Телефон: ${senderPhone}

${mailBody}
`;

  window.open(`mailto:vitalj.vg@yandex.ru?subject=${mailSubject}&body=${message}`);

  orderPopupSelectField.value = "jinka-pe";
  orderPopupSenderName.value = "";
  orderPopupSenderPhone.value = "";
  orderPopupMailBody.value = "";

  orderPopupWindow.classList.add("visually-hidden");
});


document.onkeydown = (evt) => {
  if (evt.key == "Escape") {
    specsPopupWindow.classList.add("visually-hidden");
    orderPopupWindow.classList.add("visually-hidden");
  }
}


// вызов телефона
function callNumber() {
  open("tel://+79622021066");
}


// отправка сообщения в футере
const footerForm = getEl(".page-footer__form"),
      footerFormName = getEl("#page-footer__input-name"),
      footerFormPhone = getEl("#page-footer__input-phone"),
      footerFormMessage = getEl("#page-footer__message-area");

footerForm.addEventListener("submit", e => {
  e.preventDefault();

  const mailSubject = "Сообщение с сайта CPU-Plotters";

  const name = footerFormName.value;
  const phone = footerFormPhone.value;
  const messageBody = footerFormMessage.value;

  const message = `
Отправитель: ${name}
Телефон: ${phone}

${messageBody}
`;

  window.open(`mailto:vitalj.vg@yandex.ru?subject=${mailSubject}&body=${message}`);

  footerFormName.value = "";
  footerFormPhone.value = "";
  footerFormMessage.value = "";
});