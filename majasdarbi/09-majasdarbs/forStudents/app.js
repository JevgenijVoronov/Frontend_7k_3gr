

// - Izvejdosim mainīgo dogSelector kurā saglabāsim mūsu <select> element var izmantot elementa id 'dogSelector' un getElementById() metodi
const dogSelector   = document.getElementById('dogSelector');





//izveidosim funkciju renderDogData(data) kura saņems suņa šķirnes datus 
function renderSelectOptions(data) {
    //        - izmantojot cilku forEach() izesiem cauri datiem un pievienosim mūsu dogSelector elementam ar innerHTML nepiecišamo html:
    //            `<option value=${breed.value}>${breed.name}</option>`
    data.forEach(breed => {
        dogSelector.innerHTML += `<option value=${breed.value}>${breed.name}</option>`
    })
} 

//pievienojam addEventListener pie dogSelector uz un piesaistām tam funkciju getDogImg
dogSelector.addEventListener('change', getDogImg);

//pievinojam funkciju getDogImg
function getDogImg() {
    //       - fukcijā izveidojam string tipa mainīgo, kas saturēs API url priekš konkrētās suņa šķirnes. 
    //          Šajā string vērtībā dinamiski jāievieto suņa šķirnes nosaukums no <select> elementa value attiecīgajā URL daļā. 
    //          https://dog.ceo/api/breed/SUŅA-ŠKIRNE/images/random
    //           iegūstam nepieciešamo suņa šķirnes nosaukumu, izmantojot elementa dogSelector.value   
    const url = `https://dog.ceo/api/breed/${dogSelector.value}/images/random`;

 

    //tālak izmantojot fetch() metodi izvejdojam request priekš servera
    fetch(url)
        .then(response => response.json())
        .then(data => renderDogData(data))
        .catch(error => alert(error));
}

// izvedojam funkciju renderDogData() kurai kā parametru padosim mūsu data objektu 
function renderDogData(data) {
    //// - izmantojot innerHTML pievienot img tag ar src=${data.message}
    dogImg.innerHTML = `<img src='${data.message}'>`
}

// ivejdosim vēl vienu selektoru lai dabūt mūsu dogImg elementu 
const dogimg        = document.getElementById('dogImg');



renderSelectOptions(data);

