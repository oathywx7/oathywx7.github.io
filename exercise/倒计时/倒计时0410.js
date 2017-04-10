var button = document.querySelector('#start')
var total = 2 * 3600 //ms
button.addEventListener('click', function(){
  var id = setInterval(function(){
    if(total <= 0){
      clearInterval(id)
    }
    total -= 1
    
    var hour = parseInt(total / 3600,10)
    var minute = parseInt((total - hour * 3600) / 60)
    var second = total - hour * 3600 - minute * 60
    
    
    
    timeLeft.innerText = `${hour}:${minute}:${second}`
  },1000)
})