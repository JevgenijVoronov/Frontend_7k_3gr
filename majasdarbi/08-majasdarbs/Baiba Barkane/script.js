function checkZIP() {
  const constraints = {
    lv: [
      "^(LV-)?\\d{4}$",
      "Latvijas ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007",
    ],

    lt: ["^(LT-)?\\d{5}$", "Lietuvas ZIPs jābut 5 simboliem un jāsākas ar LT-"],

    ee: [
      "^(EE-)?\\d{5}$",
      "Igaunijas ZIPs jābut 5 simboliem un jāsākas ar EE-",
    ],

    no: ["d{4}", "Norvēģijas ZIPs jābut 4 simboliem"],
  };

  let country = document.getElementById("Country").value;
  let ZIPField = document.getElementById("ZIP");

  let constraint = new RegExp(constraints[country][0], "");
  console.log(constraint);

  if (constraint.test(ZIPField.value)) {
    ZIPField.setCustomValidity("");
  } else {
    ZIPField.setCustomValidity(constraints[country][1]);
  }
}

function printValues() {
  let savedValues = [];
  let finalValues = [];

  savedValues.push(document.getElementById("text"));
  savedValues.push(document.getElementById("email"));
  savedValues.push(document.getElementById("text1"));
  savedValues.push(document.getElementById("pwd"));
  savedValues.push(document.getElementById("pwd2"));
  savedValues.push(document.getElementById("week"));
  savedValues.push(document.getElementById("time"));
  savedValues.push(document.getElementById("ZIP"));
  savedValues.push(document.getElementById("country"));

  for (let i = 0; i < savedValues.length; i++) {
    if (savedValues[i].value) {
      finalValues.push(savedValues[i].value);
    }
  }

  if (finalValues.length === savedValues.length) {
    alert(finalValues);
  } else {
    window.alert("Nepieciešams aizpildīt visus laukus");
  }
}

window.onload = function () {
  document.getElementById("Country").onchange = checkZIP;
  document.getElementById("ZIP").oninput = checkZIP;

  const submit = document.getElementById("form");
  submit.addEventListener("submit", printValues);
};
