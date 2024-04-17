console.log("JS FILE WORKING");

const firstButtonElement = document.querySelectorAll("button")[0];
const secondButtonElement = document.querySelectorAll("button")[1];

console.log(secondButtonElement);

// we change the class of the button when we click by removing and adding classes
/*
firstButtonElement.addEventListener("click", () => {
  console.log("The button has been clicked");

  if (firstButtonElement.classList.contains("orange")) {
    firstButtonElement.classList.remove("orange");
    firstButtonElement.classList.add("green");
  } else {
    firstButtonElement.classList.remove("green");
    firstButtonElement.classList.add("orange");
  }

});
*/
firstButtonElement.addEventListener("click", () => {
  firstButtonElement.classList.toggle("orange");
});

const imageElement = document.querySelector(".image");

secondButtonElement.addEventListener("click", () => {
  console.log(imageElement.getAttribute("src"));
  imageElement.setAttribute(
    "src",
    "https://pbs.twimg.com/media/CqnkckhWAAEElDV.jpg"
  );
});

/* EXAMPLE OF RANDOM IMAGES
const images = [
  "https://example.com/image1.jpg",
  "https://example.com/image2.jpg",
  "https://example.com/image3.jpg",
];


imageElement.setAttribute("src", images[Math.floor(Math.random()*images.length)])

*/
