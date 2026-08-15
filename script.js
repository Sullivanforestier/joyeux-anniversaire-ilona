// ==========================================
// ILONA — PAGE D'ACCUEIL
// ==========================================


// ---------- BOUTON ENTRER ----------

const enterButton =
  document.getElementById("enterButton");

const home =
  document.querySelector(".home");


if (enterButton && home) {

  enterButton.addEventListener("click", () => {

    home.classList.add("exit");

    setTimeout(() => {

      window.location.href = "photos.html";

    }, 800);

  });

}


// ==========================================
// CONFETTIS
// ==========================================

const confettiContainer =
  document.getElementById("confetti-container");


const confettiCount = 90;


for (let i = 0; i < confettiCount; i++) {

  const confetti =
    document.createElement("div");

  confetti.classList.add("confetti");


  // Taille aléatoire

  const width =
    Math.random() * 9 + 5;

  const height =
    Math.random() * 5 + 4;


  confetti.style.width =
    `${width}px`;

  confetti.style.height =
    `${height}px`;


  // Position horizontale aléatoire

  confetti.style.left =
    `${Math.random() * 100}vw`;


  // Vitesse de chute aléatoire

  confetti.style.animationDuration =
    `${Math.random() * 4 + 4}s`;


  // Décalage pour que tout ne tombe pas en même temps

  confetti.style.animationDelay =
    `${Math.random() * -8}s`;


  // Opacité légèrement différente

  confetti.style.opacity =
    `${Math.random() * 0.5 + 0.35}`;


  confettiContainer.appendChild(confetti);

}
