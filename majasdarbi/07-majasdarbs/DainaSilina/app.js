// Jevgēņijam, Vladislavam:
// Šis bija visgrūtākais mājasdarbs, tādēļ uzreiz varu teikt, ka pati tādu bez parauga neuzrakstītu.
// Ko es darīju - vairākas reizes gāju cauri piemēram un mēģināju saprast, mēģināju kaut ko mainīt, bet minimāli,
// galvenokārt - saprast, tas man bez nekādām priekšzinašanām pašreiz ir maksimums.
// Tāpēc arī šeit ir daudz komentāru, jo tādā veidā mācos saprast.



const taskAdder = document.querySelector(".taskAdder");
const myTasks = document.querySelector(".myTasks");
const tasks = JSON.parse(localStorage.getItem("taskList")) || [];

taskAdder.addEventListener("submit", addTask);
myTasks.addEventListener("click", toggleDone);

renderTask();

// pievieno jaunu uzdevumu/task
function addTask(e) {
  e.preventDefault(); // - funkcija preventDefault, ko J. parasti pievieno,
  // default JS funkcija, lai nenotiek paralēli events, lai browserim nav ietekme uz events
  const textTask = this.querySelector("[name=task]").value; // value - teksts, kas pievienots elementam
  const task = {
    textTask,
    done: false, //default
  };

  tasks.push(task); // paņem jau def. elementu un iekš tā pievieno vēl vienu
  saveToLocalStorage();
  renderTask(); // lai vēlreiz pārrenderē datus un izvada uz ekrāna

  this.reset(); // iztīra formas teksta lauku
}

// izvada datus uz ekrāna
function renderTask() {
  let html = tasks.map(function (data, i) {
    let myClass = data.done ? "done" : "";
    // definēta klase, ja true, tad done, ja ne, tad tukšs, principā if else:
    // if (data.done === true){
    //     myClass = 'done'
    // else {myClass = ''}
    // }
    return `<li data-index='${i}'>
                    <div class="${myClass}"> 
                        ${data.textTask}<span class="remove">✘</span>
                    </div>
                </li>`;
  });
  myTasks.innerHTML = html.join("");
}

function saveToLocalStorage() {
  localStorage.setItem("taskList", JSON.stringify(tasks));
}

// apstrādāt click, kad klikšķinām uz elementu - tekstu vai X, pēc indeksa
function toggleDone(e) {
  // e nozīmē events
  const myEl = e.target; // target - elements, uz kuru noklikšķināts
  const mySel = myEl.parentElement; //
  if (myEl.className === "remove") {
    let index = mySel.parentElement.dataset.index;
    let temp = tasks.splice(index, 1);
    console.log(temp);
  } else {
    myEl.classList.toggle("done");
    tasks[mySel.dataset.index].done = !tasks[mySel.dataset.index].done; //ja done pievienots, ja ne, tad izņem ārā

    // tas būtu tas pats, kas, piem.,
    // if (tasks[4].done === true) {
    //tasks[4].done === false
    // } else if {tasks[4] === false) {
    //tasks[4].done === true
    //}
  }
  saveToLocalStorage();
  renderTask();
}
