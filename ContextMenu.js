document.addEventListener("DOMContentLoaded", () => {
  const rectangle = document.getElementById("rectangle");
  const circle = document.getElementById("circle");
  const contextMenu = document.getElementById("context-menu");
  const menuOptions = document.getElementById("menu-options");

  let currentShape = null;

  // Helper function to create menu items
  // This function creates a menu item with the specified text and click handler
  const createMenuItem = (text, clickHandler) => {
    const menuItem = document.createElement("li");
    menuItem.textContent = text;
    menuItem.addEventListener("click", clickHandler);
    return menuItem;
  };

  // Function to show the context menu at the position of the right-click event
  // event: The right-click event that triggered the context menu
  // shape: The shape (rectangle or circle) that was right-clicked
  const showContextMenu = (event, shape) => {
    // Prevent the default context menu from appearing
    event.preventDefault();
    currentShape = shape;
    contextMenu.style.top = ${event.pageY}px;
    contextMenu.style.left = ${event.pageX}px;
    contextMenu.style.display = "block";

    // Clear existing menu items
    while (menuOptions.firstChild) {
      menuOptions.removeChild(menuOptions.firstChild);
    }

    // Add menu options based on the shape that was right-clicked
    // If the rectangle was right-clicked, add options for the rectangle and if the circle was right-clicked, add options for the circle and each option will have a click handler that calls the appropriate function to increase size, decrease size, or change color of the shape
    if (shape === rectangle) {
      menuOptions.appendChild(
        createMenuItem("Increase rectangle", () => increaseSize("rectangle")),
      );
      menuOptions.appendChild(
        createMenuItem("Decrease rectangle", () => decreaseSize("rectangle")),
      );
      menuOptions.appendChild(
        createMenuItem("Change color of rectangle", () =>
          changeColor("rectangle"),
        ),
      );
    } else if (shape === circle) {
      menuOptions.appendChild(
        createMenuItem("Increase circle", () => increaseSize("circle")),
      );
      menuOptions.appendChild(
        createMenuItem("Decrease circle", () => decreaseSize("circle")),
      );
      menuOptions.appendChild(
        createMenuItem("Change color of circle", () => changeColor("circle")),
      );
    }
  };

  // Hide the context menu when clicking anywhere else on the document
  document.addEventListener("click", () => {
    contextMenu.style.display = "none";
  });

  // Add event listeners for right-click on the rectangle
  rectangle.addEventListener("contextmenu", (event) =>
    showContextMenu(event, rectangle),
  );

  // Add event listener for right-click on the circle
  circle.addEventListener("contextmenu", (event) =>
    showContextMenu(event, circle),
  );
});

const increaseSize = (shape) => {
  const element = document.getElementById(shape);
  // Calculate the new size by adding 20 pixels to the current width
  let newSize = element.offsetWidth + 20;
  if (newSize <= 500) {
    element.style.width = ${newSize}px;
    element.style.height = ${newSize}px;
  }
};

const decreaseSize = (shape) => {
  const element = document.getElementById(shape);
  let newSize = element.offsetWidth - 20;
  if (newSize >= 50) {
    element.style.width = ${newSize}px;
    element.style.height = ${newSize}px;
  }
};

const changeColor = (shape) => {
  const element = document.getElementById(shape);
  const randomColor = #${Math.floor(Math.random() * 16777215).toString(16)};
  element.style.backgroundColor = randomColor;
};