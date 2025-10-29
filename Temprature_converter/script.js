function convertTemperature() {
  const temp = parseFloat(document.getElementById("temp").value);
  const unit = document.getElementById("unit").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(temp)) {
    resultDiv.textContent = "Please enter a valid number!";
    return;
  }

  let celsius, fahrenheit, kelvin;

  switch (unit) {
    case "celsius":
      celsius = temp;
      fahrenheit = (temp * 9) / 5 + 32;
      kelvin = temp + 273.15;
      break;
    case "fahrenheit":
      celsius = ((temp - 32) * 5) / 9;
      fahrenheit = temp;
      kelvin = ((temp - 32) * 5) / 9 + 273.15;
      break;
    case "kelvin":
      celsius = temp - 273.15;
      fahrenheit = ((temp - 273.15) * 9) / 5 + 32;
      kelvin = temp;
      break;
  }

  resultDiv.innerHTML = `
     <strong>${temp}° ${unit.charAt(0).toUpperCase() + unit.slice(1)}</strong> =
    <br><br>
     ${celsius.toFixed(2)}° Celsius <br>
     ${fahrenheit.toFixed(2)}° Fahrenheit <br>
     ${kelvin.toFixed(2)}° Kelvin
  `;
}
