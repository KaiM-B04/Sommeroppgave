//function that evaluates the weight and return result
function kiloweightConvert(value) {
  document.getElementById("The-Sun").innerHTML =
    (value * 27.01).toFixed(2) + " kg";
  document.getElementById("Mercury").innerHTML =
    (value * 0.38).toFixed(2) + " kg";
  document.getElementById("Venus").innerHTML =
    (value * 0.91).toFixed(2) + " kg";
  document.getElementById("Earth").innerHTML = (value * 1).toFixed(2) + " kg";
  document.getElementById("The-Moon").innerHTML =
    (value * 0.166).toFixed(2) + " kg";
  document.getElementById("Mars").innerHTML = (value * 0.38).toFixed(2) + " kg";
  document.getElementById("Jupiter").innerHTML =
    (value * 2.34).toFixed(2) + " kg";
  document.getElementById("Saturn").innerHTML =
    (value * 1.06).toFixed(2) + " kg";
  document.getElementById("Uranus").innerHTML =
    (value * 0.92).toFixed(2) + " kg";
  document.getElementById("Neptune").innerHTML =
    (value * 1.19).toFixed(2) + " kg";
  document.getElementById("Pluto").innerHTML =
    (value * 0.06).toFixed(2) + " kg";
}
