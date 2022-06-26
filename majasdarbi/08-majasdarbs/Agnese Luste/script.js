function checkZIP() {
  var constraints = {
    lv : [ '^(LV-)?\\d{4}$', "Latvian ZIP must contain 4 symbols and start with LV-: e.g. LV-3001 or 3007" ],
    lt : [ '^(LT-)?\\d{5}$', "Lithuania ZIP must contain 5 symbols and start with LT-: e.g. LT-06120 or 06120" ],
    est : [ '^(EE-)?\\d{5}$', "Estonian ZIP must contain 5 symbols and start with EE-: e.g. EE-06120 or 06120" ],
    de : [ '^(DE-)?\\d{5}$', "Germany's ZIP must contain 5 symbols 01067 – 98499 e.g. 97909" ],
  };

  var country = document.getElementById("Country").value;
  var ZIPField = document.getElementById("ZIP");

  var constraint = new RegExp(constraints[country][0], "");
    console.log(constraint);


  if (constraint.test(ZIPField.value)) {
    ZIPField.setCustomValidity("");
  }
  else {
    ZIPField.setCustomValidity(constraints[country][1]);
  }
}

function printValues() {
  let  savedValues = []
  let finalValues = []

  savedValues.push(document.getElementById("text"))
  savedValues.push(document.getElementById("email"))
  savedValues.push(document.getElementById("limitedText"))
  savedValues.push(document.getElementById("password"))
  savedValues.push(document.getElementById("password8symbols"))
  savedValues.push(document.getElementById("week"))
  savedValues.push(document.getElementById("time"))
  savedValues.push(document.getElementById("ZIP"))
  savedValues.push(document.getElementById("Country"))

  for (let i = 0; i < savedValues.length; i++) {
      if (savedValues[i].value) {
        finalValues.push(savedValues[i].value)
      }
  }

  if(finalValues.length === savedValues.length) {
    alert(finalValues);
  } else {
    window.alert("Fill all fields!")
  }
}

window.onload = function () {
  document.getElementById("Country").onchange = checkZIP;
  document.getElementById("ZIP").oninput = checkZIP;

  const submit = document.getElementById("submit");
  submit.addEventListener("click", printValues);
}
