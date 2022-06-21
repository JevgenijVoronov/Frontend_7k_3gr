function checkZIP() {
    // Pievinot vel 3 valsti
    const constraints = {
      lv : [ '^LV[-]([0-9]){4}', "Latvias ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007" ],
      lt : [ '^LT[-]([0-9]){5}', "Lietuvai ZIPs jabut 5 simboliem un jasakas ar LT-: e.g. LV-3001 or 3007" ],
      ee : [ '^EE[-]([0-9]){5}', "Igaunijai ZIPs jabut 5 simboliem un jasakas ar EE-: e.g. LV-3001 or 3007" ],
    };
  
    let country = document.getElementById("country").value;
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

  let match = [];
  let inputs = getElementByTagName('input')

  for (let key in inputs){
    let value = inputs[key].value;
    match.push(value);

  }
  alert(match);
}


    // izveidtot tukšu masivu kura saglabam vertibas

    // izmantojot getElementsByTagName('input') dabut visus ievadlaukus
   
    // ar for ciklu priekš katra no vertibam var key in inputs
    
    // dabujam vertibas inputs[key].value
    
    // ja value eksiste 
    
    // pievinojam vertibu masiva .push(value);

    // izvadam masivu vertibas uz ekrana alert();

window.onload = function () {
    document.getElementById("Country").onchange = checkZIP;
    document.getElementById("ZIP").oninput = checkZIP;
    document.getElementById("form").addEventListener('submit', printValues);
}  

    // pievienot addEventListener priekš formas submit notikumam un izvadit funkciju printValues()