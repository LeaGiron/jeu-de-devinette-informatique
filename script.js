//Tableau de mots
let mots = [
  { mot: "javascript", indice: "Langage utilisé pour rendre une page web interactive" },
  { mot: "html", indice: "Langage qui structure une page web" },
  { mot: "css", indice: "Langage pour styliser une page web" },
  { mot: "bug", indice: "Nom donné à une erreur dans un programme" },
  { mot: "serveur", indice: "Ordinateur qui héberge des données et répond aux requêtes" },
  { mot: "api", indice: "Interface qui permet à deux applications de communiquer entre elles" },
  { mot: "frontend", indice: "Partie d'une application visible par l'utilisateur" },
  { mot: "backend", indice: "Partie cachée d'une application, côté serveur" },
  { mot: "database", indice: "Endroit où sont stockées les données" },
  { mot: "sql", indice: "Langage pour interagir avec une base de données" },
  { mot: "git", indice: "Système de versioning utilisé pour suivre les modifications du code" },
  { mot: "commit", indice: "Action d’enregistrer des changements dans Git" },
  { mot: "terminal", indice: "Interface en ligne de commande pour interagir avec ton système" },
  { mot: "cloud", indice: "Espace de stockage ou d’exécution distant via Internet" },
  { mot: "debug", indice: "Action de corriger les erreurs dans un programme" },
  { mot: "variable", indice: "Élément utilisé pour stocker une valeur" },
  { mot: "loop", indice: "Structure qui répète un bloc de code plusieurs fois" },
  { mot: "array", indice: "Structure de données permettant de stocker plusieurs valeurs" },
  { mot: "object", indice: "Structure clé-valeur très utilisée en JavaScript" }
];

// Choisir un mot au hasard
let motAleatoire = Math.floor(Math.random() * mots.length);
let index = mots[motAleatoire];

// Attendre que le DOM soit chargé avant d'insérer l'indice
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("indice").innerText = "Indice : " + index.indice;
});

// Afficher l'indice dans la page
document.getElementById("indice").innerText = index.indice;

// Comparer la saisie de l'utilisateur avec le bon mot
function valider() {
let saisie = document.getElementById("champSaisi").value.trim().toLowerCase();
if (saisie === index.mot) {
    alert("✅ Bravo !")
} else {
    alert("❌ Mauvais mot, essaye encore")
}
}
