document.addEventListener('DOMContentLoaded', () => {
  // Select key elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to handle adding a new task
  const addTask = () => {
    const taskText = taskInput.value.trim();

    if (!taskText) {
      alert('Please enter a task.');
      return;
    }

    // Create new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Handle remove click
    removeBtn.addEventListener('click', () => {
      li.remove();
    });

    // Append elements
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
  };

  // Event listeners
  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') addTask();
  });
});
