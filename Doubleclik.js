//The DOMContentLoaded event occurs when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. In other words, it fires when the DOM (Document Object Model) is ready and can be safely manipulated with JavaScript.
document.addEventListener("DOMContentLoaded", function () {
  const paragraph = document.getElementById("editable-paragraph");

  paragraph.addEventListener("dblclick", function () {
    const text = paragraph.textContent;
    //The document.createElement function in JavaScript allows you to create any HTML element dynamically. The type of element you create is determined by the tag name you pass as a parameter to the function.
    const input = document.createElement("input");
    input.type = "text";
    input.value = text;
    input.className = "editable";

    paragraph.style.display = "none";
    //The insertBefore() method in JavaScript is used to insert a new node before a specified existing node as a child of a specified parent node. It takes two parameters: the new node to be inserted and the reference node before which the new node will be inserted. In this case, the new node is the input element, and the reference node is the paragraph element. By calling paragraph.parentNode.insertBefore(input, paragraph), we are inserting the input element before the paragraph element in the DOM tree, effectively placing it in the same position as the original paragraph.
    paragraph.parentNode.insertBefore(input, paragraph);
    input.focus();

    //The blur event occurs when an element loses focus, typically as a result of the user interacting with another part of the web page, such as clicking outside the current element or tabbing to another element.
    input.addEventListener("blur", function () {
      paragraph.textContent = input.value;
      //The display property in CSS is used to control the layout and visibility of an element on a web page. When you set the display property to "block", it makes the element behave as a block-level element, which means it will take up the full width available and start on a new line.
      paragraph.style.display = "block";
      //The remove() method in JavaScript is used to remove an element from the DOM (Document Object Model). When you call this method on an element, it will be removed from the document and will no longer be part of the DOM tree.
      input.remove();
    });
  });
});