var numbers = [21,34,11,3,53,2]
var i
var min = numbers[0]
for(i=1;i<numbers.length;i++){
    if(numbers[i]<min){
      min = numbers[i]
  }
}
console.log(min)