const alreadyRegisteredUsernames = ["kim", "emmanuel", "nicolas"];
const colorPicker = document.querySelector("#color-picker");
const userName = document.querySelector("#username");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const divErrMsg = document.querySelector("#error-message");

function bgColorChange() {
  document.body.style.backgroundColor = colorPicker.value;
}
colorPicker.addEventListener("change", bgColorChange);

// fonction vérif passwords identiques
let errMsgPwd;
const samePasswords = () => {
  if(password.value != confirmPassword.value){
    //errMsgPwd = `<p class="error-message">Les 2 mots de passe doivent être identiques</p>`;
    errMsgPwd = console.log("pb password");
  }
}

// fonction vérif username
let errMsgLogin;
const verifLogin = () => {
  alreadyRegisteredUsernames.forEach((user) => {
    if(userName.value == user){
      //errMsgLogin = `<p class="error-message">Ce nom d'utilisateur est déjà pris, choisissez-en un nouveau</p>`;
      errMsgLogin = console.log("pb login");
    }
  })
}

document.querySelector("form").addEventListener("submit", (event) => {
  // avant d'envoyer les données au serveur, on peut faire une étape de validation

  samePasswords;
  verifLogin;
  divErrMsg.innerHTML = `${errMsgLogin}${errMsgPwd}`; // j'écris dans la balise div de message le résultat

  event.preventDefault();
  // on n'envoie pas vraiment les données pour l'exercice
  //document.querySelector("main").innerHTML = "Compte créé :)";
});
