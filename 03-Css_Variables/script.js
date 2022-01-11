const inputs = document.querySelectorAll(".controls input");
// inputs.forEach((e) => {
//   e.value = 000000;
// });

function handleUpdate() {
  // console.log(this.value);
  // const suffix = this.dataset.sizing || "";
  const suffix = this.type === "range" ? "px" : " ";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("input", handleUpdate));
