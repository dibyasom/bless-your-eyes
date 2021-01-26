const { tween } = "./node_modules/popmotion";
const styler = "./node_modules/stylefire";

const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const btn = document.querySelector(".btn");
const imgHere = document.querySelector(".img-here");
const ballElement = document.querySelector(".ball");
const ball = styler(ballElement);

btn.addEventListener("click", () => {
  fetch(DOG_URL)
    .then((dogImg) => {
      return dogImg.json();
    })
    .then((doggo) => {
      const img = document.createElement("img");
      img.class = "doggo-img";
      img.src = doggo.message;
      img.alt = doggo.status;
      console.log(img);
      imgHere.replaceChild(img, imgHere.childNodes[0]);
    });
});
