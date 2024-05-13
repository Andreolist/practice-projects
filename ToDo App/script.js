let countDiv = document.getElementById('count');
let input = document.getElementById('input');
let addBtn = document.getElementById('add-btn');
let list = document.getElementById('list');
let clearList = document.getElementById('clear');


let totalTasks = 0;
let doneTasks = 0;

function updateCounts() {
  let left = totalTasks - doneTasks;
  let div = document.getElementById('counter');
  div.innerHTML = `Total: ${totalTasks} | Done: ${doneTasks} | Remaining: ${left}`;
}

addBtn.addEventListener('click', function() {
  if (input.value === "") {
    alert('Please add task');
  } else {
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('taskDiv');

    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('check');

    let inputVal = document.createElement('p');
    inputVal.textContent = input.value;
    inputVal.classList.add('inputVal');

    checkBox.addEventListener('click', function() {
      if (checkBox.checked) {
        inputVal.style.textDecoration = 'line-through';
        doneTasks++;
      } else {
        inputVal.style.textDecoration = 'none';
        doneTasks--;
      }
      updateCounts();
    });

    taskDiv.appendChild(checkBox);
    taskDiv.appendChild(inputVal);

    list.appendChild(taskDiv);
    input.value = '';

    totalTasks++;
    updateCounts();

    clearList.addEventListener('click', function() {
      list.textContent = "";
      totalTasks = 0;
      doneTasks = 0;
      left = 0
      updateCounts();
    })
  }


  
});

updateCounts();



