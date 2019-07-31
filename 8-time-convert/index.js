function TimeConvert(num) {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  var string = hours + ":" + minutes;
  return string;
}

document.getElementById("app").innerHTML =
  // function call
  //TimeConvert(1200);
  //CheckNums(3, 122);
  TimeConvert(24);
