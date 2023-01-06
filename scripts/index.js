

//Variables y selectores
const j1Nombre= "Nosotros";
const j2Nombre= "Ellos";
const modal= document.querySelector("dialog");

//Intanciamiento de contadores
const j1 = new Contador(
  j1Nombre,
  document.getElementById("jugador1Container"),
);
const j2 = new Contador(
    j2Nombre,
    document.getElementById("jugador2Container"),
);

//Funciones del reset y modal
document.querySelector("#reset").addEventListener("click", ()=> modal.showModal())
document.querySelector("#Volver").addEventListener("click", ()=> modal.close())
document.querySelector("#Confirmar").addEventListener("click", ()=> {
    j1.reset();
    j2.reset();
    modal.close()
})

