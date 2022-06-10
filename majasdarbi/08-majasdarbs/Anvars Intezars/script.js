function checkZIP() {
    // Pievinot vel 3 valsti
    var constraints = {
      lv : [ '^(LV-)?\\d{4}$', "Latvian ZIPs should contain 4 symbols and should start with LV-: e.g. LV-3001 or 3007" ],
      lt : [ '^(LT-)?\\d{5}$', "Lithuanias ZIPs should contain 5 symbols and should start with LT-: e.g. LT-60344 or 00104" ],
      ee : [ '^(EE-)?\\d{5}$', "Estonians ZIPs should contain 5 symbols and should start with EE-: e.g. EE-13625 or 13623" ],
      pl : [ '^(PL-)?\\d{5}$', "Estonians ZIPs should contain 5 symbols and should start with PL-: e.g. PL-00-001 or 00-004" ]
    };
  
    var country = document.getElementById("Country").value;
    var ZIPField = document.getElementById("ZIP");
  
    var constraint = new RegExp(constraints[country][0], "");
      console.log(constraint);
  
    // Parbaude
    if (constraint.test(ZIPField.value)) {
      ZIPField.setCustomValidity("");
    }
    else {
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
}