// // Retrieve todo from local storage or initialize an empty array
// let todo = JSON.parse(localStorage.getItem("todo")) || [];
// const todoInput = document.getElementById("todoInput");
// const todoList = document.getElementById("todoList");
// const todoCount = document.getElementById("todoCount");
// const addButton = document.querySelector(".btn");
// const deleteButton = document.getElementById("deleteButton");

// // Initialize
// document.addEventListener("DOMContentLoaded", function () {
//   addButton.addEventListener("click", addTask);
//   todoInput.addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//       event.preventDefault(); // Prevents default Enter key behavior
//       addTask();
//     }
//   });
//   deleteButton.addEventListener("click", deleteAllTasks);
//   displayTasks();
// });

// function addTask() {
//   const newTask = todoInput.value.trim();
//   if (newTask !== "") {
//     todo.push({ text: newTask, disabled: false });
//     saveToLocalStorage();
//     todoInput.value = "";
//     displayTasks();
//   }
// }

// function displayTasks() {
//   todoList.innerHTML = "";
//   todo.forEach((item, index) => {
//     const p = document.createElement("p");
//     p.innerHTML = `
//       <div class="todo-container">
//         <input type="checkbox" class="todo-checkbox" id="input-${index}" ${
//       item.disabled ? "checked" : ""
//     }>
//         <p id="todo-${index}" class="${
//       item.disabled ? "disabled" : ""
//     }" onclick="editTask(${index})">${item.text}</p>
//       </div>
//     `;
//     p.querySelector(".todo-checkbox").addEventListener("change", () =>
//       toggleTask(index)
//     );
//     todoList.appendChild(p);
//   });
//   todoCount.textContent = todo.length;
// }

// function editTask(index) {
//   const todoItem = document.getElementById(`todo-${index}`);
//   const existingText = todo[index].text;
//   const inputElement = document.createElement("input");

//   inputElement.value = existingText;
//   todoItem.replaceWith(inputElement);
//   inputElement.focus();

//   inputElement.addEventListener("blur", function () {
//     const updatedText = inputElement.value.trim();
//     if (updatedText) {
//       todo[index].text = updatedText;
//       saveToLocalStorage();
//     }
//     displayTasks();
//   });
// }

// function toggleTask(index) {
//   todo[index].disabled = !todo[index].disabled;
//   saveToLocalStorage();
//   displayTasks();
// }

// function deleteAllTasks() {
//   todo = [];
//   saveToLocalStorage();
//   displayTasks();
// }

// function saveToLocalStorage() {
//   localStorage.setItem("todo", JSON.stringify(todo));
// }

// Retrieve bucket list from local storage or initialize an empty array
let bucketList = JSON.parse(localStorage.getItem("bucketList")) || [];
const bucketInput = document.getElementById("bucketInput");
const bucketListElement = document.getElementById("bucketList");
const bucketCount = document.getElementById("bucketCount");
const addButton = document.querySelector(".btn");
const deleteButton = document.getElementById("deleteButton");

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  addButton.addEventListener("click", addGoal);
  bucketInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevents default Enter key behavior
      addGoal();
    }
  });
  deleteButton.addEventListener("click", deleteAllGoals);
  displayGoals();
});

function addGoal() {
  const newGoal = bucketInput.value.trim();
  if (newGoal !== "") {
    bucketList.push({ text: newGoal, achieved: false });
    saveToLocalStorage();
    bucketInput.value = "";
    displayGoals();
  }
}

function displayGoals() {
  bucketListElement.innerHTML = "";
  bucketList.forEach((item, index) => {
    const p = document.createElement("p");
    p.innerHTML = `
      <div class="bucket-container">
        <input type="checkbox" class="bucket-checkbox" id="input-${index}" ${
      item.achieved ? "checked" : ""
    }>
        <p id="bucket-${index}" class="${
      item.achieved ? "disabled" : ""
    }" onclick="editGoal(${index})">${item.text}</p>
      </div>
    `;
    p.querySelector(".bucket-checkbox").addEventListener("change", () =>
      toggleGoal(index)
    );
    bucketListElement.appendChild(p);
  });
  bucketCount.textContent = bucketList.length;
}

function editGoal(index) {
  const bucketItem = document.getElementById(`bucket-${index}`);
  const existingText = bucketList[index].text;
  const inputElement = document.createElement("input");

  inputElement.value = existingText;
  bucketItem.replaceWith(inputElement);
  inputElement.focus();

  inputElement.addEventListener("blur", function () {
    const updatedText = inputElement.value.trim();
    if (updatedText) {
      bucketList[index].text = updatedText;
      saveToLocalStorage();
    }
    displayGoals();
  });
}

function toggleGoal(index) {
  bucketList[index].achieved = !bucketList[index].achieved;
  saveToLocalStorage();
  displayGoals();
}

function deleteAllGoals() {
  bucketList = [];
  saveToLocalStorage();
  displayGoals();
}

function saveToLocalStorage() {
  localStorage.setItem("bucketList", JSON.stringify(bucketList));
}
