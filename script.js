const dino = document.querySelector(".dino");
const cacto = document.querySelector(".cacto");
const score = document.querySelector(".score");
let alreadyJump = false;
let count = 0;

document.addEventListener("keydown", (e) => {
  if ((e.code === "ArrowUp") | (e.code === "Space")) {
    jump();
  }
});

function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");
    alreadyJump = true;

    setTimeout(() => {
      dino.classList.remove("jump");
      alreadyJump = false;
    }, 1100);
  }
}

setInterval(() => {
  let dinoBottom = parseInt(
    window.getComputedStyle(dino).getPropertyValue("bottom")
  );
  let cactoLeft = parseInt(
    window.getComputedStyle(cacto).getPropertyValue("left")
  );

  if (cactoLeft > 40 && cactoLeft < 155 && dinoBottom <= 50 && !alreadyJump) {
    alert(`Você Foi Condenado Pelo Ronald, Caso encerrado: ${count}`);
    count = 0;
  }

  count++;
  score.innerHTML = `Tempo de Fuga: ${count}`; 
}, 10);
