// Wait until the entire HTML document is loaded before running this script
document.addEventListener('DOMContentLoaded', () => {

  // ✅ Select key DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // ✅ Function: Add a new task
  function addTask() {
    // 1. Get and clean input text
    const taskText = taskInput.value.trim();

    // 2. Validate input
    if (taskText === '') {
      alert('Please enter a task');
      return;
    }

    // 3. Create a new <li> for the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // 4. Create a "Remove" button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    // 5. Add event to remove task when button is clicked
    removeBtn.addEventListener('click', () => {
      taskList.removeChild(li);
    });

    // 6. Append button and list item to the task list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // 7. Clear the input field
    taskInput.value = '';
  }

  //  Add event listener to button
  addButton.addEventListener('click', addTask);

  //  Allow pressing Enter key to add a task
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

});
