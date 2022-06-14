// TODO app (dienas planotaju)

const taskAdder = document.querySelector(".taskAdder");
let myTasks = document.getElementById(".myTasks");
const taskList = JSON.parse(localStorage.getItem("taskList")) || [];

taskAdder.addEventListener("submit", addTask);
myTasks.addEventListener("click", toggleDone);
renderTask();

function renderTask() {
  let task = localStorage.getItem("task");
  if (task === null) {
    taskListArray = [];
  } else {
    taskListArray = JSON.parse(task);
  }

  let html = taskListArray.forEach((list, ind) => {
    return `<li data-index='${i}'>
                        <div class="">
                            ${data.textTask}<span class="remove">❌</span>
                        </div>
                    </li>`;
  });
  taskListArray.innerHTML = html.join("");
}

function addTask(event) {
  event.preventDefault();
  const textTask = this.querySelector("[name=task]").value;
  const task = {
    textTask,
    done: false,
  };
  taskListArray.push(task);
  saveToLocalStorage(task);
  renderTask();
  this.reset();
}

function saveToLocalStorage(task) {
  localStorage.setItem("taskList", JSON.stringify(task));
}

function toggleDone(event) {
  const myEl = event.targets;
  const mySel = myEl.parentElement;
  if (myEl.className === "remove") {
    let index = mySel.parentElement.dataset.index;
    let temp = tasks.splice(index, 1);
    console.log(temp);
  } else {
    myEl.classList.toggle("done");
    tasks[mySel.dataset.index].done = !tasks[mySel.dataset.index].done;
  }
  saveToLocalStorage();
  renderTask();
}
