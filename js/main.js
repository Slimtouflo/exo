/*
CONSIGNE : Chaque bouton provoque une action sur le rectangle : 

Bouton 1 : met le rectangle en vert
Bouton 2 : remet les couleurs initiales
Bouton 3 : fait disparaitre le rectangle
Bouton 4 : fait réaparaitre le rectangle
Bouton 5 : augmente la hauteur de 10px, s'il dépasse 100px, il remet la hauteur à 10px

*/
let rectangle = document.querySelector(".rectangle");
let bouton1 = document.getElementById("bouton1");
let bouton2 = document.getElementById("bouton2");
let bouton3 = document.getElementById("bouton3");
let bouton4 = document.getElementById("bouton4");
let bouton5 = document.getElementById("bouton5");

bouton1.addEventListener("click", () => {
    rectangle.classList.add("bg-green")
});

bouton2.addEventListener("click", () => {
    rectangle.classList.remove("bg-green")
});

