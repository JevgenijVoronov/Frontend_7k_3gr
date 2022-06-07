function checkZIP() {
  var constraints = {
    lv: [
      "^(LV-)?\\d{4}$",
      "Latvijas ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007",
    ],

    lt: ["^(LT-)?\\d{5}$", "Lietuvas ZIPs jabut 5 simboliem un jasakas ar LT-"],

    ee: [
      "^(EE-)?\\d{5}$",
      "Igaunijas ZIPs jabut 5 simboliem un jasakas ar EE-",
    ],

    no: ["d{4}", "Norvēģijas ZIPs jabut 4 simboliem"],
  };

  var country = document.getElementById("Country").value;
  var ZIPField = document.getElementById("ZIP");

  var constraint = new RegExp(constraints[country][0], "");
  console.log(constraint);

  // Parbaude
  if (constraint.test(ZIPField.value)) {
    ZIPField.setCustomValidity("");
  } else {
    // Izvada kļudas paziņojumu
    ZIPField.setCustomValidity(constraints[country][1]);
  }
}

function validationRules() {
  text: (value) => {
    let isValid = Boolean(value);
    return isValid;
  };

  email: (value) => {
    let regEx = /.+@gmail.com/;
    let isValid = regEx.test(value);
    return isValid;
  };

  text1: (value) => {
    let regEx = /(^\d{5,10}$)/;
    let isValid = regEx.test(value);
    return isValid;
  };

  pwd1: (value) => {
    let regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
    let isValid = regEx.test(value);
    return isValid;
  };

  pwd2: (value) => {
    let regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.{8,})/;
    let isValid = regEx.test(value);
    return isValid;
  };

  time: (value) => {
    let regEx = /(^((0?9|1[0-6]):[0-6][0-9]|18:00)$)/;
    let isValid = regEx.test(value);
    return isValid;
  };
}

function isValid(inputField) {
  return validationRules[inputField.name](inputField.value);
}

function handleValidity(inputField, errorMsg) {
  if (isValid(inputField)) {
    setFieldValid(inputField);
  } else {
    setFieldInvalid(inputField, errorMsg);
  }
}

function printValues(event) {
  let formInputs = Array.form(userForm.elements);
  const input = document.getElementsByTagName("input");

  event.preventDefault();
  let keyValuePairs = [];

  formInputs.forEach((inputField) => {
    if (inputField.tagName !== "BUTTON") {
      let valuePairString = `${inputField.name}: ${inputField.value}`;
      keyValuePairs.push(valuePairString);
    }
  });
  alert(keyValuePairs.join("; "));
}

window.onload = function () {
  document.getElementById("Country").onchange = checkZIP;
  document.getElementById("ZIP").oninput = checkZIP;

  formInputs.forEach((inputField) => {
    if (inputField.tagName !== "BUTTON" && inputField.tagName !== "SELECT") {
      inputField.addEventListener("input", resetErrorState);
      inputField.addEventListener("blur", validateField);
    } else if (inputField.tagName === "SELECT") {
      inputField.addEventListener("change", handlePoValidity);
    }
  });
  userForm.addEventListener("submit", printvalues);
};
