// Make sure the page is fully loaded before running the code
document.addEventListener('DOMContentLoaded', function() {

    // Get the button, input field, and list
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        let taskText = taskInput.value.trim(); // remove extra spaces

        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        // Create new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        // When the remove button is clicked
        removeBtn.addEventListener('click', function() {
            li.remove();
        });

        // Add button to list item, then add to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input after adding
        taskInput.value = '';
    }

    // When button is clicked, add a task
    addButton.addEventListener('click', addTask);

    // Also add task when Enter key is pressed
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

});
