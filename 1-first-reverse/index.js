// import "./styles.css";

function firstReverse(str) {
  str = str.split("").reverse().join("");
  return str;
}

document.getElementById("app").innerHTML =
  
  firstReverse("Hello World and Coders");
