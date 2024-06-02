interface InfoCarta {
  idFoto: number;
  imagen: string;
}

const arrayCartas: InfoCarta[] = [
  {
    idFoto: 1,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
  },
  {
    idFoto: 2,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
  },
  {
    idFoto: 3,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
  },
  {
    idFoto: 4,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png",
  },
  {
    idFoto: 5,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png",
  },
  {
    idFoto: 6,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png",
  },
  {
    idFoto: 1,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
  },
  {
    idFoto: 2,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
  },
  {
    idFoto: 3,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
  },
  {
    idFoto: 4,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.png",
  },
  {
    idFoto: 5,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.png",
  },
  {
    idFoto: 6,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png",
  },
];

// Aqui tíenes que recorrer el array con un bucles
// Y pintar un div con la carta con cada entrada del array
// en ese div en el campo id pones el indice del array

// Hace un getelementById del div con id "tablero"
const tablero = document.getElementById("tablero");

if (tablero !== null) {
  arrayCartas.map((carta, indice) => {
    const divCarta = document.createElement("div");
    divCarta.id = indice.toString();

    divCarta.addEventListener("click", (evento) => {
      const miDiv = evento.currentTarget as HTMLDivElement;
      console.log(`**** Carta clickada: ${miDiv.id}`);
    });

    const imgCarta = document.createElement("img");
    imgCarta.src = carta.imagen;

    divCarta.appendChild(imgCarta);
    tablero.appendChild(divCarta);
  });
}

/*
    // Creas un DIV 
    // ese div va a tener el div el img...
    // el div principal va a tener el id=indice <-- el indice del array
    // lo añades DOM, appenChild en el div de tablero
*/
