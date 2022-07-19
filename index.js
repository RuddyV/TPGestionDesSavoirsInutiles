

function add_ol() {
    let inputSavoir = document.getElementById("savoir").value;
    let inputAuteur = document.getElementById("auteur").value;
    let inputDate = document.getElementById("date").valueAsDate;
    let newDiv = document.createElement("div");
    let list = document.getElementById('list');
    let divDuSavoir = document.createTextNode(inputSavoir + inputAuteur + inputDate)
    newDiv.appendChild(divDuSavoir);
    list.innerHTML = list.innerHTML+"<li>"+inputSavoir+inputAuteur+inputDate+"</li>"
    let newOl = document.createElement("ol")

    newOl.innerHTML="<li></li>"
}