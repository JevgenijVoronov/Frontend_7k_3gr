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
const myTasks = document.querySelector('.myTasks');
const tasks = JSON.parse(localStorage.getItem('taskList')) || [];

// addEventListener click 
addEventListener("click", toggleDone);
// addEventListener submit
addEventListener("submit", addTask)

let taskContainer = document.getElementById("taskList");

renderTask();

function addTask() {
    const newTask = document.getElementById("uzd").value;
    const task = {
        textTask: newTask,
        done: false
    }
    saveToLocalStorage(task);
};


function saveToLocalStorage(task) {
    tasks.push(task);
    localStorage.setItem("taskList", JSON.stringify(tasks));
};




function renderTask() {
    let tasksToRender = [];
    tasks.forEach((item, i) => {
        //let isTaskChecked = item.done ? "checked" : "";
        if (item.done === true) {
            let eachTask = `<li data-index='${i}'>
                            <div class="done">
                            ${item.textTask}<span class="remove" id="delete"> ❌ </span>
                            </div>
                            </li>`;
            tasksToRender.push(eachTask)
        } else {
            let eachTask = `<li data-index='${i}'>
                            <div class="todo">
                            ${item.textTask}<span class="remove" id="delete"> ❌ </span>
                            </div>
                            </li>`;
            tasksToRender.push(eachTask);
        }
    });
    taskContainer.innerHTML = tasksToRender.join("");
}

function toggleDone(e) {
    let taskIndex = e.target.parentNode.getAttribute("data-index")
    let deleteId = e.target.getAttribute("id")
    let deleteIndex = e.target.parentNode.parentNode.getAttribute("data-index")

    if (deleteId === "delete") {
        tasks.splice(deleteIndex, 1)
    } else if (tasks[taskIndex].done) {
        tasks[taskIndex].done = false;
    } else if (!tasks[taskIndex].done) {
        tasks[taskIndex].done = true;
    }

    localStorage.setItem("taskList", JSON.stringify(tasks))
    renderTask();
}