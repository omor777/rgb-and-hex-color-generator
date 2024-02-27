window.onload = () => {
  main();
};

function main() {
  const id = (id) => document.getElementById(id);
  const display = id("display");
  const redInput = id("red");
  const greenInput = id("green");
  const blueInput = id("blue");
  const allInputs = document.getElementsByClassName(`input-range
  input-range
  input-range`);

  redInput.addEventListener("change", function () {
    const red = this.value;
    const green = getInputValue("green");
    const blue = getInputValue("blue");

    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    display.style.backgroundColor = rgbColor;
  });

  greenInput.addEventListener("change", function () {
    const red = getInputValue("red");
    const green = this.value;
    const blue = getInputValue("blue");

    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    display.style.backgroundColor = rgbColor;
  });

  blueInput.addEventListener("click", function () {
    const red = getInputValue("red");
    const green = getInputValue("green");
    const blue = this.value;

    const rgbColor = `rgb(${red}, ${green},${blue})`;
    display.style.backgroundColor = rgbColor;
  });
}

