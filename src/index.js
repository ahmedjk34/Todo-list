export { chosenIcon, chosenName } from "./addingMenuItems";
export { newMenuItem } from "./menuItems";
export { storeMenuItem } from "./localStorage";
import { displayListHeader, displayListItems } from "./listItems";
//On reload , load the menu items
const sideBar = document.querySelector(".sideBar");
const spacer = document.querySelector(".spacer");
for (let i = 0; i < localStorage.length; i++) {
  //checked whether the key is for a sideUnit
  if (localStorage.key(i).includes(" ")) {
    const Item = document.createElement("button");
    const ItemText = document.createElement("span");
    const ItemIcon = document.createElement("i");
    Item.classList.add("menuButton");
    Item.id = "menuItem";
    ItemIcon.className = localStorage.getItem(localStorage.key(i));
    ItemText.innerHTML = `${localStorage.key(i)}`;
    Item.appendChild(ItemIcon);
    Item.appendChild(ItemText);
    sideBar.insertBefore(Item, spacer);
    Item.addEventListener("click", (e) => {
      const main = document.querySelector("main");
      if (main.firstElementChild) main.removeChild(main.firstElementChild);
      if (main.lastElementChild) main.removeChild(main.firstElementChild);
      displayListHeader(localStorage.key(i));
      displayListItems();
    });
  }
}
