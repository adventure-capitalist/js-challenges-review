function letterChanges(str) {
    var alphabet =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var newstring = [];
    for (i=0; i < str.length; i++) {
      str = str.split("");
      var index = alphabet.indexOf(str[i]);
      var result = alphabet[index + 1];
      newstring.push(result);
    }
    return newstring.join("");
  }
  
  document.getElementById("app").innerHTML =
    // function call
    letterChanges("hello");