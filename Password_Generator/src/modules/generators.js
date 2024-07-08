const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generateUppercaseLetter = () => String.fromCharCode(rand(65, 91));
const generateLowercaseLetter = () => String.fromCharCode(rand(97, 123));
const generateNumbers = () => String.fromCharCode(rand(48, 58));
const symbols = "@#%$&!.";
const generateSymbol = () => symbols[rand(0, symbols.length)];

export default function generatePassword(
  qtd,
  uppercaseLetter,
  lowercaseLetter,
  numbers,
  symbols
) {
  const passwordArray = [];
  qtd = Number(qtd);

  for (let i = 0; i < qtd; i++) {
    uppercaseLetter && passwordArray.push(generateUppercaseLetter());
    lowercaseLetter && passwordArray.push(generateLowercaseLetter());
    numbers && passwordArray.push(generateNumbers());
    symbols && passwordArray.push(generateSymbol());
  }

  return passwordArray.join("").slice(0, qtd);
}
