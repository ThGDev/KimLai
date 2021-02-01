// Affichage du mdp lorsque l'on coche la checkbox

const password = document.querySelector('#password');
const checkbox = document.querySelector('#toggle-password-visibility');

const affichPwd = () => {
  if(checkbox.checked == true){ // si la checkbox est cochée
    password.type = 'text';     // je change le type de l'input en "text"
  }
  else{
    password.type = 'password'; // sinon, je le rechange en "password"
  }
}
checkbox.addEventListener('click', affichPwd);  // quand je coche la checkbox, j'active la fonction concernée.

document.querySelector("form").addEventListener("submit", () => {
  // avant d'envoyer les données au serveur, on peut faire une étape de validation

  // on n'envoie pas vraiment les données pour l'exercice
  document.querySelector("main").innerHTML = "Vous êtes connecté :)";
});
