function maxContigSubarray(arr) {
  for(let i=0; i<arr.length; i++){
    var sum = arr[i] + arr[i+1];
    if( sum > for (let j=0; j < arr.length; j++){
      var nextSum = arr[j] + arr [j +1];
      return sum;
    } else if {
      return nextSum;
    })
  }
}

testArr1 = [4,7,-1,-12,7];
testArr2 = [0,8,0,2,3];
testArr3 = [-1,5,66,7,-8,-22,4];
testArr4 = [-2,-3,4,1,-1,-5,4];

console.log(maxContigSubarray(testArr1));
console.log(maxContigSubarray(testArr2));
console.log(maxContigSubarray(testArr3));
console.log(maxContigSubarray(testArr4));
