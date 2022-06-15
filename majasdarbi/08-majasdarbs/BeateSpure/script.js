function checkZIP() {
  // Pievinot vel 3 valsti
  const constraints = {
    lv: [
      "^(LV-)?\\d{4}$",
      "Latvijas ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007",
    ],
    lt: [
      "^(LT-)?\\d{5}$",
      "Lietuvas ZIPs jabut 5 simboliem un jasakas ar LT-: e.g. LT-91100 or 91100 ",
    ],
    ee: [
      "^(EE-)?\\d{5}$",
      "Igaunijas ZIPs jabut 5 simboliem un jasakas ar EE-: e.g. EE-10001 or 10001 ",
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "France ZIPs jaut 5 simboliem un jasakas ar F-: e.g. F-75012 or 75012",
    ],
  };

  let country = document.getElementById("Country").value;
  let ZIPField = document.getElementById("ZIP");
  let constraint = new RegExp(constraints[country][0], "");
  console.log(constraint);

  // Parbaude
  if (constraint.test(ZIPField.value)) {
    ZIPField.setCustomValidity("");
  } else {
    // Izvada kļudas paziņojumu
    ZIPField.setCustomValidity(constraints[country][1]);
  }
}

function printValues() {
  // izveidtot tukšu masivu kura saglabam vertibas
  var vertibas = [];
  // izmantojot getElementsByTagName('input') dabut visus ievadlaukus
  var inputs = document.getElementsByTagName("input");
  // ar for ciklu priekš katra no vertibam var key in inputs
  for (var key in inputs) {
    var value = inputs[key].value;
    matches.push(value);
  }
  // dabujam vertibas inputs[key].value
  // ja value eksiste
  // pievinojam vertibu masiva .push(value);
  // izvadam masivu vertibas uz ekrana alert();
  alert(vertibas);
}

window.onload = function () {
  document.getElementById("Country").onchange = checkZIP;
  document.getElementById("ZIP").oninput = checkZIP;

  // pievienot addEventListener priekš formas submit notikumam un izvadit funkciju printValues()
  document.getElementById("form").addEventListener("submit", printValues);
};
