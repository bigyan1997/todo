// Function to mark todo item as complete
function markAsCompleted(event) {
  // Find the todo item (the span that contains the todo text)
  const todoItem = event.target.closest(".todo-display");
  const todoText = todoItem.querySelector(".todo-item");

  // Apply strike-through to the text
  todoText.style.textDecoration = "line-through";
}

// Add event listener to form submission to add new todo items
const form = document.querySelector("form");
const input = document.querySelector("input");
const todoList = document.querySelector(".todo-list");

// Counter for todo item numbers
let todoCounter = 1;

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the page reload on form submission

  // Get the todo text from the input field
  const todoText = input.value.trim();

  if (todoText !== "") {
    // Create a new todo item element
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-display");

    // Add the todo item content
    todoItem.innerHTML = `
            <span class="todo-item">
                <span class="todo-number">${todoCounter}</span> ${todoText}
            </span>
            <button class="btn-check">
                <span class="btn btn-submit"><i class="fas fa-check"></i></span>
            </button>
        `;

    // Append the new todo item to the list
    todoList.appendChild(todoItem);

    todoCounter++;

    // Clear the input field after adding the todo
    input.value = "";

    // Attach the click event to the new "Complete(check)" button
    const button = todoItem.querySelector(".btn-check");
    button.addEventListener("click", markAsCompleted);
  }
});

// Add event listener for "Complete" buttons in the existing todo items
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn-check");
  buttons.forEach((button) => {
    button.addEventListener("click", markAsCompleted);
  });
});
