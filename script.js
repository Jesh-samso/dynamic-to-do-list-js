// Wait for the page to finish loading
document.addEventListener('DOMContentLoaded', () => {
  
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  let tasks = [];

  // Save all tasks to local storage
  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Add a single task to the list
  function addTask(taskText, save = true) {
    // If no taskText passed, get it from the input
    if (!taskText) {
      taskText = taskInput.value.trim();
    }

    if (taskText === '') {
      alert('Please enter a task');
      return;
    }

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    // Handle task removal
    removeBtn.addEventListener('click', () => {
      li.remove();
      const index = tasks.indexOf(taskText);
      if (index > -1) {
        tasks.splice(index, 1);
        saveTasks();
      }
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Save new task
    if (save) {
      tasks.push(taskText);
      saveTasks();
    }

    taskInput.value = '';
  }

  // Load saved tasks from local storage
  function loadTasks() {
    const stored = localStorage.getItem('tasks');
    if (stored) {
      tasks = JSON.parse(stored);
      tasks.forEach(t => addTask(t, false));
    }
  }

  // Add task on button click
  addButton.addEventListener('click', () => {
    addTask();
  });

  // Add task when pressing Enter key
  taskInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      addTask();
    }
  });

  // Load tasks when the page opens
  loadTasks();
});
