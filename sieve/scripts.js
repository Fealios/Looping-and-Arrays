function sieve (given) {
  var arr = [2];
  function isPrime(number){
    for (i = 2; i <= given; i++){
        if(number % i === 0 && number!= i){
           return false;
        } else {
          arr.push[number];
        }
     }


}
isPrime(given);
}
alert(sieve(13));
