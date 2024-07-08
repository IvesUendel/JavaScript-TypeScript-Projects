import generatePassword from "./generators";

const passwordGenerate = document.querySelector(".password-generate");
const qtdCaracters = document.querySelector(".qtd-caracters");
const chkUppercase = document.querySelector(".chk-uppercase");
const chkLowercase = document.querySelector(".chk-lowercase");
const chkNumbers = document.querySelector(".chk-numbers");
const chkSymbols = document.querySelector(".chk-symbols");
const buttonGeneratePassword = document.querySelector(".generate-password");

export default () => {
  buttonGeneratePassword.addEventListener("click", () => {
    passwordGenerate.innerHTML = generator();
  });
};

function generator() {
  const password = generatePassword(
    qtdCaracters.value,
    chkUppercase.checked,
    chkLowercase.checked,
    chkNumbers.checked,
    chkSymbols.checked
  );

  return password || "No options selected";
}
