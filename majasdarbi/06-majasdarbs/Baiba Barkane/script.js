/*  
    Aplikacijas darba principu var apskatities video
    success-case.mp4
    bad-case.mp4

    Aplikacijas darba princips:
        Mums piejajams masivs ar burtiem
        Lietotajam ir iespeja ievadit skaitli 
        Ja ievaditais skaitlis atbilst burtu masivam tad šis burts tiek izvadits uz ekranu 
        Spiežot pogas uz tastaturas aplikacija parbauda ievadito vertibu ar 
        izveleto burtu un pažiņo par rezultatu
*/

// Implementacija
// 1) izvejdot massivu ar burtiem characters[]

const characters = ["z", "a", "l", "k", "t", "i", "s"];

// 2) izvejtot mainigo "arrayId" šis mainigas saņems lietotaja ievadito skaitli

let arrayId = 0;

/* 3) izvejtot mainigo "output" šis mainigas satur DOM elementu 
kur tiek izvadits izveletais burts(getElementById) */

let output = document.getElementById(input);

/* 4) izvejtot funkciju getValue() funkcijas ipašibas 
        neko nesaņem
        izmantojot prompt() medoti --> https://www.w3schools.com/jsref/met_win_prompt.asp 
        piesaistit vertibu mainigam arrayId
        izveidot parbaudi if else un parliecinaties 
        ka ievietotais skatlis pieder intervalam no 0 lidz characters.lenght
        ja gadijuma izsaukt finkciju print value (5 punkts)
        ne gadijuma izvadit kļudas paziņojomu pec tam izsaukt funkciju getValue velreizi
        */

let getValue = () => {
  arrayId = prompt("Ievadiet skaitli no 0 līdz 25");
  if (arrayId >= 0 && arrayId <= characters.length) {
    printValue();
  } else {
    alert("Nepareizi");
    getValue;
  }

  /* 5) izvejtot funkciju printValues() funkcijas ipašibas neko nesaņem
        izmaiņam defineto output mainigo iekšejo text (innerText) ar izveleto burtu masiva (characters[arrayId])  */

  let printValue = () => {
    output.innerText = characters[arrayId];
    console.log(output);
  };

  // 6) izsaucam funkciju getValue()

  getValue();

  /* 7) japievino event listener keyPress un parbaudit ievadito to tastaturas vertibu 
        ar izveleto vertibu pirm tam
        ja gadijuma izvadit paziņojumu alert('PAREIZI') un izsaukt funkciju getValue() vel reizi
        ne gadijum izvadit paziņojumu alert('NEPAREIZI')
        */
  element.addEventListener("keypress", key);
  if (key == characters[arrayId]) {
    alert("Pareizi");
    getValue();
  } else {
    alert("Nepareizi");
  }
};
