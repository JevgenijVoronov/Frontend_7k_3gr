// local variables:

const inputval = document.querySelector("#cityinput");
const btn = document.querySelector("#add");
const city = document.querySelector("#cityoutput");
const descrip = document.querySelector("#description");
const temp = document.querySelector("#temp");
const wind = document.querySelector("#wind");
const sunRise = document.querySelector("#sunrise");
const sunSet = document.querySelector("#sunset");

apik = "3045dd712ffe6e702e3245525ac7fa38";

// Temperatura tiek pievienota kelvinos lidz ar to nepicišam parveidot tos celcios
// no data pievinotas temperaturas jaatņem 273 tad mes dabusim temperaturu celsijos

function convertion(val) {
  return (val - 273).toFixed(2);
}

// fetch metode

tn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputval.value +
      "&appid=" +
      apik
  )
    .then((res) => res.json())
    .then((data) => {
      let nameval = data["name"];
      let descrip = data["weather"]["0"]["description"];
      let tempature = data["main"]["temp"];
      let wndspd = data["wind"]["speed"];
      //    let rise = data["sun"]["rise"];
      //   let set = data["sun"]["set"];

      city.innerHTML = `Weather of <span>${nameval}<span>`;
      temp.innerHTML = `Temperature: <span>${convertion(tempature)} C</span>`;
      description.innerHTML = `Sky Conditions: <span>${descrip}<span>`;
      wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`;
      sunRise.innerHTML = "<span.${rise}</span>";
      sunSet.innerHTML = "<span.${set}</span>";
    })
    .catch((err) => alert("You entered Wrong city name"));
});

// on btn click funkcija
// addEventListener
// fetch
// response

// datu response piemers
//   {
//     "coord": {
//         "lon": 23.7128,
//         "lat": 56.65
//     },
//     "weather": [
//         {
//             "id": 802,
//             "main": "Clouds",
//             "description": "scattered clouds",
//             "icon": "03d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 293.17,
//         "feels_like": 292.48,
//         "temp_min": 293.17,
//         "temp_max": 293.17,
//         "pressure": 1014,
//         "humidity": 48,
//         "sea_level": 1014,
//         "grnd_level": 1014
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 4.6,
//         "deg": 299,
//         "gust": 8.75
//     },
//     "clouds": {
//         "all": 46
//     },
//     "dt": 1655294073,
//     "sys": {
//         "type": 1,
//         "id": 1876,
//         "country": "LV",
//         "sunrise": 1655256795,
//         "sunset": 1655320681
//     },
//     "timezone": 10800,
//     "id": 459279,
//     "name": "Jelgava",
//     "cod": 200
// }
