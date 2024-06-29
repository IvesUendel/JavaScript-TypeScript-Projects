class FormValidator {
  constructor() {
    this.form = document.querySelector(".form");

    this.events();
  }

  events() {
    this.form.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const validFields = this.isValid();
    const validPasswords = this.isValidPasswords();

    if (validFields && validPasswords) {
      alert("Form sent!");
      this.form.submit();
    }
  }

  isValidPasswords() {
    let valid = true;

    const password = this.form.querySelector(".password");
    const repeatPassword = this.form.querySelector(".repeat-password");

    if (password.value !== repeatPassword.value) {
      valid = false;
      this.createError(
        password,
        "Password and repeat password fields must be identical"
      );
      this.createError(
        repeatPassword,
        "Password and repeat password fields must be identical"
      );
    }

    if (password.value.length < 6 || password.value.length > 12) {
      valid = false;
      this.createError(
        password,
        "Password must be a minimum of 3 and a maximum of 12 characters"
      );
    }

    return valid;
  }

  isValid() {
    let valid = true;

    for (let errorText of this.form.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (let field of this.form.querySelectorAll(".validar")) {
      let label = field.previousElementSibling.innerText;

      if (!field.value) {
        this.createError(field, `The field "${label}" cannot be empty`);
        valid = false;
      }

      if (field.classList.contains("cpf")) {
        if (!this.cpfValidator(field)) valid = false;
      }

      if (field.classList.contains("user")) {
        if (!this.userValidator(field)) valid = false;
      }
    }

    return valid;
  }

  userValidator(field) {
    const user = field.value;
    let valid = true;
    if (user.length < 3 || user.length > 12) {
      this.createError(
        field,
        "User must contain a minimum of 3 and a maximum of 12 characters"
      );
      valid = false;
    }

    if (!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(field, "User must contain only letters and/or numbers");
      valid = false;
    }

    return valid;
  }

  cpfValidator(field) {
    const cpf = new ValidaCPF(field.value);

    if (!cpf.valida()) {
      this.createError(field, "Invalid CPF");
      return false;
    }
    return true;
  }

  createError(field, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    field.insertAdjacentElement("afterend", div);
  }
}

const validator = new FormValidator();
