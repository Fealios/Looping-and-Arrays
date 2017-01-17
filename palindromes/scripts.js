// $(document).ready(function(){
//
// })
//
//

var input;
var arr = [];
var reverseArr = [];

$(document).ready(function(){
  $('#form').submit(function(event) {
    input = $('#sentence').val();
    arr = input.toLowerCase().split('');
    reverseArr = arr.reverse();

    palindrome();
    event.preventDefault();
  })
})

function palindrome() {

  if (input.toLowerCase() === reverseArr.join("").toLowerCase()){
    console.log("they match!")
  } else {
    console.log('they dont match');
  }
}
