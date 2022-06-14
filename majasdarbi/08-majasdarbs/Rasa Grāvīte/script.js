function checkZIP() {
    // Pievinot vel 3 valsti
    var constraints = {
      lv : [ '^(LV-)?\\d{4}$', "Latvijas ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007" ],
      est : [ '^(EE-)\\d{5}$', "Igaunijas ZIPs jabut 5 simboliem: e.g. 06120" ],
      lt : [ '^(LT-)?\\d{5}$', "Lietuvas ZIPs jabut 5 simboliem un jasakas ar LT-: e.g. LT-06120 or 06120" ],
      se : [ '^(SE-)\\d{5}$', "Zviedrijas ZIPs jabut 5 simboliem 11115 – 98499 e.g. 11115" ],
    };
  
    let country = document.getElementById("Country").value;
    let ZIPField = document.getElementById("ZIP");
  
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
     var savedValues = [];
     var inputs = document.getElementsByTagName('input')

     for(var key in inputs) {
       var value = inputs[key].value;
       savedValues.push(value);
     }
alert(savedValues);
    }
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
    document.getElementById("form").addEventListener('submit', printValues);

    // pievienot addEventListener priekš formas submit notikumam un izvadit funkciju printValues()
}