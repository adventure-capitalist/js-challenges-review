function firstFactorial(num) {
    var runningTotal = 1;
    while (num >0) {
      runningTotal = runningTotal * num;
      num = num-1;
    };
    return runningTotal;
  };
  
  document.getElementById("app").innerHTML =
    // function call
    firstFactorial(4);
  