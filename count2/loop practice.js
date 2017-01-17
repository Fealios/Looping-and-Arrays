var count = function(countBy, countTo) {
	if(isNaN(countBy) || isNaN(countTo)) {
  	alert('You have missed entering an argument');
  } else if (countBy > countTo) {
  	alert('You have entered a countBy number that is larger than your countTo');
  } else {
  	for (i=countBy;i<=countTo;i+=Math.abs(countBy)){
    	alert(i);
    }
  }
}

count(50,1);
