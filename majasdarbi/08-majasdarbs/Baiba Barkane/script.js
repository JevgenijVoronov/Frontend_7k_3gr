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
  var matches = [];
  var inputs = document.getElementsByTagName("input");

  for (var key in inputs) {
    var value = inputs[key].value;
    matches.push(value);
  }

  alert(matches);
}

window.onload = function () {
  document.getElementById("Country").onchange = checkZIP;
  document.getElementById("ZIP").oninput = checkZIP;
  document.getElementById("form").addEventListener("submit", printValues);
};
