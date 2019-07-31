function CheckNums(num1, num2) {
    if (num2 > num1) {
      return "true"
    } else if (num2 < num1) {
      return "false"
    } else {
      return "-1"
    }
  };
  
  document.getElementById("app").innerHTML =
    // function call
    CheckNums(2,1);
  