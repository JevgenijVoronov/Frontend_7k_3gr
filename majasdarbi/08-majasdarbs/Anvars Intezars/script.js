function checkZIP() {
    var constraints = {
      lv : [ '^(LV-)?\\d{4}$', "Latvian ZIPs should contain 4 symbols and should start with LV-: e.g. LV-3001 or 3007" ],
      lt : [ '^(LT-)?\\d{5}$', "Lithuanias ZIPs should contain 5 symbols and should start with LT-: e.g. LT-60344 or 00104" ],
      ee : [ '^(EE-)?\\d{5}$', "Estonians ZIPs should contain 5 symbols and should start with EE-: e.g. EE-13625 or 13623" ],
      pl : [ '^(PL-)?\\d{5}$', "Polands ZIPs should contain 5 symbols and should start with PL-: e.g. PL-00-001 or 00-004" ]
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
    var allReceivedInformationFromValidationForm = [];
    var allFilledInputFields = document.getElementsByTagName('input');

    for (var key in allFilledInputFields) {
      var value = allFilledInputFields[key].value;
      allReceivedInformationFromValidationForm.push(value);
    }
    alert(allReceivedInformationFromValidationForm);
}

window.onload = function () {
    document.getElementById("Country").onchange = checkZIP;
    document.getElementById("ZIP").oninput = checkZIP;
    document.getElementById("form").addEventListener('submit', printValues);
    

}