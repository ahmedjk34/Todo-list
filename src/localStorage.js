import { chosenIcon, chosenName } from "./index";
//////
export function storeMenuItem() {
  const menuItems = document.querySelectorAll("#menuItem");
  menuItems.forEach((value) => {
    localStorage.setItem(
      value.lastElementChild.textContent,
      value.firstElementChild.className
    );
  });
}
export function storeTask(value) {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((value) => {
    localStorage.setItem(value.firstElementChild.textContent, "");
  });
}
