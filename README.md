# goit-js-hw-06

## Task

1.Task 1
The HTML contains a list of categories ul#categories

Write a script that:
- It will count and output to the console the number of categories in ul#categories, i.e. li.item elements.
- For each li.item element in the ul#categories list, it will find and output to the console the text of the element's title (the <h2> tag) and the number of elements in the category (all <li>'s nested in it).
  
To perform this task, you need to use the forEach() method and DOM navigation properties.

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

Creates a separate <li> element. Be sure to use the document.createElement() method.
Will add the name of the ingredient as its text content.
Will add the item class to the element.
After that, it will insert all <li> in one operation into the ul#ingredients list.
