console.log("HOLA !!");

function shuffle(cards: string[]): string[] {
    // Usamos el algoritmo de Fisher-Yates para barajar el array
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
}

// Ejemplo de uso
const cartas = ['🐺', '🐺', '🐱', '🐱', '🐯', '🐯', '🐮', '🐮'];
const cartasBarajadas = shuffle(cartas);
console.log(cartasBarajadas);
