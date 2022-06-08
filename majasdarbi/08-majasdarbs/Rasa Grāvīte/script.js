function checkZIP() {
    // Pievinot vel 3 valsti
    var constraints = {
      lv : [ '^(LV-)?\\d{4}$', "Latvijas ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007" ],
      est : [ '^[0-9]{5}$', "Igaunijas ZIPs jabut 5 simboliem: e.g. 06120" ],
      lt : [ '^(LT-)?\\d{5}$', "Lietuvas ZIPs jabut 5 simboliem un jasakas ar LT-: e.g. LT-06120 or 06120" ],
      se : [ '^[0-9]{5}$', "Zviedrijas ZIPs jabut 5 simboliem 11115 – 98499 e.g. 11115" ],
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
     let savedValues = []

    // izmantojot getElementsByTagName('input') dabut visus ievadlaukus
    savedValues.push(document.getElementById("text"))
    savedValues.push(document.getElementById("email"))
    savedValues.push(document.getElementById("limitedText"))
    savedValues.push(document.getElementById("password1"))
    savedValues.push(document.getElementById("passwor2"))
    savedValues.push(document.getElementById("week"))
    savedValues.push(document.getElementById("time"))
    savedValues.push(document.getElementById("ZIP"))
    savedValues.push(document.getElementById("Country"))
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