// Run the code only after the page has fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Select important elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function that adds a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // remove any spaces

        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a "Remove" button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        // When the remove button is clicked, remove the task
        removeBtn.addEventListener('click', function() {
            li.remove();
        });

        // Add the remove button to the task
        li.appendChild(removeBtn);

        // Add the new task to the list
        taskList.appendChild(li);

        // Clear the input after adding
        taskInput.value = '';
    }

    //  Event listener for button click
    addButton.addEventListener('click', addTask);

    // Event listener for Enter key press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
