let listaDestinacija = document.getElementById("lista-destinacija");
console.log(listaDestinacija);
let title = document.getElementsByClassName("title");
console.log(title);
let elementListe = document.getElementsByTagName("li");
console.log(elementListe);
let wrap = document.querySelector("#wrapper");
console.log(wrap);

let destinacije = document.querySelectorAll(".naziv");
console.log(destinacije);

let destinacija = document.querySelector("#lista-destinacija");
console.log("roditelj mu je: ", destinacija.parentNode);
console.log("deca su mu: ", destinacija.children);

let sibling = document.querySelector("#lista-destinacija");
console.log("next sibling: ",sibling.nextElementSibling);
console.log("previous sibling: ",sibling.previousElementSibling);

let banner = document.querySelector("#page-banner");
console.log("node name is: ",banner.nodeName);
console.log("node type is: ",banner.nodeType);
console.log("node value is: ",banner.nodeValue);

let destinacija1 = document.querySelector(".naziv");
destinacija1.textContent = "Beograd, Srbija";

let dugmici = document.querySelectorAll(".obrisi");
Array.from(dugmici).forEach(function(dugme){
    dugme.addEventListener("click", function(e){
        const li = e.target.parentNode;
        ul = li.parentNode;
        ul.removeChild(li);
    })
});

let forma = document.forms["dodaj-destinaciju"];
forma.addEventListener("submit", function(e){
    e.preventDefault();
    let vrednost = document.forms["dodaj-destinaciju"]["polje"].value;
    console.log(vrednost);
});