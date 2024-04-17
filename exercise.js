const arrayOfImages = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=2",
  "https://i.pravatar.cc/150?img=3",
];

const leftButtonElement = document.querySelectorAll("button")[0];
const rightButtonElement = document.querySelectorAll("button")[1];

const imageElement = document.querySelector("img");

let index = 0;

rightButtonElement.addEventListener("click", () => {
  index++;
  if(index === arrayOfImages.length){ // we can do it this way (Arnaldo's approach)
    index = 0
  }
  imageElement.setAttribute("src", arrayOfImages[index]);
  //   imageElement.setAttribute("src", arrayOfImages[index % arrayOfImages.length]); // other approach not using the if
});

leftButtonElement.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = arrayOfImages.length -1;
  }
  imageElement.setAttribute("src", arrayOfImages[index]); 
});
