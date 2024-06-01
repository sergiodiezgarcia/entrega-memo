let haclickado1 = false;

let haclickado2 = false;

document.getElementById("carta1")?.addEventListener("click", function () {
  haclickado1 = true;
  this.classList.toggle("volteada");
  let imagen = document.getElementById("imgcarta1");
  if (imagen instanceof HTMLImageElement) {
    imagen.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png";
  }

  verificarCartas();
});

document.getElementById("carta2")?.addEventListener("click", function () {
  haclickado2 = true;
  this.classList.toggle("volteada");
  let imagen = document.getElementById("imgcarta2");
  if (imagen instanceof HTMLImageElement) {
    imagen.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png";
  }

  verificarCartas();
});

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
