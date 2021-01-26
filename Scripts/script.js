const ball = document.querySelector(".ball");
const divStyler = popmotion.styler(ball);
const ballXY = popmotion.value({ x: 0, y: 0 }, divStyler.set);

popmotion.listen(ball, "mousedown touchstart").start((e) => {
  e.preventDefault();
  popmotion.pointer(ballXY.get()).start(ballXY);
});

popmotion.listen(document, "mouseup").start(() => {
  popmotion
    .spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200,
    })
    .start(ballXY);
});

const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const btn = document.querySelector(".btn");
const imgHere = document.querySelector(".img-here");

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
