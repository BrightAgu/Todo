const list_container = document.getElementById("list_container");
const list_items_display = document.getElementsByClassName("list_items");
const taskInput = document.getElementById("todo");

document.getElementById("toggle").onclick = function () {
  const element = document.body;
  element.classList.toggle("light-mode");

  //const content = document.getElementsByClassName("box1 box2");
  const img = document.getElementById("toggle-img");
  if (img.src.match("./images/icon-sun.svg")) {
    img.src = "./images/icon-moon.svg";
  } else {
    img.src = "./images/icon-sun.svg";
  }
};

const listItems = [
  { task: "Complete online javasscript course", isDone: false, id: 0 },
  { task: "Jog around the park 3x", isDone: true, id: 1 },
];
// Display list items function
const populateListContainer = () => {
  let list = "";

  const descendingOrder = listItems.slice().sort((a, b) => b.id - a.id);
  console.log(descendingOrder);

  descendingOrder.forEach((item) => {
    list += `
  <div class="list_items">
    <input type="checkbox" onclick="checkTask(${
      item.id
    })" class="checkbox-round" ${item.isDone ? "checked" : ""} />
    <p class="${item.isDone ? "completed" : "active"}" id="item-${item.id}">
      ${item.task}
    </p>
  </div>
   <hr />
   `;
  });

  list_container.innerHTML = list;
};

taskInput.addEventListener("keydown", addTask);
function addTask(e) {
  if ((e.key === "Enter") & (taskInput.value.trim() !== "")) {
    e.preventDefault();
    listItems.unshift({ task: taskInput.value, isDone: false });
    taskInput.value = "";
    populateListContainer();
  }
}

//This function get task using "id" and marks it as completed if Active, or active if it is completed
function checkTask(id) {
  const selectedTask = document.getElementById(`item-${id}`);

  if (listItems[id].isDone) {
    console.log("item is true")
    listItems[id].isDone = false;
    selectedTask.classList.remove("completed");
    selectedTask.classList.add("active");
  } else if (listItems[id].isDone === false) {
    console.log("item is false")
    listItems[id].isDone = true;
    console.log(selectedTask);
    selectedTask.classList.remove("active");
    selectedTask.classList.add("completed");
  }

  console.log(selectedTask);
}

populateListContainer();

// Create a "close" button and append it to each list item
/*var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}*/
