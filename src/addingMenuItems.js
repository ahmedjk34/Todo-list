import { newMenuItem } from "./menuItems";

//creating the popup
const popupButton = document.getElementById("menuItemAdder");
const transparent = document.querySelector(".transparent");
const popup = document.querySelector(".popup");
popupButton.addEventListener("click", () => {
  transparent.setAttribute("style", "  display: block;");
  popup.setAttribute("style", "  display: flex; ");
});
//Icon selector functionality
const icon = document.querySelectorAll(".iconHolder");
let chosenIcon,
  chosenName = "";
icon.forEach((value) => {
  value.addEventListener("click", () => {
    //Removes the previously checked element
    icon.forEach((value) => {
      value.classList.remove("checked");
    });
    value.classList.add("checked");
  });
});
//This function gets the right icon
const addButton = document.getElementById("addButton");
const nameInput = document.getElementById("name");
addButton.addEventListener("click", () => {
  icon.forEach((value) => {
    if (value.classList.contains("checked")) {
      value.classList.remove("checked");
      chosenIcon = value.firstElementChild.className;
    }
  });
  chosenName = nameInput.value;
  //hide the popup & transparent
  transparent.setAttribute("style", "  display: none;");
  popup.setAttribute("style", "  display: none; ");
  newMenuItem();
});

export { chosenIcon, chosenName };
