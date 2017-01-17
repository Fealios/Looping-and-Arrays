var regex = /[aeiou]/gi;
var puzzle = function(sentence){
  var newStr = sentence.replace(regex, '-');
  alert (newStr);
}
puzzle("Believe you can and you're halfway there. Theodore Roosevelt");
