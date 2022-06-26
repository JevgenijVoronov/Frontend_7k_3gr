const dogSelector = document.getElementById("dogSelector");
const dogImgSelector = document.getElementById("dogImg");

function renderDogData(data) {
  data.forEach((breed) => {
    dogSelector.innerHTML += `<option value=${breed.value}>${breed.name}</option>`;
  });
}

function renderDogImg(data) {
  dogImg.innerHTML = `<img src='${data.message}'>`;
}

function getDogImg() {
  const url = `https://dog.ceo/api/breed/${dogSelector.value}/images/random`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => renderDogImg(data)).catch((error) => alert(error));
}

renderDogData(data);
dogSelector.addEventListener("change", getDogImg);
