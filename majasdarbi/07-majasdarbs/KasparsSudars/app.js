// TODO app (dienas planotaju)
// Nokopejiet šo mapi savas majas darba mape
// Aplikacijas darbas principi var apskatit video appDemo.mp4

/* Mums nepieciešams izviedot nelielu todo aplikaciju ar iespeju pievienot izdzest un atziment izdarito notikumu
    Mums nepieciešams 4 funkcijas
        addTask() - pievienot notikumu
            1 - izveleties inputa vertibu izmantojot selector.value;
            2 - izveido object priekš notikums 
                const task = {
                    textTask,
                    done: false
                }
            3 - izsaukt funkciju saveToLocalStorage

        saveToLocalStorage() - saglaba notikumu
            1 - jaizmanto JSON.stringify
            2 - jaizmanto atslegst vards 'taskList'

        renderTask() - izvada sarakstu notikumu
            1 - jaizmanto innerHTML
            2 - jaizmanto vienu no cikliem lai iziet cauri visam localstorage ierakstiem
            3 - šis html palidzes izvadit datus
            return `<li data-index='${i}'>
                        <div class="">
                            ${data.textTask}<span class="remove">❌</span>
                        </div>
                    </li>`;
            4 - Gadijuma ja elements ir apziments ka izdarits mums nepiecišams pievienot klassi .done ../style.css
                Lidz ar to nepieciešams izveidot parbaudi if else lai parbaudit test.done === 'true'

        toggleDone() - atzimet ka izdarito
            Mums nepiecišams pievinot 2 eventListener
                addEventListener('submit', addTask);   ----> nostradas kad mes nospiedam pievinot pogu un izsaucam funkciju addTask
                addEventListener('click', toggleDone); ----> nostradas kad mes nospiedam uz elementu saraksta un izsaucam funkciju toggleDone

                funkcija toogleDone dara divas darbibas
                gadijuma ja bija nospiesta izdžešanas poga, mes izdesam elementu no localStorage izsaucam renderTask funkciju lai atjaunto sarakstu
                gadijuma ja bija nospiest elements mes nomainam elementam done vertibu done: false --> done: true un izsaucam renderTask funkciju lai atjauno sarakstu
*/          
const taskAdder = document.querySelector('.taskAdder');
const myTasks   = document.querySelector('.myTasks');
//localStorage.clear('taskList')
const tasks     = JSON.parse(localStorage.getItem('taskList')) || [];

// addEventListener click 
// addEventListener submit
//renderTask();
taskAdder.addEventListener('submit', addTask);
//taskAdder.addEventListener('click', toggleDone);
renderTask();

function addTask(){
    //let nameValue = taskAdder.value;
    let nameValue = document.getElementsByName("task")[0].value;
    const one_task = {
        name: nameValue,
        done: false
    }
    //console.log("Input type :",typeof(nameValue))
    //console.log("ieraksts 1 :", nameValue);
    if (String(nameValue)===""){
        console.log("No input!")
    }
    else{
        saveToLocalStorage(one_task);
    }
    //saveToLocalStorage(one_task);
    return 0;
}

function saveToLocalStorage(one_task) {
    tasks.push(one_task);
    let tasks_string = JSON.stringify(tasks);
    console.log("ieraksts 2 :", tasks_string);
    localStorage.setItem('taskList', tasks_string)
}

function renderTask() {
    let include_html = "";
    for (let i = 0; i < tasks.length; i++) {
        //console.log(i);
        //document.getElementById("myTasks").innerHTML = "I have changed!"; 
        let izp = "";
        if( tasks[i].done === true ){
            izp = "done";
        }
        else{
            izp = "";
        }
        include_html = include_html + 
        `<li data-index='${i}'>
        <div class="${izp}">
            <span class="change" onclick="toggleDone2(${i})">${tasks[i].name}</span>
            <span class="remove" onclick="toggleDone(${i})">❌</span>
        </div>
        </li>`;
      }
    myTasks.innerHTML = include_html;
}

function toggleDone(ind) {
    //console.log("tika nospiesta pele", ind);
    tasks.splice(ind, 1);
    let tasks_string = JSON.stringify(tasks);
    //console.log("ieraksts 2 :", tasks_string);
    localStorage.setItem('taskList', tasks_string);
    renderTask();
}

function toggleDone2(ind) {
    //console.log("tika nospiesta pele", ind);
    //console.log("tasks : ", tasks);
    tasks[ind].done = !tasks[ind].done;
    let tasks_string = JSON.stringify(tasks);
    //console.log("ieraksts 2 :", tasks_string);
    localStorage.setItem('taskList', tasks_string);
    renderTask();
}



