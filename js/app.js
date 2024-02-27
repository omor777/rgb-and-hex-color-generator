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

  const copyColor = async () => {
    const color = rgb.placeholder;
    console.log(color);
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

  function showRgbColor() {
    const rgbaColor = display.style.backgroundColor;
    rgb.placeholder = rgbaColor;
  }

  redInput.addEventListener("change", function () {
    const red = this.value;
    const green = getInputValue("green");
    const blue = getInputValue("blue");
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    display.style.backgroundColor = rgbColor;
    showRgbColor();
  });

  greenInput.addEventListener("change", function () {
    const red = getInputValue("red");
    const green = this.value;
    const blue = getInputValue("blue");
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    display.style.backgroundColor = rgbColor;
    showRgbColor();
  });

  blueInput.addEventListener("click", function () {
    const red = getInputValue("red");
    const green = getInputValue("green");
    const blue = this.value;
    const rgbColor = `rgb(${red}, ${green},${blue})`;
    display.style.backgroundColor = rgbColor;
    showRgbColor();
  });
}

