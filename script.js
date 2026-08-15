// ==========================================
// ILONA — PAGE D'ACCUEIL
// ==========================================


// ---------- ANIMATION DU TEXTE ----------

const letters = document.querySelectorAll(".birthday span");

letters.forEach((letter, index) => {

  setTimeout(() => {
    letter.classList.add("visible");
  }, 500 + index * 55);

});


// ---------- BOUTON ENTRER ----------

const enterButton = document.getElementById("enterButton");
const home = document.querySelector(".home");

enterButton.addEventListener("click", () => {

  home.classList.add("exit");

  setTimeout(() => {
    window.location.href = "photos.html";
  }, 700);

});


// ---------- CONFETTIS ----------

const confettiContainer = document.createElement("div");

confettiContainer.className = "confetti-container";

document.body.appendChild(confettiContainer);


const confettiCharacters = [
  "✦",
  "·",
  "✧",
  "✿",
  "♡",
  "＋"
];


for (let i = 0; i < 35; i++) {

  const confetti = document.createElement("span");

  confetti.className = "confetti";

  confetti.textContent =
    confettiCharacters[
      Math.floor(
        Math.random() * confettiCharacters.length
      )
    ];

  confetti.style.left =
    Math.random() * 100 + "%";

  confetti.style.top =
    Math.random() * 100 + "%";

  confetti.style.animationDelay =
    Math.random() * 2 + "s";

  confetti.style.animationDuration =
    3 + Math.random() * 4 + "s";

  confetti.style.fontSize =
    7 + Math.random() * 9 + "px";

  confettiContainer.appendChild(confetti);

}
