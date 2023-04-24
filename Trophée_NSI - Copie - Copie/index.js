const cartes = document.querySelectorAll('.carteMemory');
let aRetourne = false;
let verrouiller = false;
let premiereCarte, deuxiemeCarte;

function retournerCarte() {
  if (verrouiller) return;
  if (this === premiereCarte) return;

  this.classList.add('flip');

  if (!aRetourne) {
    aRetourne = true;
    premiereCarte = this;

    return;
  }

  deuxiemeCarte = this;
  verifierPaire();
}

function verifierPaire() {
  let estPaire = premiereCarte.dataset.framework === deuxiemeCarte.dataset.framework;

  estPaire ? desactiverCartes() : masquerCartes();
}

function desactiverCartes() {
  premiereCarte.removeEventListener('click', retournerCarte);
  deuxiemeCarte.removeEventListener('click', retournerCarte);

  reinitialiserPlateau();
}

function masquerCartes() {
  verrouiller = true;

  setTimeout(() => {
    premiereCarte.classList.remove('flip');
    deuxiemeCarte.classList.remove('flip');

    reinitialiserPlateau();
  }, 1500);
}

function reinitialiserPlateau() {
  [aRetourne, verrouiller] = [false, false];
  [premiereCarte, deuxiemeCarte] = [null, null];
}

(function melangerCartes() {
  cartes.forEach(carte => {
    let positionAleatoire = Math.floor(Math.random() * 12);
    carte.style.order = positionAleatoire;
  });
})();

cartes.forEach(carte => carte.addEventListener('click', retournerCarte));

/* let timer = document.getElementById("timer");
let intervalId;

let minutes = 0;
let seconds = 0;

function startTimer() {
  intervalId = setInterval(function() {
    seconds++;
    if (seconds >= 60) {
      minutes++;
      seconds = 0;
    }
    let formattedTime = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    timer.textContent = formattedTime;
    if (minutes >= 2) {
      clearInterval(intervalId);
      alert("Le temps est écoulé !");
      // Ajoute ici ton code pour gérer la fin du jeu
    }
  }, 1000);
}

startTimer();
 */