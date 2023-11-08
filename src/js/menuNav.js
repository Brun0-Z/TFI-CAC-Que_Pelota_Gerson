const nav = document.querySelector("#navbar");
const abrir = document.querySelector("#btn-abrir-menu");
const cerrar = document.querySelector("#btn-cerrar-menu");

abrir.addEventListener("click", ()=>{
  nav.classList.add("visible");
});

cerrar.addEventListener("click",() =>{
  nav.classList.remove("visible");
})