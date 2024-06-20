function sconder(event){
//empécher le formulaire de ce soumettre
event.preventDefault();

//recuperer les identifiants de chaque champs

    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var pwd = document.getElementById("pwd").value;
    var confirm = document.getElementById("confirm").value;
 // traitement des données recuperer
    if(pwd===confirm) {
        window.location.href="accueil.html";
    }
    else{
    document.getElementById('erreur').innerHTML = "les mots de passes ne corespondent pas"
 }
 
}
