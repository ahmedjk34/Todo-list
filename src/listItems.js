const main = document.querySelector("main");
export function displayListHeader(name) {
  const listHeader = document.createElement("div");
  listHeader.classList.add("listHeader");
  const title = document.createElement("h1");
  title.innerHTML = name;
  const headerButtonHolder = document.createElement("div");
  headerButtonHolder.classList.add("headerButtonHolder");
  const renameButton = document.createElement("button");
  renameButton.id = "renameMIButton";
  renameButton.textContent = "Rename";
  const deleteButton = document.createElement("button");
  deleteButton.id = "deleteMIButton";
  deleteButton.textContent = "Delete";
  headerButtonHolder.appendChild(renameButton);
  headerButtonHolder.appendChild(deleteButton);
  listHeader.appendChild(title);
  listHeader.appendChild(headerButtonHolder);
  main.appendChild(listHeader);
}

export function displayListItems() {
  //creating the repeating items
  const listItems = document.createElement("div");
  listItems.classList.add("listItems");
  const addTask = document.createElement("button");
  addTask.id = "addTask";
  addTask.textContent = "+ Add a Task";
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("taskContainer");
  const taskHeader = document.createElement("div");
  taskHeader.classList.add("tasksHeader");
  const taskName = document.createElement("p");
  taskName.textContent = "Task Name";
  const taskProperties = document.createElement("div");
  const dueDate = document.createElement("p");
  dueDate.textContent = "Due Date";
  const priority = document.createElement("p");
  priority.textContent = "Priority";
  const done = document.createElement("p");
  done.textContent = "Done";
  taskProperties.appendChild(dueDate);
  taskProperties.appendChild(priority);
  taskProperties.appendChild(done);
  taskHeader.appendChild(taskProperties);
  taskHeader.appendChild(taskName);
  taskContainer.appendChild(taskHeader);
  listItems.appendChild(addTask);
  listItems.appendChild(taskContainer);
  main.appendChild(listItems);
}
export function displayTasks() {}
