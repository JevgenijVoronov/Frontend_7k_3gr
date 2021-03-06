/*  
    Aplikacijas darba principu var apskatities video
    success-case.mp4
    bad-case.mp4

    Aplikacijas darba princips:
        Mums piejajams masivs ar burtiem
        Lietotajam ir iespeja ievadit skaitli 
        Ja ievaditais skaitlis atbilst burtu masivam tad šis burts tiek izvadits uz ekranu 
        Spiežot pogas uz tastaturas aplikacija parbauda ievadito vertibu ar izveleto burtu un paziņo par rezultatu
*/


// Implementacija
// 1) izvejdot massivu ar burtiem characters[]

const characters = ['a','b','c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 'v', 'w', 'u', 'z'];
// const characters = ["a", "b", "c", "e", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "t", "s", "v", "w", "z"];


// 2) izvejtot mainigo "arrayId" šis mainigas saņems lietotaja ievadito skaitli

let arrayId = '';


// 3) izvejtot mainigo "output" šis mainigas satur DOM elementu kur tiek izvadits izveletais burts (getElementById) 

const output = document.getElementById('main');


/* 4) izvejtot funkciju getValue() funkcijas ipašibas 
        neko nesaņem
        izmantojot prompt() medoti --> https://www.w3schools.com/jsref/met_win_prompt.asp piesaistit vertibu mainigam arrayId
        izveidot parbaudi if else un parliecinaties ka ievietotais skatlis pieder intervalam no 0 lidz characters.lenght
        ja gadijuma izsaukt finkciju print value (5 punkts)
        ne gadijuma izvadit kļudas paziņojomu pec tam izsaukt funkciju getValue velreizi
*/      

        // funkcijas koda bloks


let getValues = () => {
        arrayId = prompt(`Ievadiet skaitli no 0 līdz ${characters.length}`);
if (arrayId > characters.lenght || arrayId === '' || arrayId === undefined) { 
        alert(`Skaitls ${arrayId} neatbilst`);
        getValues();
} else {
        printValues();
}
}
/* 5) izvejtot funkciju printValues() funkcijas ipašibas
        neko nesaņem
        izmaiņam defineto output mainigo iekšejo text (innerText) ar izveleto burtu masiva (characters[arrayId])
*/

let printValues = () => {
        output.innerHTML = characters[arrayId];
}  

getValues();

document.addEventListener('keypress', (eventObject) => {
        if (eventObject.key === characters[arrayId]) {
                alert('Pareizi');
                getValues();
        } else {
                alert('Nepareizi')
        }
})




// 6) izsaucam funkciju getValue()

/* 7) japievino event listener keyPress un parbaudit ievadito to tastaturas vertibu ar izveleto vertibu pirm tam
        ja gadijuma izvadit paziņojumu alert('PAREIZI') un izsaukt funkciju getValue() vel reizi
        ne gadijum izvadit paziņojumu alert('NEPAREIZI')
        */

        /*
function getValue (element.addEventListener(‘keypress’, (eventObject)) => {

        if (arrayId => characters.lenght) {
                alert("PAREIZI");
                getValue();
        } else {
                alert("NEPAREIZI");      
}
}
*/