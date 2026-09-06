//need to be able to listen for when a new task is submitted via the submit button
document.querySelector('#submitTask').addEventListener('click', addTask);

//variables to hold references to element that will delete all tasks and element that will display all of our tasks
const removeAllTasks = document.querySelector('#delete-all');
const allTasks = document.querySelector('.display-tasks');

//build out of function that occurs one submit is clicked
function addTask() {
  const listText = document.querySelector('#newTaskItem').value;
  const newTask = document.createElement('li');
  const taskCheck = document.createElement('input');
  const removeTaskIcon = document.createElement('button');

  //logic for how to add a new list items to the element displaying all tasks
  document.querySelector('.display-tasks').appendChild(newTask);
  newTask.innerText = listText;

  //logic for displaying our delete button, which will show as a trash emoji/incon
  newTask.appendChild(removeTaskIcon);
  removeTaskIcon.innerText = '🗑️';

  document.querySelector('#newTaskItem').value = '';

  //Structure for styling
  newTask.prepend(taskCheck);
  taskCheck.type = 'checkbox';

  taskCheck.addEventListener('change', () => {
    taskCheck.checked
      ? (newTask.style.textDecoration = 'line-through')
      : (newTask.style.textDecoration = 'none');
  });

  removeTaskIcon.addEventListener('click', () => {
    newTask.remove();
  });
}

//delete button functionality
removeAllTasks.addEventListener('click', () => {
  allTasks.innerHTML = '';
});
