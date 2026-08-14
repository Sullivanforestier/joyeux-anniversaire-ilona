/* ==================================================
   ILONA — 27 ANS, DIVA
   Main JavaScript
   ================================================== */


/* ---------- BIRTHDAY ANIMATION ---------- */

const letters = document.querySelectorAll(".birthday span");

letters.forEach((letter, index) => {

  setTimeout(() => {
    letter.classList.add("visible");
  }, 500 + index * 55);

});


/* ---------- ENTER BUTTON ---------- */

const enterButton = document.getElementById("enterButton");
const home = document.querySelector(".home");

enterButton.addEventListener("click", () => {

  home.classList.add("exit");

  /*
    Pour le moment, le bouton ne mène nulle part.
    Quand nous créerons la deuxième page,
    on remplacera simplement cette partie par :

    window.location.href = "archives.html";
  */

});
