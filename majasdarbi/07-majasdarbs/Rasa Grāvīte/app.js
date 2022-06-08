    
const taskAdder = document.querySelector('.taskAdder');
const myTasks   = document.querySelector('.myTasks');
const tasks     = JSON.parse(localStorage.getItem('taskList')) || [];

taskAdder.addEventListener('submit', addTask);
myTasks.addEventListener('click', toggleDone);





// addEventListener click 
// addEventListener submit



renderTask();

function addTask(e){
    e.preventDefault();
    const textTask = this.querySelector('[name=task]').value;
    const task = {
        textTask: newTask,
        done: false
    }
    saveToLocalStorage(task);
};


function saveToLocalStorage(task) {
    tasks.push(task);
    localStorage.setItem("taskList", JSON.stringify(tasks));

}
function renderTask() {
    let html = tasks.map(function(data,i) {
        let myClass = data.done ? 'done' : '';
        return `<li data-index='${i}'>
                <div class="${myClass}">
                    ${data.textTask}<span class="remove">❌</span>
                </div>
            </li>`;
    })
    myTasks.innerHTML = html.join("");
}

function saveToLocalStorage() {
    localStorage.setItem( 'taskList' , JSON.stringify(task));

}

function toggleDone(e) {
   const myEl = e.target;
   const mySel = myEl.parentElement;
   if(myEl.className === 'remove') {
       let index = meSel.parentElemen.dataset.index;
       let temp = task.splice(index,1);
       console.log(temp);
   } else {
       myEl.classList.toggle('done');
       tasks[mySel.dataset.index].dine = !tasks[mySel.dataset.index].done;
   }
   saveToLocalStorage();
   renderTask();
   }
