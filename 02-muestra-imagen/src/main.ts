

document.getElementById("imagenCarta")?.addEventListener("click", function (e ) {
  console.log("Ha clickado");
  //let imagen = document.getElementById("carta por delante")
  if (e.target instanceof HTMLImageElement ){
    e.target.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png";
  }
});
