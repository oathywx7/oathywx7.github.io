var numbers = [25,268,24,89,91,1,36,5,8]
var i,j,temp
for(i=0;i<numbers.length;i++){
  for(j=0;j<numbers.length-1;j++){
    if(numbers[j+1]<numbers[j]){
      temp=numbers[j]
      numbers[j]=numbers[j+1]
      numbers[j+1]=temp
    }
  }
}
console.log(numbers)