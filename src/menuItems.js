import { chosenIcon, chosenName } from "./addingMenuItems";
const sideBar = document.querySelector(".sideBar");
//Making the new item:
export const newMenuItem = function () {
  const newItem = document.createElement("button");
  const newItemText = document.createElement("span");
  const newItemIcon = document.createElement("i");
  newItem.classList.add("menuButton");
  newItemIcon.className = chosenIcon;
  newItemText.innerHTML = ` ${chosenName}`;
  newItem.appendChild(newItemIcon);
  newItem.appendChild(newItemText);
  /*This [spacer] is for separating the last button & the actual menu buttons*/
  const spacer = document.querySelector(".spacer");
  sideBar.insertBefore(newItem, spacer);
};
