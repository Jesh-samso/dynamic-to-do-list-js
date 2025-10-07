// Wait for the page (HTML) to finish loading before running the script
document.addEventListener('DOMContentLoaded', () => {

  // Select the important DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  //  Define the function that adds a new task
  function addTask() {
    // Get and clean up the text entered in the input field
    const taskText = taskInput.value.trim();

    // If the input is empty, alert the user and stop here
    if (taskText === '') {
      alert('Please enter a task');
      return;
    }

    // Create a new <li> element to represent the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a "Remove" button for deleting the task
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Add click functionality to remove the task when clicked
    removeBtn.onclick = () => {
      taskList.removeChild(li);
    };

    // Add the button inside the list item, then add the list item to the task list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the input field for the next task
    taskInput.value = '';
  }

  //  Add event listener to the "Add Task" button
  addButton.addEventListener('click', addTask);

  //  Add event listener to allow pressing Enter to add tasks
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Optionally call addTask on page load (only if the input isn’t empty)
  if (taskInput.value.trim() !== '') {
    addTask();
  }
});
