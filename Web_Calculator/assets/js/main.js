function Calculator() {
  this.display = document.querySelector(".display");

  this.startCalculator = () => {
    this.clickCapture();
    this.enterCapture();
  };

  this.enterCapture = () => {
    this.display.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.makeAccount();
      }
    });
  };

  this.clickCapture = () => {
    document.addEventListener("click", (event) => {
      const el = event.target;
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.clear();
      if (el.classList.contains("btn-del")) this.del();
      if (el.classList.contains("btn-eq")) this.makeAccount();
    });
  };

  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };

  this.clear = () => {
    this.display.value = "";
    this.display.focus();
  };

  this.del = () => (this.display.value = this.display.value.slice(0, -1));

  this.makeAccount = () => {
    try {
      const account = eval(this.display.value);

      if (!account) {
        alert("Invalid Account!");
        return;
      } else {
        this.display.value = account;
      }
    } catch (error) {
      alert("Invalid Account!");
      return;
    }
  };
}

const calculator = new Calculator();
calculator.startCalculator();
