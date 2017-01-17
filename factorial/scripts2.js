// function factorial(int) {
//   var recur = int;
//   var output = int;
//   if (recur > 0){
//   function recursion(int) {
//     recur --;
//     output = output * recur;
//     recursion(int);
//   }
// };
// }

function factorialNick(int) {

  if (int < 0) {
    return -1;
  } else if(int === 0) {
    return 1;
  } else {
    return (int * factorialNick(int - 1))
  }

  return factorialNick(int - 1, total * (int - 1))
}


$(document).ready(function(){
  $('#factorial').submit(function(event){
    number = parseInt($('#number').val());
    console.log(number);

    alert(factorialNick(number, number));
    event.preventDefault();
  });
});
