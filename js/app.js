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
  const rgb = id("rbg-input");
  const copyRgbColor = id("rgb-copy-btn");
  const hexInput = id("hex-input");
  // const hexColorConverter = id("hex-color-converter");

  // copy rgb color on copy button click
  const copyColor = async () => {
    const color = rgb.placeholder;
    try {
      await navigator.clipboard.writeText(color);
      copyRgbColor.innerText = "Copied!";
      setTimeout(() => {
        copyRgbColor.innerText = "Copy";
      }, 3000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  copyRgbColor.onclick = copyColor;

  const displayHexColor = ({ red, green, blue }) => {
    const hexRed = Number(red).toString(16).padStart(2, 0).toUpperCase();
    const hexGreen = Number(green).toString(16).padStart(2, 0).toUpperCase();
    const hexBlue = Number(blue).toString(16).padStart(2, 0).toUpperCase();

    const hexColor = `#${hexRed}${hexGreen}${hexBlue}`;
    hexInput.placeholder = hexColor;
  };

  const displayRgbColor = () => {
    const rgbaColor = display.style.backgroundColor;
    rgb.placeholder = rgbaColor;
  };

  redInput.addEventListener("change", function () {
    const red = this.value;
    const green = getInputValue("green");
    const blue = getInputValue("blue");
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    display.style.backgroundColor = rgbColor;
    displayRgbColor();
    displayHexColor({ red, green, blue });
  });

  greenInput.addEventListener("change", function () {
    const red = getInputValue("red");
    const green = this.value;
    const blue = getInputValue("blue");
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    display.style.backgroundColor = rgbColor;
    displayRgbColor();
    displayHexColor({ red, green, blue });
  });

  blueInput.addEventListener("click", function () {
    const red = getInputValue("red");
    const green = getInputValue("green");
    const blue = this.value;
    const rgbColor = `rgb(${red}, ${green},${blue})`;
    display.style.backgroundColor = rgbColor;
    displayRgbColor();
    displayHexColor({ red, green, blue });
  });
}
