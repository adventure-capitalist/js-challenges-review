
function letterChanges(str) {
var newStr = str.replace(/[a-z]/gi,  function(char) {
  return (char === 'z'|| char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() +1);
});
return newStr;
}

document.getElementById("app").innerHTML =
  // function call
  letterChanges("hello");
