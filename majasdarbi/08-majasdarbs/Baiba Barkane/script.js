function checkZIP() {
  const constraints = {
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

  let country = document.getElementById("Country").value;
  let ZIPField = document.getElementById("ZIP");

  let constraint = new RegExp(constraints[country][0], "");
  console.log(constraint);

  // Pārbaude
  if (constraint.test(ZIPField.value)) {
    ZIPField.setCustomValidity("");
  } else {
    // Izvada kļudas paziņojumu
    ZIPField.setCustomValidity(constraints[country][1]);
  }
}

function printValues() {
  // masivs kura saglabā vērtibas
  let savedValues = [];
  let finalValues = [];

  // izmantojot getElementsByTagName('input') dabut visus ievadlaukus
  savedValues.push(document.getElementById("text"));
  savedValues.push(document.getElementById("email"));
  savedValues.push(document.getElementById("limitedText"));
  savedValues.push(document.getElementById("password"));
  savedValues.push(document.getElementById("password8symbols"));
  savedValues.push(document.getElementById("week"));
  savedValues.push(document.getElementById("time"));
  savedValues.push(document.getElementById("ZIP"));
  savedValues.push(document.getElementById("Country"));

  for (let i = 0; i < savedValues.length; i++) {
    if (savedValues[i].value) {
      finalValues.push(savedValues[i].value);
    }
  }

  if (finalValues.length === savedValues.length) {
    alert(finalValues);
  } else {
    window.alert("Aizpildi visus laukus");
  }
}

window.onload = function () {
  document.getElementById("Country").onchange = checkZIP;
  document.getElementById("ZIP").oninput = checkZIP;

  const submit = document.getElementById("submit");
  submit.addEventListener("click", printValues);
  // pievienot addEventListener priekš formas submit notikumam un izvadit funkciju printValues()
};
