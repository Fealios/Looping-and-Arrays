var number;
var factorial = function(int){
    var output = int;
    for (i=int-1;i>0;i--){
    // var output = int;
    output = output*i;
  }
  return output;
}
$(document).ready(function(){
  $('#factorial').submit(function(event){
    number = parseInt($('#number').val());
    console.log(number);

    alert(factorial(number));
    event.preventDefault();
  });
});
