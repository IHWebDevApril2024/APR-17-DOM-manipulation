console.log("02 script is running 🏃‍♂️");

const bodyHtml = document.body.innerHTML; // now my variable contains a string with all the html elements inside the body
console.log(bodyHtml);

// Remember how to change values for properties in objects??
const student = {
  name: "Kilikolo",
  bootcamp: "Web Dev",
};
console.log(student);

student.bootcamp = "Data";

console.log(student);
/*
// Can we do the same with the innerHTML??
const student1 = "Carlitos";
const student2 = "Maxim";

document.body.innerHTML = `
 <h1>Hello</h1>
 <p> this is my paragraph </p>
 <div>
    <ul>
        <li>${student1}</li>
        <li>${student2}</li>
    </ul>
</div>
 `; // yes

document.body.innerHTML = "<h1>Hello</h1>";
*/

const newsElement = document.getElementById("latest-news");

newsElement.innerText += " And this is the rest of the paragraph";

document.querySelector("h1").innerText = " This is the new title"; // this is selecting the first coincidence

document.querySelector(".second-element").innerText = "Pablo";

document.querySelector("#third-element").innerText = "Alberto";

const paragraphElements = document.querySelectorAll(".paragraph"); // I'm storing an array like thing with all the paragraphs with this class (NodeList)

paragraphElements[0].innerText = "Whaaaat?";

paragraphElements.forEach((element) => {
  // With the nodeList we can use array methods
  element.innerText = "Whawhawhaaaaat?";
  element.style.backgroundColor = "red";
});

paragraphElements[0].classList.add("super-height");

console.log(paragraphElements[0].parentNode);

document.querySelector("#third-element").parentElement.style.backgroundColor =
  "blue"; // yeah, we can go crazy

// If we store elements in variables we're able to modify them later in a quicker way and several times.
const latestNewsElement = document.querySelector("#latest-news");

console.log(latestNewsElement.getAttribute("id"));

console.log(paragraphElements[0].getAttribute("class")); // we need the argument


const circleElement = document.querySelector('.circle');

console.log(circleElement.clientWidth);
