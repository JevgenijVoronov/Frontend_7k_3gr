function checkZIP() {
    // Pievinot vel 3 valsti
    var constraints = {
      lv : [ '^(LV-)?\\d{4}$', "Latvias ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007" ],
      lt : [ '^(LT-)?\\d{5}$', "Lietuvas ZIPs jabut 5 simboliem un jasakas ar LT-: e.g. LT-30001 or 30007" ],
      est : [ '^(EE-)?\\d{5}$', "Igaunijas ZIPs jabut 5 simboliem un jasakas ar EST-: e.g. EST-30001 or 30007" ],
      no : [ '^(NO-)?\\d{4}$', "Norvegijas ZIPs jabut 4 simboliem un jasakas ar NO-: e.g. NO-3001 or 3007" ],
    };
  
    let country = document.getElementById("country").value;
    let ZIPField = document.getElementById("zip");
  
    let constraint = new RegExp(constraints[country][0], "");
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
    var matches = [];

    // izmantojot getElementsByTagName('input') dabut visus ievadlaukus
    var inputs = document.getElementsByTagName('input');
   
    // ar for ciklu priekš katra no vertibam var key in inputs
    for(var key in inputs){
    // dabujam vertibas inputs[key].value
    var value = inputs[key].value;
  
    // ja value eksiste 
    // pievinojam vertibu masiva .push(value);
    matches.push(value);
  }

    // izvadam masivu vertibas uz ekrana alert();
    alert(matches);
}

window.onload = function () {
    document.getElementById("country").onchange = checkZIP;
    document.getElementById("zip").oninput = checkZIP;

    // pievienot addEventListener priekš formas submit notikumam un izvadit funkciju printValues()
}