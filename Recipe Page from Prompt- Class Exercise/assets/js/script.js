/*
BONUS HOMEWORK
Create a recipe page from inputs

Ask the user for the name of the recipe
Ask the user how many ingredients do we need for the recipe
Ask the user for the name of every ingredient
Print the name of the recipe in the HTML as header
Print all ingredients as an unordered list in the HTML
Extra: Use a table if you want to be fancy :) */

let recipeName = prompt('Enter recipe name');
let h1 = document.createElement('h1');
h1.textContent = recipeName;
document.body.appendChild(h1);




let numberOfIngrdients = +prompt('Add number of ingridients');
for(let i = 0; i < numberOfIngrdients; i++) {
  let nameOfIngridient = prompt(`Add ingridient number ${i + 1}`);
  let ul = document.createElement('ul');
  document.body.appendChild(ul);
  let li = document.createElement('li');
  li.textContent = `${nameOfIngridient}`;
  
  ul.appendChild(li);
}








