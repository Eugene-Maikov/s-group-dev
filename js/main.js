// ---------------Menu burger---------------
(function () {
  const burger = document?.querySelector("[data-burger]");
  const menu = document?.querySelector("[data-menu]");
  const menuItems = document?.querySelectorAll("[data-menu-item]");
  const overlay = document?.querySelector("[data-menu-overlay]");
  const headerCenter = document?.querySelector(".header__center");
  const body = document.body;

  burger?.addEventListener("click", (e) => {
    burger?.classList.toggle("burger--active");
    menu?.classList.toggle("menu--active");
    body.classList.add("dis-scroll");
    headerCenter.style.position = "static";

    if (menu?.classList.contains("menu--active")) {
      burger?.setAttribute("aria-expanded", "true");
      burger?.setAttribute("aria-label", "Закрыть меню");
      body.classList.add("dis-scroll");
    } else {
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Открыть меню");
      body.classList.remove("dis-scroll");
      headerCenter.style.position = "relative";
    }
  });

  overlay?.addEventListener("click", () => {
    burger?.setAttribute("aria-expanded", "false");
    burger?.setAttribute("aria-label", "Открыть меню");
    burger.classList.remove("burger--active");
    menu.classList.remove("menu--active");
    body.classList.remove("dis-scroll");
    headerCenter.style.position = "relative";
  });

  menuItems?.forEach((el) => {
    el.addEventListener("click", () => {
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Открыть меню");
      burger.classList.remove("burger--active");
      menu.classList.remove("menu--active");
      body.classList.remove("dis-scroll");
      headerCenter.style.position = "relative";
    });
  });
})();

const submenuLinks = document.querySelectorAll(".nav__list > li");
const submenuLink = document.querySelector(".submenu-link");
const submenu = document.querySelector(".submenu");
console.log(submenuLinks);

// ---------------Menu mobile---------------
for (const item of submenuLinks) {
  item.children[0].addEventListener("click", () => {
    item.children[1].classList.toggle("submenu--active");
    item.children[0].classList.toggle("submenu-link--active");
    item.children[0].children[0].classList.toggle("arrow-nav--active");
  });
}

// ---------------Selecting contacts---------------
const contactItems = document.querySelectorAll(".contacts__item");
contactItems.forEach((item, i, a) => {
  item.addEventListener("click", () => {
    a.forEach((m) => m.classList.toggle("active", m === item));
  });
});

const contactList = document.querySelector(".contacts__list");
const contactMenu = document.querySelector(".contacts__menu ");
const btnContactTop = document.querySelectorAll(".contacts__top");
const contactListItem = document.querySelectorAll(".contacts__list-item");
let widthWind = document.querySelector("body").offsetWidth;
const body = document.body;

for (const item of btnContactTop) {
  item.addEventListener("click", () => {
    contactMenu.classList.add("contacts__menu-active");
    if (widthWind <= 768) {
      body.classList.add("no-scroll");
    }
  });
}
for (const item of contactListItem) {
  item.addEventListener("click", () => {
    if (item.classList.contains("contacts__list-item--active")) {
      item.classList.add("contacts__list-item--active");
    } else {
      item.classList.remove("contacts__list-item--active");
    }

    contactMenu.classList.remove("contacts__menu-active");
    if (widthWind <= 768) {
      body.classList.remove("no-scroll");
    }
  });
}

// ---------------Screen status---------------
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("touch");

  let menuArrows = document.querySelectorAll(".menu__arrow");
  if (menuArrows.length > 0) {
    for (let i = 0; i < menuArrows.length; i++) {
      const menuArrow = menuArrows[i];
      menuArrow.addEventListener("click", function (e) {
        menuArrow.parentElement.classList.toggle("_active");
      });
    }
  }
} else {
  document.body.classList.add("mouse");
}

// ---------------Address map---------------
ymaps.ready(function () {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [56.304903, 43.992027],
        zoom: 15,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="background: #fff; display: flex; justify-content: center; align-items: center; border-radius: 10px; box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1); width:133px; height: 30px; color: #262728; font-weight: 700; letter-spacing: 0.02em; line-height: 140%; font-size: 14px;">$[properties.iconContent]</div>'
    ),
    myPlacemarkWithContent = new ymaps.Placemark(
      [56.310483, 43.992027],
      {
        iconContent: "ул. Костина, 6к1",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#imageWithContent",
        // Своё изображение иконки метки.
        iconImageHref: "img/location.svg",
        // Размеры метки.
        iconImageSize: [56, 80],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [60, 10],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout,
      }
    );

  myMap.geoObjects.add(myPlacemarkWithContent);
});

ymaps.ready(function () {
  var myMap = new ymaps.Map(
      "map-tablet",
      {
        center: [56.310483, 43.992027],
        zoom: 15,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="background: #fff; display: flex; justify-content: center; align-items: center; border-radius: 3px; box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1); width:109px; height: 20px; color: #262728; font-weight: 700; letter-spacing: 0.02em; line-height: 140%; font-size: 11px;">$[properties.iconContent]</div>'
    ),
    myPlacemarkWithContent = new ymaps.Placemark(
      [56.310483, 43.992027],
      {
        iconContent: "ул. Костина, 6к1",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#imageWithContent",
        // Своё изображение иконки метки.
        iconImageHref: "img/location.svg",
        // Размеры метки.
        iconImageSize: [35, 50],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-24, -24],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [-40, -32],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout,
      }
    );

  myMap.geoObjects.add(myPlacemarkWithContent);
});

// ---------------Phone Input Mask---------------
let phoneInputs = document.querySelectorAll("input[data-tel-input]");

let getInputsNumbersValue = function (input) {
  return input.value.replace(/\D/g, "");
};

// Обработка ввода
let onPhoneInpute = function (e) {
  let input = e.target;
  let inputNumbersValue = getInputsNumbersValue(input);
  let formattedInputValue = "";
  let selectionStart = input.selectionStart;

  if (!inputNumbersValue) {
    return (input.value = "");
  }

  if (input.value.length != selectionStart) {
    if (e.data && /\D/g.test(e.data)) {
      input.value = inputNumbersValue;
    }
    return;
  }

  if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
    // Российский номер

    if (inputNumbersValue[0] == "9") {
      inputNumbersValue = "7" + inputNumbersValue;
    }
    let firstSymbols = inputNumbersValue[0] == "8" ? "8" : "+7";
    formattedInputValue = firstSymbols + " ";

    //Форматирование
    if (inputNumbersValue.length > 1) {
      formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
    }
    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
    }
    if (inputNumbersValue.length >= 8) {
      formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
    }
    if (inputNumbersValue.length >= 10) {
      formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
    }
  } else {
    // Не российский номер
    formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
  }

  input.value = formattedInputValue;
};

//  Удаление первой цифры
let onPhoneKeyDown = function (e) {
  let input = e.target;
  if (e.keyCode == 8 && getInputsNumbersValue(input).length == 1) {
    input.value = "";
  }
  if (e.keyCode == "-") {
    input.value = "";
  }
};

// Нельзя вставить букву из буфера обмена
let onPhonePaste = function (e) {
  let pasted = e.clipboardData || window.clipboardData;
  let input = e.target;
  let inputNumbersValue = getInputsNumbersValue(input);

  if (pasted) {
    let pastedText = pasted.getData("Text");

    if (/\D/g.test(pastedText)) {
      input.value = inputNumbersValue;
    }
  }
};

// Перебор полей с телефонами
for (i = 0; i < phoneInputs.length; i++) {
  let input = phoneInputs[i];
  input.addEventListener("input", onPhoneInpute);
  input.addEventListener("keydown", onPhoneKeyDown);
  input.addEventListener("paste", onPhonePaste);
}

let form = document.querySelector(".form");
let formInputs = document.querySelectorAll(".form__input");
let inputEmail = document.querySelector(".js-input-email");
let inputPhone = document.querySelector(".js-input-phone");
let inputCheckbox = document.querySelector(".js-input-checkbox");

// ---------------Валидация---------------
function validateEmail(email) {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateCountry(country) {
  let re = new RegExp(".co$");
  return re.test(String(country).toLowerCase());
}

// Валидация телефона (phoneinput.js).
// Проходит автоматически, тк маска не пропускает некорректные данные
function validatePhone(phone) {
  return test(String(phone));
}

// Условия отправки
form.onsubmit = function () {
  let emailVal = inputEmail.value;
  let phoneVal = inputPhone.value;
  let emptyInputs = Array.from(formInputs).filter(
    (input) => input.value === ""
  );

  formInputs.forEach(function (input) {
    if (input.value === "") {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });

  if (emptyInputs.length !== 0) {
    console.log("inputs not filled");
    return false;
  }

  if (!validateEmail(emailVal)) {
    inputEmail.classList.add("error");
    return false;
  } else {
    inputEmail.classList.remove("error");
  }

  if (validateCountry(emailVal)) {
    inputEmail.classList.add("error");
    return false;
  } else {
    inputEmail.classList.remove("error");
  }

  if (!validatePhone(phoneVal)) {
    inputPhone.classList.add("error");
    return false;
  } else {
    inputPhone.classList.remove("error");
  }
};




// ---------------Selection city---------------
const btnLocation = document.querySelector(".header__location-link");
const locationMask = document.querySelector(".nav-mask");
const locationMaskClose = document.querySelector(".nav-maskClose");
const btnLocationText = document.querySelector(".header__location-link > p");
const submenuLocation = document.querySelector(".submenu__location");
const locationCity = document.querySelectorAll('input[name="locationCity"]');

btnLocation.addEventListener("click", (e) => {
  submenuLocation.classList.toggle("submenu__location-active");
  submenuLocation.classList.contains("submenu__location-active");
  mask(1, "scaleY(1)");
  maskBtnClose(1, "scaleY(1)");
});
locationMask.addEventListener("click", (e) => {
  submenuLocation.classList.remove("submenu__location-active");
  mask(0, "scaleY(0)");
  maskBtnClose(0, "scaleY(0)");
});

for (const item of locationCity) {
  item.addEventListener("click", () => {
    if (item.checked) {
      btnLocationText.innerHTML = item.value;
      submenuLocation.classList.remove("submenu__location-active");
      mask(0, "scaleY(0)");
      maskBtnClose(0, "scaleY(0)");
    }
  });
}

function maskBtnClose(opacity, scaleY) {
  locationMaskClose.style.opacity = `${opacity}`;
  locationMaskClose.style.transform = `${scaleY}`;
}

function mask(opacity, scaleY) {
  locationMask.style.opacity = `${opacity}`;
  locationMask.style.transform = `${scaleY}`;
}

class GraphTabs {
  constructor(selector, options) {
    let defaultOptions = {
      isChanged: () => {},
    };
    this.options = Object.assign(defaultOptions, options);
    this.selector = selector;
    this.tabs = document.querySelector(`[data-tabs="${selector}"]`);
    if (this.tabs) {
      this.tabList = this.tabs.querySelector(".tabs__nav");
      this.tabsBtns = this.tabList.querySelectorAll(".tabs__nav-btn");
      this.tabsPanels = this.tabs.querySelectorAll(".tabs__panel");
    } else {
      console.error("Селектор data-tabs не существует!");
      return;
    }

    this.check();
    this.init();
    this.events();
  }

  check() {
    if (
      document.querySelectorAll(`[data-tabs="${this.selector}"]`).length > 1
    ) {
      console.error(
        "Количество элементов с одинаковым data-tabs больше одного!"
      );
      return;
    }

    if (this.tabsBtns.length !== this.tabsPanels.length) {
      console.error("Количество кнопок и элементов табов не совпадает!");
      return;
    }
  }

  init() {
    this.tabList.setAttribute("role", "tablist");

    this.tabsBtns.forEach((el, i) => {
      el.setAttribute("role", "tab");
      el.setAttribute("tabindex", "-1");
      el.setAttribute("id", `${this.selector}${i + 1}`);
      el.classList.remove("tabs__nav-btn--active");
    });

    this.tabsPanels.forEach((el, i) => {
      el.setAttribute("role", "tabpanel");
      el.setAttribute("tabindex", "-1");
      el.setAttribute("aria-labelledby", this.tabsBtns[i].id);
      el.classList.remove("tabs__panel--active");
    });

    this.tabsBtns[0].classList.add("tabs__nav-btn--active");
    this.tabsBtns[0].removeAttribute("tabindex");
    this.tabsBtns[0].setAttribute("aria-selected", "true");
    this.tabsPanels[0].classList.add("tabs__panel--active");
  }

  events() {
    this.tabsBtns.forEach((el, i) => {
      el.addEventListener("click", (e) => {
        let currentTab = this.tabList.querySelector("[aria-selected]");

        if (e.currentTarget !== currentTab) {
          this.switchTabs(e.currentTarget, currentTab);
        }
      });

      el.addEventListener("keydown", (e) => {
        let index = Array.prototype.indexOf.call(
          this.tabsBtns,
          e.currentTarget
        );

        let dir = null;

        if (e.which === 37) {
          dir = index - 1;
        } else if (e.which === 39) {
          dir = index + 1;
        } else if (e.which === 40) {
          dir = "down";
        } else {
          dir = null;
        }

        if (dir !== null) {
          if (dir === "down") {
            this.tabsPanels[i].focus();
          } else if (this.tabsBtns[dir]) {
            this.switchTabs(this.tabsBtns[dir], e.currentTarget);
          }
        }
      });
    });
  }

  switchTabs(newTab, oldTab = this.tabs.querySelector("[aria-selected]")) {
    newTab.focus();
    newTab.removeAttribute("tabindex");
    newTab.setAttribute("aria-selected", "true");

    oldTab.removeAttribute("aria-selected");
    oldTab.setAttribute("tabindex", "-1");

    let index = Array.prototype.indexOf.call(this.tabsBtns, newTab);
    let oldIndex = Array.prototype.indexOf.call(this.tabsBtns, oldTab);

    this.tabsPanels[oldIndex].classList.remove("tabs__panel--active");
    this.tabsPanels[index].classList.add("tabs__panel--active");

    this.tabsBtns[oldIndex].classList.remove("tabs__nav-btn--active");
    this.tabsBtns[index].classList.add("tabs__nav-btn--active");

    this.options.isChanged(this);
  }
}

const newsTabs = new GraphTabs("newsTabs");