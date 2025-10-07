// Select the necessary elements
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Define the function that creates and removes tasks
function addTask() {
  // Get and clean up the text from the input
  const taskText = taskInput.value.trim();

  // If the input is empty, alert the user and stop
  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  // Create a new list item for the task
  const li = document.createElement('li');
  li.textContent = taskText;

  // Create a "Remove" button for deleting the task
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove-btn';

  // When the remove button is clicked, delete the task
  removeBtn.onclick = () => {
    taskList.removeChild(li);
  };

  // Append the remove button and the task to the list
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  // Clear the input for the next task
  taskInput.value = '';
}

// Listen for clicks on the "Add Task" button
addButton.addEventListener('click', addTask);

// Allow adding tasks with the "Enter" key
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
