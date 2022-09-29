let form = document.querySelector(".form");
let formInputs = document.querySelectorAll(".form__input");
let inputEmail = document.querySelector(".js-input-email");
let inputPhone = document.querySelector(".js-input-phone");
let inputCheckbox = document.querySelector(".js-input-checkbox");

// Валидация
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
