/*  
    Aplikacijas darba principu var apskatities video
    success-case.mp4
    bad-case.mp4

    Aplikacijas darba princips:
        Mums piejajams masivs ar burtiem
        Lietotajam ir iespeja ievadit skaitli 
        Ja ievaditais skaitlis atbilst burtu masivam tad šis burts tiek izvadits uz ekranu 
        Spiežot pogas uz tastaturas aplikacija parbauda ievadito vertibu ar izveleto burtu un pažiņo par rezultatu
*/


// Implementacija
// 1) izvejdot massivu ar burtiem characters[]
const burti = ["a", "b", "c", "d", "f", "g", "h", "j", "l", "z", "x"]; 
//console.log(burti.length);

// 2) izvejtot mainigo "arrayId" šis mainigas saņems lietotaja ievadito skaitli

let arrayId;
//let arrayId = prompt("Enter some number");
//console.log("Sis ir ievadits : ", arrayId)

// 3) izvejtot mainigo "output" šis mainigas satur DOM elementu kur tiek izvadits izveletais burts (getElementById) 
let output = document.getElementById("main");
//output.innerHTML = burti.length;

/* 4) izvejtot funkciju getValue() funkcijas ipašibas 
        neko nesaņem
        izmantojot prompt() medoti --> https://www.w3schools.com/jsref/met_win_prompt.asp piesaistit vertibu mainigam arrayId
        izveidot parbaudi if else un parliecinaties ka ievietotais skatlis pieder intervalam no 0 lidz characters.lenght
        ja gadijuma izsaukt finkciju print value (5 punkts)
        ne gadijuma izvadit kļudas paziņojomu pec tam izsaukt funkciju getValue velreizi
*/      
function getValue() {
        arrayId = prompt("Enter number in range from 0-10");
        if ((arrayId >= 0) && (arrayId < burti.length)) {
                //output.innerHTML = "Viss Ok!";
                printValues(arrayId)
              }
              else{
                output.innerHTML = "Number not correct!";
                getValue(arrayId)
              }
        return 0;   
}

/* 5) izvejtot funkciju printValues() funkcijas ipašibas
        neko nesaņem
        izmaiņam defineto output mainigo iekšejo text (innerText) ar izveleto burtu masiva (characters[arrayId])
*/
//output.innerText = burti[2]
function printValues(arrayId) {
        output.innerText = burti[arrayId]
        return 0;   
}

// 6) izsaucam funkciju getValue()
getValue(arrayId)

/* 7) japievino event listener keyPress un parbaudit ievadito to tastaturas vertibu ar izveleto vertibu pirm tam
        ja gadijuma izvadit paziņojumu alert('PAREIZI') un izsaukt funkciju getValue() vel reizi
        ne gadijum izvadit paziņojumu alert('NEPAREIZI')
*/      


document.addEventListener('keypress', presskey);

function presskey(event) {
        var keyCode = event.keyCode;
        //console.log(keyCode, burti[arrayId].charCodeAt());
        if (keyCode === burti[arrayId].charCodeAt()){
                alert('PAREIZI');
        }
        else{
                alert('NEPAREIZI')
        }
}
