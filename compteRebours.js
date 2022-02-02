
let interID;
let compteur = 10;

function init(){
    if(!interID){
        interID = setInterval(decrementer, 1000);
    }
}

function decrementer(){
    //var ocompteur=document.getElementById("compteur");
    //var valcompteur=ocompteur.innerHTML;

    if(compteur==0){
        document.getElementById("compteur").innerHTML = "0 - compte à rebours terminé !";
        clearInterval(interID);
        interID = null;
    } else {
        document.getElementById("compteur").innerHTML = compteur;
        compteur -= 1;
    }
}

window.onload = init();