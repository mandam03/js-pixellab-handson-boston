const calculateRectangleArea = (width, length) => {
  return width * length;
};

console.warn(`
Calculeaza suprafata de tapet necesara pentru o
camera de 12 pe 9 m cu tavan inalt de 2.5m,
stiind ca exista o usa de 3 pe 2 si o suprafata de
ferestre de 3 pe 2.
“Suprafata de tapet necesara este xxx metri patrati.”
`);

const longWallSurface = calculateRectangleArea(6, 2.5);
const shortWallSurface = calculateRectangleArea(4, 2.5);
const totalWallSurface = (longWallSurface + shortWallSurface) * 2;
const doorSurface = calculateRectangleArea(2.2, 1.55);
const windowSurface = calculateRectangleArea(2, 1.5);

// console.log((totalWallSurface - doorSurface - windowSurface).toString());
const wallpaperSurface = totalWallSurface - doorSurface - windowSurface;
console.log(`Suprafata de tapet este: ${wallpaperSurface} metri patrati.`);

console.warn(`
  Creaza o functie wrapper numita calculateSquareArea() pentru calculateRectangleArea()
  care sa primeasca ca parametru latura unui patrat si sa calculeze suprafata acestuia.
  O functie wrapper este o functie care “imbraca” o functie existenta
  pentru a-i aduce imbunatatiri, extra cod sau pentru a-i limita in mod intentionat capacitatile.
`);
const calculateSquareArea = (width) => {
  const squareArea = calculateRectangleArea(width, width);

  return squareArea;
};
