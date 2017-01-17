$(document).ready(function(){
  $('#form').submit(function(event){
    puzzle($('#sentence').val())
    event.preventDefault();
  });
});

function puzzle(string) {
  var arr = string.split("");
  var vowel = ['a', 'e', 'i', 'o', 'u']
  for (i=0; i < arr.length; i++) {
    if (vowel.includes(arr[i])) {
      arr[i] = "-";
    }
  }
  alert(arr.join(''));
};
