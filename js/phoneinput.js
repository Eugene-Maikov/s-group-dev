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
