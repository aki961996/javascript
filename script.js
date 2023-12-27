var demo = document.getElementById("home");

demo.innerHTML = "Calculator";
demo.style.backgroundColor = "orange";
demo.style.margin = "0";
demo.style.color = "white";
demo.style.textAlign = "center";

//logic start
var a, b, c;
var op = false;

var result = document.getElementById("result");
var first = document.getElementById("first").value;
var second = document.getElementById("second").value;
const insertNum = () => {
  if (op) {
    document.getElementById("second").value =
      document.getElementById("second").value + event.target.value;
  } else {
    document.getElementById("first").value =
      document.getElementById("first").value + event.target.value;
  }
};
const addOperand = () => {
  c = event.target.value;
  op = true;
};
const calculate = () => {
  var a = parseInt(document.getElementById("first").value);
  var b = parseInt(document.getElementById("second").value);

  var result;
  // console.log(typeof(a,b));
  // console.log(typeof(c));
  // var result;
  switch (c) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    default:
      console.log("default");
  }
  document.getElementById("result").innerHTML = "Result: " + result;
  var res = document.getElementById("result");
  res.style.color = "green";
  res.style.fontSize = "50px";
  console.log("Result:", result);
};

const clearFields = () => {
  document.getElementById("first").value = "";
  document.getElementById("second").value = "";
  document.getElementById("result").innerHTML = "";
  c = "";

  op = false;
};
