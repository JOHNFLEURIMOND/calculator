/*Simple Calculator
Author:John Fleurimond
LIC:
*/
//what can a user do.
//what can user see.
//what can a user expect.


//User can type two numbers and select a operator.
//user can see two input form  and four buttons
// User will select from four buttons.
//The four buttons that will call a function of add, subtract, division, multiple.
//User can expect see one result after the two numbers are added, subtracted, divided, multiplied.
//and the results will be displayed in the display bar

document.getElementById("plus").onclick = add;
document.getElementById('minus').onclick = minus;
document.getElementById('mult').onclick = mult;
document.getElementById('divide').onclick = divide;


function add() {
  //get value out of inputs
  var num1 = parseFloat(document.getElementById('firstVal').value)
  var num2 = parseFloat(document.getElementById('secondVal').value)

  var sum = num1 + num2
  //user sees result
  //display

  document.getElementById('result').innerHTML = sum

  document.getElementById('firstVal').innerHTML = ""
  document.getElementById('secondVal').innerHTML = ""

}


function minus() {
  //get value out of inputs
  var num1 = parseFloat(document.getElementById('firstVal').value)
  var num2 = parseFloat(document.getElementById('secondVal').value)

  var sum = num1 - num2
  //user sees result
  //display

  document.getElementById('result').innerHTML = sum

  document.getElementById('firstVal').innerHTML = ""
  document.getElementById('secondVal').innerHTML = ""

}

function mult() {
  //get value out of inputs
  var num1 = parseFloat(document.getElementById('firstVal').value)
  var num2 = parseFloat(document.getElementById('secondVal').value)

  var sum = num1 * num2
  //user sees result
  //display

  document.getElementById('result').innerHTML = sum

  document.getElementById('firstVal').innerHTML = ""
  document.getElementById('secondVal').innerHTML = ""

}

function divide() {
  //get value out of inputs
  var num1 = parseFloat(document.getElementById('firstVal').value)
  var num2 = parseFloat(document.getElementById('secondVal').value)

  var sum = num1 / num2
  //user sees result
  //display

  document.getElementById('result').innerHTML = sum

  document.getElementById('firstVal').innerHTML = ""
  document.getElementById('secondVal').innerHTML = ""

}