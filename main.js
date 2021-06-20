let form = document.querySelector("#form");
let listView = document.querySelector("ul");
let inputBox = document.querySelector("#inputBox");
let database = JSON.parse(localStorage.getItem("todos"));
listView.style.display = "none";
form.addEventListener("submit", e => {
  e.preventDefault();
  addTask(inputBox.value)
});

// TASK ADDER FUNCTION
function addTask(val) {
  if (val) {
    let li = document.createElement("LI");
    li.innerText = val;
    listView.appendChild(li);
    storageHandle();
    inputBox.value = "";
    li.addEventListener("click", () => {
      li.remove();
      storageHandle();
    });
  }
}

// LOCALSTORAGE HANDLER FUNCTION
function storageHandle() {
  let task = document.querySelectorAll("li");
  if (task) {
    let taskArray = [];
    task.forEach(val => {
      taskArray.push({
        text: val.innerText
      });
    })
    localStorage.setItem("todos", JSON.stringify(taskArray));
  }
  if(task.length == 0) {
    listView.style.display = "none";
  } else {
    listView.style.display = "block";
  }
}

// LOAD ALL IN ONLOAD PAGE
if (database) {
  for (let i = 0; i < database.length; i++) {
    addTask(database[i].text);
  }
}