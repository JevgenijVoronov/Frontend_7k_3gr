// Definējam mainīgos

let inputval = document.querySelector("#cityinput");
let btn = document.querySelector("#add");
let city = document.querySelector("#cityoutput");
let descrip = document.querySelector("#description");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");
let sunrise = document.querySelector("#sunrise");
let sunset = document.querySelector("#sunset");

let apik = "3045dd712ffe6e702e3245525ac7fa38";

//Funkcija, kas pārvērš Kelvinus Celsija grādos

function toCelsius(val) {
  return (val - 273).toFixed(2);
}
// Pēc Submit taustiņa nospiešanas ar fetch metodi iegūstam informāciju no api

btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputval.value +
      "&appid=" +
      apik
  )
    .then((res) => res.json())
    .then((data) => {
      //Iegūto informāciju saglabājam mainīgajos

      let nameval = data["name"];
      let descrip = data["weather"]["0"]["description"];
      let temperature = data["main"]["temp"];
      let wndspd = data["wind"]["speed"];
      let rise = data["sys"]["sunrise"];
      let set = data["sys"]["sunset"];

      //Pārveido Epoch(Unix)laiku uz GMT

      let sunriseGMT = new Date(rise * 1000);
      let sunsetGMT = new Date(set * 1000);

      //Izmantojot innerHTML, izvadām iegūto informāciju

      city.innerHTML = `Weather of <span>${nameval}<span>`;
      temp.innerHTML = `Temperature: <span>${toCelsius(temperature)} C</span>`;
      description.innerHTML = `Sky Conditions: <span>${descrip}</span>`;
      wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`;

      sunrise.innerHTML = `Sunrise:  <span>${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}</span>`;
      sunset.innerHTML = `Sunset:  <span>${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}</span>`;
    })

    //Ja pilsēta nav atrodama, vai ievadīta kļūdaini, izvadām paziņojumu

    .catch((err) => alert("Wrong city name"));
});
