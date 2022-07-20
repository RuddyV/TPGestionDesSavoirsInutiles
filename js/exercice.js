// créé la fonction  chargementTermine()
function chargementTermine(){
    //créé une nouvelle date au chargement de la page
    document.getElementById("dateInput").valueAsDate = new Date();
    //je fais un focus sur mon input avec l'id "savoirInput"
    document.getElementById("savoirInput").focus();
}

// Vu que je veux lancer la fonction ajouterInput() au clique
// et que je veux faire un if... else dedans, 
// je veux que si tous les input sont saisies, 
// je  fais un traitement sinon j'envoie une alert avec un message.
// Pour faire ca, je créé un fonction toutEstSaisie() avec des parametre 
// qui me permettront de tester si tout est saisie et de renvoyer true ou false
function toutEstSaisie(savoirInput, auteurInput, dateInput) {
    //pour renvoyer true ou false, je peux faire :
    // let boolean;
    // if(savoirInput!="" && auteurInput!="" && dateInput!=""){
    //     boolean = true;
    // } else {
    //     boolean = false;
    // }
    // return boolean;

    //ou je peux faire en une ligne :
    return savoirInput!="" && auteurInput!="" && dateInput!="";
}

// je créé la fonction ajouterInput()
function ajouterInput(){
    // je récupère mes valeurs saisies par l'utilisateur
    let savoirInput = document.getElementById("savoirInput").value;
    let auteurInput = document.getElementById("auteurInput").value;
    let dateInput = document.getElementById("dateInput").valueAsDate;
    // tester dans la console ce que je récupère
    console.log(savoirInput);
    console.log(auteurInput);
    console.log(dateInput);
    
    //je fais mon if...else qui me permet soit d'afficher dans le DOM,
    //ou d'envoyer un message alert("Tous les champs sont obligatoires");
    // donc si ma fonction toutEstSaisie(param1,param2,param3) renvoit true je réupère et j'affiche sinon erreur 
    if(toutEstSaisie(savoirInput, auteurInput, dateInput)){
        //Je récupère le jour, le mois et l'année pour l'affichage et 
        // reconstruire ../../....
        let jour = dateInput.getDate().toString().padStart(2, "0");
        let mois = (dateInput.getMonth()+1).toString().padStart(2, "0");
        let annee = dateInput.getFullYear();
        
        //Je créé un li que je stock et 2 p que je stock
        //Pour le moment je n'ai rien positionné
        let liSavoir = document.createElement("li");
        let pSavoir = document.createElement("p");
        let pInfos = document.createElement("p");

        //Je prends mes valeurs de saisies et j'ajoute le texte dans mes balises p
        // une façon de faire:
        pSavoir.innerText = savoirInput;
        //Une secxonde açon pour créer une autre en ligne : 
        pInfos.innerText = `Par ${auteurInput}, le ${jour}/${mois}/${annee}`;
        
        //j'ajoute du CSS sur pSavoir et pInfos
        pSavoir.className = "savoir";
        pInfos.className = "infos";
        
        //J'appelle ma fonction supprimer
        liSavoir.addEventListener("click", supprimer);

        //maintenant que j'ai tout je positionne mes éléments dans le DOM
        // Je stock la position de mon ol "olListeSavoir"
        let positionnement = document.getElementById("olListeSavoir");
        //Je fais des poupées russes en mettant
        //liSavoir dans positionnnement(mon ol) puis je mets pSavoir
        //dans liSavoir puis je mets à la suite pInfos dans liSavoir
        positionnement.appendChild(liSavoir);
        liSavoir.appendChild(pSavoir);
        liSavoir.appendChild(pInfos);

        //je vide mes input pour le sremettre à zéro
        document.getElementById("savoirInput").value = "";
        document.getElementById("auteurInput").value = "";
        document.getElementById("dateInput").valueAsDate = new Date();
    }
    else {
        alert("Tous les champs sont obligatoires");
    }
    document.getElementById("savoirInput").focus();
}

//je créé la fonction supprimer
//Attention de bien appeler la fonction supprimée au clique au dessus
function supprimer(event){
    let savoir = event.currentTarget.getElementsByTagName("p")[0].innerText;
    if(confirm(`Voulez-vous supprimer le savoir"${savoir}" ?`)){
        event.currentTarget.parentNode.removeChild(event.currentTarget);
    }
}