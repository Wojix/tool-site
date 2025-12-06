function get_calc(btn) {
  const v = btn.value;

  if (v === "=") {
    document.calculator.display.value = eval(document.calculator.display.value || "0");
    return;
  }

  if (v === "AC") {
    document.calculator.display.value = "";
    return;
  }

  if (v === "C") {
    document.calculator.display.value = "";
    return;
  }

  let op = v;
  if (v === "×") op = "*";
  if (v === "÷") op = "/";

  document.calculator.display.value += op;
}
