const task = document.getElementById("input")
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("list");

function addTask() {
  if(task.value === ''){
    alert("You have to write down the task.");
  } else if (task.value.length < 50){
    li = document.createElement("li");
    li.textContent = task.value;

    checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "checkbox");
    checkbox.setAttribute("class", "checkbox");
    li.appendChild(checkbox);


    span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
 
    taskList.appendChild(li);
    saveList();
  } else {
    alert("Task is too long, restrict yourself to 50 characters");
  }
  task.value = '';
}

taskList.addEventListener('click', (e) => {
  if(e.target.tagName === 'INPUT'){
    e.target.parentElement.classList.toggle("crossed");
  } else if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
  saveList();
})

function saveList() {
  localStorage.setItem('data', taskList.innerHTML);
}

function showList() {
  taskList.innerHTML = localStorage.getItem('data');
}

showList();