window.addEventListener('load',calculateTime);

function calculateTime() {  
var myDate = new Date();
let daysList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
// let monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];

let day = daysList[myDate.getDay()];
let hour = myDate.getHours();
let min = myDate.getMinutes();
let alpha = (hour>12)?"PM":"AM"
let sec = myDate.getSeconds();

hour=hour%12;
if(hour<10)
{hour='0'+ hour;}
if(min<10)
{min='0'+ min;}
if(sec<10)
{sec='0'+ sec;}


document.querySelector("#span1").innerText=day;
document.querySelector("#span2").innerText=hour;
document.querySelector("#span3").innerText=min;
document.querySelector("#span4").innerText=sec;
document.querySelector("#span5").innerText=alpha;

setTimeout(calculateTime,100);
}

// calculateTime();