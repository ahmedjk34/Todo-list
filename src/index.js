export { chosenIcon, chosenName } from "./addingMenuItems";
export { newMenuItem } from "./menuItems";
export { storeMenuItem } from "./localStorage";
//On reload , load the menu items
const sideBar = document.querySelector(".sideBar");
const spacer = document.querySelector(".spacer");
for (let i = 0; i < localStorage.length; i++) {
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
}
