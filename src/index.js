module.exports = function getZerosCount(number, base) {
  var n = primeDivisors(base);
	var tmp = n;
	var result = 0;
	while(number > n){
		result = result + Math.floor(number / n);
		n = n * tmp;
	}

	return result;
}

function primeDivisors(base){
	var result = [];
	var number = base;
	var curNumber = number;
	var probe = 2;
	while(curNumber != 1){
		if(curNumber % probe != 0){
			probe++;
		}
		else{
			curNumber = curNumber / probe;
			result.push(probe);
		}
	}
	var max = result[0];
	for(var i = 0; i < result.length; i++){
		if(max < result[i]){
			max = result[i];
		}
	}
	return max;
}