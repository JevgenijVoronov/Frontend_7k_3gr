async function start() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    // waiting for promise to provide us our results
    const data = await response.json()
    createDogBreedList(data.message)
}

function createDogBreedList(breedList) {
    document.getElementById("breed").innerHTML = `
        <select> onchange="loadByBreed"(this.value)">
             <option>Choose a desired dog breed</option>
             ${Object.keys(breedList).map(function (breed) {
                 return `<option> ${breed} </option>`
        }).join('')}
        </select>
    `
}

async function loadByBreed(breed) {
    if (breed !="Choose a desired dog breed") {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const data = await response.json()
    }
}

