const grande = document.querySelector(".grande");
const punto = document.querySelectorAll(".punto"); // Utiliza querySelectorAll para obtener una NodeList

punto.forEach((cadaPunto, i) => {
  punto[i].addEventListener("click", () => {
    let pos = i;
    let op = pos * -25;

    grande.style.transform = `translateX(${op}%)`; // Corregir la sintaxis aquí

    punto.forEach((cadaPunto, i) => {
      punto[i].classList.remove("activo");
    });
    punto[i].classList.add("activo");
  });
});
