/*  
    Aplikacijas darba principu var apskatities video
    success-case.mp4
    bad-case.mp4

    Aplikacijas darba princips
    Mums piejajams masivs ar burtiem
    Lietotajam ir iespeja ievadit skaitli 
    Ja ievaditais skaitlis atbilst burtu masivam tad šis burts tiek izvadits uz ekranu 
*/

const characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let arrayId = ''
let output = document.getElementById('main');

let getValue = () => {
    arrayId = prompt(`Ievadiet skaitli no 0 lidz ${characters.length}`,);
    if (arrayId > 25 || arrayId === '') {
        alert(`Skaitlis ${arrayId} neatbilst intervālam no 0 lidz 25`);
        getValue();
    } else {
        printValue();
    }
}

let printValue = () => {
    output.innerText = characters[arrayId];
}

getValue();

document.addEventListener("keypress", (eventObject) => {
    if (eventObject.key === characters[arrayId]) {
        alert('PAREIZI');
        getValue();
    } else {
        alert('NEPAREIZI');
    }
})