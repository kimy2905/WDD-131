let tasks = [];

function taskTemplate(task) {
  return `
    <li ${task.completed ? 'class="strike"' : ""}>
      <p>${task.detail}</p>
      <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
      </div>
    </li>`;
}

function renderTasks(tasks) {
  // Get the list element from the DOM
  const listElement = document.querySelector("#todoList");
  listElement.innerHTML = "";
  // Loop through the tasks array. Transform (map) each task object into the appropriate HTML
  const html = tasks.map(taskTemplate).join("");
  listElement.innerHTML = html;
}

function newTask() {
  // Get the value entered into the #todo input
  const task = document.querySelector("#todo").value;
  // Add it to our arrays tasks
  tasks.push({ detail: task, completed: false });
  // Render out the list
  renderTasks(tasks);
}

function removeTask(taskElement) {
  // Filter the tasks array to remove the task
  tasks = tasks.filter(
    (task) => task.detail !== taskElement.querySelector("p").innerText
  );
  taskElement.remove();
}

function completeTask(taskElement) {
  // Find the index of the task in the tasks array
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.querySelector("p").innerText
  );
  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  taskElement.classList.toggle("strike");
}

function manageTasks(e) {
  // Check if delete or complete was clicked
  const parent = e.target.closest("li");
  if (e.target.dataset.function === "delete") {
    removeTask(parent);
  } else if (e.target.dataset.function === "complete") {
    completeTask(parent);
  }
}

// Add event listeners
document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);

// Render the initial list of tasks when the page loads
renderTasks(tasks);

