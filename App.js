function convert() {
  var temp = document.getElementById("initialtemp");
  var valueSelected = temp.value;
  if (valueSelected == "c") {
    var convertedF = cToF();
    return document.getElementById("result").value = convertedF + "F";
  }else if (valueSelected == "f") {
    var convertedC = fToC();
    return document.getElementById("result").value = convertedC + "C";
    } 
}
  // celcius to rest

function cToF() {
  var c = document.getElementById("tempinput").value;
  return (c * 9 / 5) + 32;
}

  function fToC() {
    var f = document.getElementById("tempinput").value;
    return (f - 32) * 5 / 9;
  }