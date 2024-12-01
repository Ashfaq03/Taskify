const input = document.querySelector("#input-box");
const addBtn = document.querySelector("button");
const liContainer = document.querySelector(".list-container");

addBtn.addEventListener("click", addTask);

function addTask() {
  if (input.value === "") {
    alert("enter task to add");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    liContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
}

liContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData(){
    localStorage.setItem("data", liContainer.innerHTML);
}

function showTask(){
    liContainer.innerHTML = localStorage.getItem("data");
}

showTask();
