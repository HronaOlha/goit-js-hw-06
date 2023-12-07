# goit-js-hw-06

## Task

### 1.Task 1

Write a script that:
- It will count and output to the console the number of categories in ul#categories, i.e. li.item elements.
- For each li.item element in the ul#categories list, it will find and output to the console the text of the element's title(the h2 tag) and the number of elements in the category (all li nested in it).
  
To perform this task, you need to use the forEach() method and DOM navigation properties.
As a result, the following messages will be displayed in the console:
```
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
```

### 2.Task 2

HTML contains an empty list of ul#ingredients. JavaScript contains an array of strings.

Write a script that for each element of the ingredients array:

- Creates a separate <li> element. Be sure to use the document.createElement() method.
- Will add the name of the ingredient as its text content.
- Will add the item class to the element.
- After that, it will insert all <li> in one operation into the ul#ingredients list.

### 3.Task 3

Write a script to create an image gallery based on an array of data. The HTML contains a list of ul.gallery. Use an array of images objects to create <img> elements nested within <li>. To create markup, use template lines and the insertAdjacentHTML() method.

- All gallery elements must be added to the DOM in a single add operation.
- Add minimal design of the gallery with flexboxes or grids through CSS classes.

### 4.Task 4

The counter consists of a span and buttons, which should increase and decrease its value by one when clicked

- Create a counterValue variable that will store the current value of the counter and initialize it with the value 0.
- Add click listeners to the buttons, inside which increase or decrease the value of the counter.
- Update the interface with the new value of the counterValue variable.

### 5.Task 5

Write a script that, when typing text in the input input#name-input (input event), substitutes its current value in span#name-output. If the input is empty, the sleep should display the string "Anonymous".

### 6.Task 6

Write a script that, when the input loses focus (blur event), checks its content for the correct number of input characters.

### 7. Task 7

Write a script that responds to a change in the value of input#font-size-control (input event) and changes the inline style of span#text by updating the font-size property. As a result, dragging the slider will change the size of the text.

### 8. Task 8

Write a script for managing the login form.

- Processing of form submission form.login-form should occur according to the submit event.
- The page should not reload when submitting the form.
- If there are blank fields in the form, display an alert with a warning that all fields must be filled.
- If the user filled in all the fields and sent the form, collect the values of the fields into an object, where the name of the field will be the name of the property, and the value of the field will be the value of the property. To access form elements, use the elements property.
- Display the object with the entered data in the console and clear the values of the form fields using the reset method.

### 9. Task 9

Write a script that changes the background colors of the <body> element through inline styling when button.change-color is clicked and displays the color value in span.color.

To generate a random color, use the getRandomHexColor function.
```javascript
function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
     .toString(16)
     .padStart(6, 0)}`;
}
```
