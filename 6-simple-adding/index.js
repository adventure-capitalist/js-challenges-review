function simpleAdding(num) {
  var runningTotal = 0;
  while (num>0) {
    runningTotal = runningTotal + num;
    num = num - 1;
  }
  return runningTotal;
}

document.getElementById("app").innerHTML =
  // function call
  simpleAdding(4);


