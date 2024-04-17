// create element
const h1Element = document.createElement("h1");

// add some text
h1Element.innerText = "this is my new h1";

// append it to the body
document.body.appendChild(h1Element);

console.log(h1Element);

// What about multiple elements???

// we create un ul
const ulElement = document.createElement("ul");

// we have an array of names we want to display
const names = [
  "John",
  "Emma",
  "Michael",
  "Sophia",
  "William",
  "Olivia",
  "James",
  "Ava",
  "Benjamin",
  "Isabella",
];

// we create a loop for each name
for (let i = 0; i < names.length; i++) {
  // it's creating one li every iteration of the loop
  const liElement = document.createElement("li");
  // adding the name of the person
  liElement.innerText = names[i];
  // and appending it inside the ul
  ulElement.appendChild(liElement);
}

// we can do this as many times as we want
for (let i = 0; i < 100; i++) {
  const liElement = document.createElement("li");

  liElement.innerText = i + "element";

  ulElement.appendChild(liElement);
}

// don't forget to append the ul!
document.body.appendChild(ulElement);

// example of deleting html elements
const buttonElement = document.querySelector("button");

buttonElement.addEventListener("click", () => {
  const liElements = document.querySelectorAll("li");
  liElements[0].remove(); // as simple as that!
});

const inputElement = document.querySelector("input");

inputElement.addEventListener("keydown", () => {
  // we can also track keys
  // console.log(inputElement.value);
});

const buttonAddElement = document.querySelector("#add-to-list");

buttonAddElement.addEventListener("click", () => {
  console.log(inputElement.value);
  const liElement = document.createElement("li");

  liElement.innerText = inputElement.value;
  ulElement.prepend(liElement); // add it at the beggining
});
