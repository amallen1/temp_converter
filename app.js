function calc() {
  let degree = document.getElementById("degrees").value;
  let type = document.getElementById("type").value;
  if (type == "Fahrenheit" || type == "fahrenheit") {
    let output = ((degree - 32) * 5) / 9;
    console.log(output);
    document.getElementById("answer").innerHTML = output.toFixed(2) + " °C";
  } else if (type == "Celsius" || type == "celsius") {
    let output = (degree * 9) / 5 + 32;
    document.getElementById("answer").innerHTML = output.toFixed(2) + " °F";
  } else {
    //Kelvin
    let output = degree - 273.15;
    document.getElementById("answer").innerHTML = output.toFixed(2) + " °C";
  }
}
