function checkZIP() {
    // Pievinot vel 3 valsti
    var constraints = {
      lv : [ '^(LV-)?\\d{4}$', "Latvias ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007" ],
      lt : [ '^(LT-)?\\d{5}$', "Lithuania ZIP must contain 5 symbols and start with LT-: e.g. LT-06120 or 06120" ],
      est : [ '^(EE-)?\\d{5}$', "Estonian ZIP must contain 5 symbols and start with EE-: e.g. EE-06120 or 06120" ],
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
    var matches = [];
    var inputs = document.getElementsByTagName('input');

    for(var key in inputs) {
        var value = inputs[key].value;
        matches.push(value);
    }

    alert(matches);
}

window.onload = function () {
    document.getElementById("Country").onchange = checkZIP;
    document.getElementById("ZIP").oninput = checkZIP;
    document.getElementById("form").addEventListener('submit', printValues);
}