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
