





function printValues() {
    // izveidtot tukšu masivu kura saglabam vertibas
    let data = [];
    // izmantojot getElementsByTagName('input') dabut visus ievadlaukus
    let ieejas = document.getElementsByTagName('input');
    // ar for ciklu priekš katra no vertibam var key in inputs
    // dabujam vertibas inputs[key].value
    // ja value eksiste 
    // pievinojam vertibu masiva .push(value);
    // izvadam masivu vertibas uz ekrana alert();
    for (let i = 0; i < ieejas.length; i++) {
        console.log(ieejas[i].value)
        if( Boolean(ieejas[i].value)===true ){
          console.log("der")
          data.push(ieejas[i].value);
        }
        else{
          console.log("neder")
        }
      }
    let pazinojums = JSON.stringify(data);
    alert(pazinojums)
}

function text_check(text){
  if( Boolean(text)===true ){
    return true
  }
  else{
    return false
  }
}

function mail_check(pasts){
  const rule = /^[\w-\.]+@gmail.com$/;
  return Boolean(pasts.match(rule));
}

function text_check2(text){
  if( (String(text).length > 5) & (String(text).length < 10) ){
    return true
  }
  else{
    return false
  }
}


function pswd_check(ieeja){
  const rule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
  return Boolean(ieeja.match(rule));
}


function pswd_check2(ieeja){
  const rule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;
  if(Boolean(ieeja.match(rule)) & (String(ieeja).length > 8)){
    return true
  }
  else{
    return false
  }
}

function week_check(text){
  if( (Number(text) > 18) & (Number(text) < 26) ){
    return true
  }
  else{
    return false
  }
}


function time_check(text){
  let hoursAndMinutes = text.split(":");
  //console.log(hoursAndMinutes[0], Number(hoursAndMinutes[0]))
  if( (Number(hoursAndMinutes[0]) >= 9) & (Number(hoursAndMinutes[0]) <= 18) ){
    return true
  }
  else{
    return false
  }
}



function check_data() {
  let ieejas = document.getElementsByTagName('input');
  for (let i = 0; i < ieejas.length; i++) {
      console.log(ieejas[i].id)
      
      // parbaudam vai ir ieeja
      if( Boolean(ieejas[i].value)===true ){
        console.log("der");
      }

     // parbaudam sakuma tekstu
      if(String(ieejas[i].id)==="text"){
        pnt = document.getElementById(String(ieejas[i].id)).parentElement       
        let children = pnt.childNodes;
        if(text_check(String(ieejas[i].value)) === true){
          console.log("Teksta tests iziets : ", ieejas[i].value);
          children[1].innerHTML = "<h style='color:green'>Text is Ok!</h>";
        }  
        else{
          console.log("Teksta tests NAV iziets : ", ieejas[i].value);
          // tasam pazinojumu
          children[1].innerHTML = "<h style='color:red'>Text is not correct! Something must be writen!</h>";
        }        
      }

      // parbaudam epastu
      if(String(ieejas[i].id)==="epasts"){
        pnt = document.getElementById(String(ieejas[i].id)).parentElement       
        let children = pnt.childNodes;
        if(mail_check(String(ieejas[i].value)) === true){
          console.log("Email test iziets : ", ieejas[i].value);
          children[1].innerHTML = "<h style='color:green'>Email is correct!</h>";
        }  
        else{
          console.log("Email test NAV iziets : ", ieejas[i].value);
          // tasam pazinojumu
          children[1].innerHTML = "<h style='color:red'>Email is not correct!</h>";
        }        
      }

      // parbaudam text2
      if(String(ieejas[i].id)==="text2"){
        pnt = document.getElementById(String(ieejas[i].id)).parentElement       
        let children = pnt.childNodes;
        if(text_check2(String(ieejas[i].value)) === true){
          console.log("Text2 test iziets : ", ieejas[i].value);
          children[1].innerHTML = "<h style='color:green'>Text is correct!</h>";
        }  
        else{
          console.log("Text2 test NAV iziets : ", ieejas[i].value);
          // tasam pazinojumu
          children[1].innerHTML = "<h style='color:red'>Text is not correct!</h>";
        }        
      }

      // parbaudam parole1
      if(String(ieejas[i].id)==="parole1"){
        pnt = document.getElementById(String(ieejas[i].id)).parentElement       
        let children = pnt.childNodes;
        if(pswd_check(String(ieejas[i].value)) === true){
          console.log("parole1 test iziets : ", ieejas[i].value);
          children[1].innerHTML = "<h style='color:green'>Pasword is correct!</h>";
        }  
        else{
          console.log("parole1 test NAV iziets : ", ieejas[i].value);
          // tasam pazinojumu
          children[1].innerHTML = "<h style='color:red'>Pasword is not correct!</h>";
        }        
      }

      // parbaudam parole2
      if(String(ieejas[i].id)==="parole2"){
        pnt = document.getElementById(String(ieejas[i].id)).parentElement       
        let children = pnt.childNodes;
        if(pswd_check2(String(ieejas[i].value)) === true){
          console.log("parole2 test iziets : ", ieejas[i].value);
          children[1].innerHTML = "<h style='color:green'>Pasword is correct!</h>";
        }  
        else{
          console.log("parole2 test NAV iziets : ", ieejas[i].value);
          // tasam pazinojumu
          children[1].innerHTML = "<h style='color:red'>Pasword is not correct!</h>";
        }        
      }


      // parbaudam nedela
      if(String(ieejas[i].id)==="nedela"){
        pnt = document.getElementById(String(ieejas[i].id)).parentElement       
        let children = pnt.childNodes;
        if(week_check(String(ieejas[i].value)) === true){
          console.log("nedela test iziets : ", ieejas[i].value);
          children[1].innerHTML = "<h style='color:green'>Week is correct!</h>";
        }  
        else{
          console.log("nedela test NAV iziets : ", ieejas[i].value, typeof(ieejas[i].value));
          // tasam pazinojumu
          children[1].innerHTML = "<h style='color:red'>Week is not correct!</h>";
        }        
      }


      // parbaudam time
      if(String(ieejas[i].id)==="laiks"){
        pnt = document.getElementById(String(ieejas[i].id)).parentElement       
        let children = pnt.childNodes;
        if(time_check(String(ieejas[i].value)) === true){
          console.log("Time test iziets : ", ieejas[i].value);
          children[1].innerHTML = "<h style='color:green'>Time is correct!</h>";
        }  
        else{
          console.log("Time test NAV iziets : ", ieejas[i].value, typeof(ieejas[i].value));
          // tasam pazinojumu
          children[1].innerHTML = "<h style='color:red'>Time is not correct!</h>";
        }        
      }


      // parbaudam ZIP
      if(String(ieejas[i].id)==="ZIP"){
        pnt = document.getElementById(String(ieejas[i].id)).parentElement       
        let children = pnt.childNodes;
        if(checkZIP() === true){
          console.log("ZIP test iziets : ", ieejas[i].value);
          children[1].innerHTML = "<h style='color:green'>ZIP and country are correct!</h>";
        }  
        else{
          console.log("ZIP test NAV iziets : ", ieejas[i].value, typeof(ieejas[i].value));
          // tasam pazinojumu
          children[1].innerHTML = "<h style='color:red'>ZIP and country are not correct!</h>";
        }        
      }

      
  }   
}

function checkZIP() {
  // Pievinot vel 3 valsti
  var constraints = {
    lv : [ '^(LV-)?\\d{4}$', "Latvias ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007" ],
    ee : [ '^(EE-)?\\d{4}$', "Igaunijas ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007" ],
    lt : [ '^(LT-)?\\d{4}$', "Lietuavs ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007" ],
  };

  var country = document.getElementById("Country").value;
  var ZIPField = document.getElementById("ZIP");

  var constraint = new RegExp(constraints[country][0], "");
    console.log(constraint);

  // Parbaude
  if (constraint.test(ZIPField.value)) {
    ZIPField.setCustomValidity("");
    console.log("Labi");
    return true
  }
  else {
    // Izvada kļudas paziņojumu
    ZIPField.setCustomValidity(constraints[country][1]);
    console.log("Neder");
    return false
  }
}

window.onload = function () {
    document.getElementById("Country").onchange = checkZIP;
    document.getElementById("ZIP").oninput = checkZIP;
    
    // // pievienot addEventListener priekš formas submit notikumam un izvadit funkciju printValues()
    const button_press = document.getElementById('submit');
    button_press.addEventListener('click', check_data);
  }





