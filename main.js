function unitChanged(id, error) {
  if (document.getElementById(id).value != '') {
    document.getElementById(error).innerHTML = '';
    return;
  } else {
    document.getElementById(error).innerHTML = 'Field is Required..';
  }
}
function getAverage() {

  if (document.getElementById("units1").value == '') {
    document.getElementById("error1").innerHTML = "Units required..";
    return;
  } else if (document.getElementById("Price1").value == '') {
    document.getElementById("error2").innerHTML = "Price required..";
    return;
  } else if (document.getElementById("units2").value == '') {
    document.getElementById("error3").innerHTML = "Units required..";
    return;
  } else if (document.getElementById("Price2").value == '') {
    document.getElementById("error4").innerHTML = "Price required..";
    return;
  }

  var unit1 = document.getElementById("units1").value;
  var price1 = document.getElementById("Price1").value;
  var unit2 = document.getElementById("units2").value;
  var price2 = document.getElementById("Price2").value;

  var res1 = (unit1 * price1) + (unit2 * price2);
  var res2 = +unit1 + +unit2;
  var result = res1 / res2;
  document.getElementById("result").innerHTML = "Total units &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<bold>"
    + res2 + "</bold><br/><br/>Average Price &nbsp;&nbsp;&nbsp;<bold>" + result + "</bold>";
}
function clearFields() {
  document.getElementById("units1").value = '';
  document.getElementById("Price1").value = '';
  document.getElementById("units2").value = '';
  document.getElementById("Price2").value = '';
  document.getElementById("result").innerHTML = '';
}