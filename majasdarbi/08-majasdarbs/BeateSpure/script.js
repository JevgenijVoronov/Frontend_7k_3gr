function checkZIP() {
  // Pievinot vel 3 valsti
  var constraints = {
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

function printValues() {
  // izveidtot tukšu masivu kura saglabam vertibas
  // izmantojot getElementsByTagName('input') dabut visus ievadlaukus
  // ar for ciklu priekš katra no vertibam var key in inputs
  // dabujam vertibas inputs[key].value
  // ja value eksiste
  // pievinojam vertibu masiva .push(value);
  // izvadam masivu vertibas uz ekrana alert();
}

window.onload = function () {
  document.getElementById("Country").onchange = checkZIP;
  document.getElementById("ZIP").oninput = checkZIP;

  // pievienot addEventListener priekš formas submit notikumam un izvadit funkciju printValues()
};
