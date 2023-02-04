"use strict";
//Declared Variable
const inpData = document.getElementById("input-task");
const btnAdd = document.querySelector(".btn-add");
const smallContainer = document.querySelector(".small-container");
const center = document.querySelector(".center");
const showCase = document.querySelector(".show-case");
// check function

function checkOfShowCase() {
  if (smallContainer.children.length <= 0) {
    showCase.classList.remove("hidden");
  } else {
    showCase.classList.add("hidden");
  }
}
//init condition
checkOfShowCase();

//Add Event
btnAdd.addEventListener("click", function () {
  //base case
  if (inpData.value == "") {
    center.classList.remove("hidden");
  }
  // getting input data
  else {
    center.classList.add("hidden");

    const div = document.createElement("div");
    div.classList.add("output-text", "flex");
    div.innerHTML = `   
    <div class="list-item">${inpData.value}</div>
    <div class="second-child flex">
      <button class="btn btn-done" onclick="removeDone(this)">Done</button>
      <button class="btn btn-decline" onclick="removeDelete(this)">Delete</button>
    </div>
      `;
    smallContainer.append(div);
    inpData.value = "";

    checkOfShowCase();
    // document.querySelector(".center").classList.add("hidden");
  }
});
//Enter Event
document.addEventListener("keydown", function (e) {
  //base case
  console.log(e.key);
  if (e.key === "Enter") {
    if (inpData.value == "") {
      center.classList.remove("hidden");
    }
    // getting input data
    else {
      center.classList.add("hidden");

      const div = document.createElement("div");
      div.classList.add("output-text", "flex");
      div.innerHTML = `   
        <div class="list-item">${inpData.value}</div>
        <div class="second-child flex">
          <button class="btn btn-done" onclick="removeDone(this)">Done</button>
          <button class="btn btn-decline" onclick="removeDelete(this)">Delete</button>
        </div>
      `;
      smallContainer.append(div);
      inpData.value = "";
      checkOfShowCase();
    }
  }
});

//Remove Done
function removeDone(curreEle) {
  let parentEle = curreEle.parentElement.previousElementSibling;
  if (curreEle.textContent === "Done") {
    parentEle.style.textDecoration = "line-through";
    parentEle.style.color = "grey";
    curreEle.textContent = "Undo";
  } else {
    parentEle.style.textDecoration = "none";

    curreEle.textContent = "Done";
  }
}
//Delete Button
function removeDelete(currEle) {
  let parentEle = currEle.parentElement.parentElement;
  parentEle.remove();
  checkOfShowCase();
  center.classList.add("hidden");
}

// Toggle
document.querySelector(".toggle").addEventListener("click", function () {
  document.querySelector(".fair").classList.toggle("active");

  document.getElementById("body").classList.toggle("light");
});
