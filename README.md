# goit-js-hw-06

## Task

1.Task 1

The HTML contains a list of categories ul#categories

```html
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
```

Write a script that:
- It will count and output to the console the number of categories in ul#categories, i.e. li.item elements.
- For each li.item element in the ul#categories list, it will find and output to the console the text of the element's title (the <h2> tag) and the number of elements in the category (all <li>'s nested in it).
  
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

2.Task 2

HTML contains an empty list of ul#ingredients:
```html
<ul id="ingredients"></ul>
```

JavaScript contains an array of strings:
```javascript
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
```

Write a script that for each element of the ingredients array:

- Creates a separate <li> element. Be sure to use the document.createElement() method.
- Will add the name of the ingredient as its text content.
- Will add the item class to the element.
- After that, it will insert all <li> in one operation into the ul#ingredients list.

3.Task 3

Write a script to create an image gallery based on an array of data. The HTML contains a list of ul.gallery.
```html
<ul class="gallery"></ul>
```

Use an array of images objects to create <img> elements nested within <li>. To create markup, use template lines and the insertAdjacentHTML() method.

- All gallery elements must be added to the DOM in a single add operation.
- Add minimal design of the gallery with flexboxes or grids through CSS classes.
```javascript
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
```

4.Task 4

The counter consists of a span and buttons, which should increase and decrease its value by one when clicked
```html
<div id="counter">
   <button type="button" data-action="decrement">-1</button>
   <span id="value">0</span>
   <button type="button" data-action="increment">+1</button>
</div>
```
- Create a counterValue variable that will store the current value of the counter and initialize it with the value 0.
- Add click listeners to the buttons, inside which increase or decrease the value of the counter.
- Update the interface with the new value of the counterValue variable.

5.Task 5

Write a script that, when typing text in the input input#name-input (input event), substitutes its current value in span#name-output. If the input is empty, the sleep should display the string "Anonymous".
```html
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
```

6.Task 6

Write a script that, when the input loses focus (blur event), checks its content for the correct number of input characters.
```html
<input
   type="text"
   id="validation-input"
   data-length="6"
   placeholder="Please enter 6 symbols"
/>
```
- How many characters should be in the input is specified in its data-length attribute.
- If the correct number of characters is entered, the border of the input becomes green, if the number is incorrect - red.

To add styles, use the CSS classes valid and invalid, which we have already added to the source files of the task.
```javascript
#validation-input {
   border: 3px solid #bdbdbd;
}

#validation-input.valid {
   border-color: #4caf50;
}

#validation-input.invalid {
   border-color: #f44336;
}
```

7. Task 7

Write a script that responds to a change in the value of input#font-size-control (input event) and changes the inline style of span#text by updating the font-size property. As a result, dragging the slider will change the size of the text.
```html
<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
```

8. Task 8

Write a script for managing the login form.
```html
<form class="login-form">
   <label>
     Email
     <input type="email" name="email" />
   </label>
   <label>
     Password
     <input type="password" name="password" />
   </label>
   <button type="submit">Login</button>
</form>
```
- Processing of form submission form.login-form should occur according to the submit event.
- The page should not reload when submitting the form.
- If there are blank fields in the form, display an alert with a warning that all fields must be filled.
- If the user filled in all the fields and sent the form, collect the values of the fields into an object, where the name of the field will be the name of the property, and the value of the field will be the value of the property. To access form elements, use the elements property.
- Display the object with the entered data in the console and clear the values of the form fields using the reset method.

9. Task 9

Write a script that changes the background colors of the <body> element through inline styling when button.change-color is clicked and displays the color value in span.color.
```html
<div class="widget">
   <p>Background color: <span class="color">-</span></p>
   <button type="button" class="change-color">Change color</button>
</div>
```
To generate a random color, use the getRandomHexColor function.
```javascript
function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
     .toString(16)
     .padStart(6, 0)}`;
}
```
