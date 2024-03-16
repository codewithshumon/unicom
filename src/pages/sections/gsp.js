console.clear();
gsap.registerPlugin(Draggable, Flip);

let wheel = document.querySelector(".wheel"),
  images = gsap.utils.toArray(".wheel__card"),
  cards = gsap.utils.toArray(".wheel__card"),
  header = document.querySelector(".header"),
  slice = 360 / images.length,
  curRotation = 0,
  currentCard; // keep track of last clicked card so we can put it back

function setup() {
  let radius = wheel.offsetWidth / 2,
    center = radius,
    DEG2RAD = Math.PI / 180;
  gsap.set(images, {
    x: (i) => center + radius * Math.sin(i * slice * DEG2RAD),
    y: (i) => center - radius * Math.cos(i * slice * DEG2RAD),
    rotation: (i) => i * slice,
    xPercent: -50,
    yPercent: -50,
  });
}

setup();

window.addEventListener("resize", setup);
const d = Draggable.create(wheel, {
  allowContextMenu: true,
  type: "rotation",
  trigger: wheel,
  inertia: true,
  zIndexBoost: false,
  onDrag: () => (isRotating = true),
  onThrowComplete: () => (isRotating = false),
  snap: {
    rotation: gsap.utils.snap(360 / images.length),
  },
})[0];

cards.forEach((card) => card.addEventListener("click", onClickCard));

header.addEventListener("click", closeCurrentCard);

function closeCurrentCard() {
  if (currentCard) {
    let img = header.querySelector("img"),
      state = Flip.getState(img);
    currentCard.appendChild(img);
    Flip.from(state, {
      ease: "power1.inOut",
      scale: true,
    });
    currentCard = null;
  }
}

function onClickCard(e) {
  let card = e.target,
    image = card.querySelector("img");
  if (card !== currentCard) {
    closeCurrentCard();
    currentCard = card;
    let state = Flip.getState(image);
    header.appendChild(image);
    Flip.from(state, {
      duration: 0.6,
      scale: true,
      ease: "power1.inOut",
    });
  } else {
    closeCurrentCard();
  }
}

const rotationBtnComplete = () => {
  d.update();
};

const prevBtn = document.getElementById("prev");
prevBtn.addEventListener("click", () => {
  curRotation += slice;
  gsap.to(wheel, {
    duration: 0.25,
    ease: "power1.inOut",
    rotation: curRotation,
    overwrite: "auto",
    onComplete: rotationBtnComplete,
  });
});

const nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", () => {
  curRotation -= slice;
  gsap.to(wheel, {
    duration: 0.25,
    ease: "power1.inOut",
    rotation: curRotation,
    overwrite: "auto",
    onComplete: rotationBtnComplete,
  });
});
