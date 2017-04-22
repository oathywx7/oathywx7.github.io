parent1.addEventListener('mousemove', function(e){

  // 获取鼠标距离中点的 xDiff, yDiff
  let width = parent1.getBoundingClientRect().width
  let height = parent1.getBoundingClientRect().height
  let xCenter = parent1.offsetLeft + width / 2
  let yCenter = parent1.offsetTop + height / 2
  let xDiff = e.clientX - xCenter
  let yDiff = e.clientY - yCenter
  
  // 将 xDiff 和 yDiff 变为百分数
  
  let xPercent = xDiff / (width/2)
  let yPercent = yDiff / (height/2)
  
  // 得到 x y 方向的转动角度
  let xDeg = xPercent * 6
  let yDeg = yPercent * 5
  
  // 通过分析轴和区间，得出
  // 当用户在 x 轴移动鼠标时，CSS转动为 rotateY(xDeg)
  // 当用户在 y 轴移动鼠标时，CSS转动为 rotateX(-yDeg)
  banner1.style.transform = `translateZ(-50px) rotateX(${-yDeg}deg) rotateY(${xDeg}deg)`
})

window.onload=function(){
//定时器每秒调用一次fnDate()
setInterval(function(){
fnDate();
},1000);
};
//js 获取当前时间
function fnDate(){
var oDiv=document.getElementById("time");
var date=new Date();
var hours=date.getHours();//小时
var minute=date.getMinutes();//分
var second=date.getSeconds();//秒
var time=fnW(hours)+":"+fnW(minute)+":"+fnW(second);
oDiv.innerHTML=time;
}
//补位 当某个字段不是两位数时补0
function fnW(str){
var num;
str>9?num=str:num="0"+str;
return num;
} 