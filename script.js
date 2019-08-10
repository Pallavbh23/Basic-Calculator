var evaluable = "";
function updateText() {
  document.getElementById("text").innerHTML = evaluable;
}
function addtoEval(x) {
  evaluable = evaluable + String(x);
  updateText();
  console.log(evaluable);
}
function removefromEval() {
  // Make it so that spaces are trimmed.
  evaluable = evaluable.slice(0, evaluable.length - 1);
  updateText();
  console.log(evaluable);
}
function solve() {
  var ans = eval(evaluable);
  document.getElementById("text").innerHTML = ans;
  console.log(ans);
}
function clearEval() {
  evaluable = "";
  updateText();
  console.log(evaluable);
}
function changeSign() {
  ans = eval(evaluable);
  document.getElementById("text").innerHTML = -ans;
  evaluable = -ans;
}
function converttopercentage() {
  ans = eval(evaluable);
  document.getElementById("text").innerHTML = ans / 100;
  evaluable = ans / 100;
}
