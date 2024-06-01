let haclickado1 = false;
let haclickado2 = false;

document.getElementById("carta1")?.addEventListener("click", function () {
  haclickado1 = !haclickado1;
  this.classList.toggle("volteada");
  muestraCarta("imgcarta1");
  verificarCartas();
});

document.getElementById("carta2")?.addEventListener("click", function () {
  haclickado2 = !haclickado2;
  this.classList.toggle("volteada");
  muestraCarta("imgcarta2");
  verificarCartas();
});

const muestraCarta = (id: string) => {
  let imagen = document.getElementById(id);
  if (imagen instanceof HTMLImageElement) {
    imagen.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png";
  }
};

function verificarCartas() {
  if (haclickado1 && haclickado2) {
    setTimeout(() => {
      document.getElementById("carta1")?.classList.remove("volteada");
      document.getElementById("carta2")?.classList.remove("volteada");

      haclickado1 = false;
      haclickado2 = false;
    }, 1000);
  }
}
