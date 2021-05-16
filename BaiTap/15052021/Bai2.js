;(function(){
var msg = "Dynamic Drive! Scripts & More!";
var size = 24;var circleY = 0.75; var circleX = 2;var letter_spacing = 5;var diameter = 10;
var rotation = 0.4;
var speed = 0.3;
if (!window.addEventListener && !window.attachEvent || !document.createElement) return;
msg = msg.split('');
var n = msg.length - 1, a = Math.round(size * diameter * 0.208333), currStep = 20,
ymouse = a * circleY + 20, xmouse = a * circleX + 20, y = [], x = [], Y = [], X = [],
o = document.createElement('div'), oi = document.createElement('div'),
b = document.compatMode && document.compatMode != "BackCompat"? document.documentElement : document.body,
mouse = function(e){
 e = e || window.event;
 ymouse = !isNaN(e.pageY)? e.pageY : e.clientY; // y-position
 xmouse = !isNaN(e.pageX)? e.pageX : e.clientX; // x-position
},

makecircle = function(){ // rotation/positioning
 if(init.nopy){
  o.style.top = (b || document.body).scrollTop + 'px';
  o.style.left = (b || document.body).scrollLeft + 'px';
};
currStep -= rotation;
 for (var d, i = n; i > -1; --i){ // makes the circle
  d = document.getElementById('iemsg' + i).style;
  d.top = Math.round(y[i] + a * Math.sin((currStep + i) / letter_spacing) * circleY - 15) + 'px';
  d.left = Math.round(x[i] + a * Math.cos((currStep + i) / letter_spacing) * circleX) + 'px';
};
},

drag = function(){ // makes the resistance
 y[0] = Y[0] += (ymouse - Y[0]) * speed;
 x[0] = X[0] += (xmouse - 20 - X[0]) * speed;
 for (var i = n; i > 0; --i){
  y[i] = Y[i] += (y[i-1] - Y[i]) * speed;
  x[i] = X[i] += (x[i-1] - X[i]) * speed;
};
makecircle();
},

init = function(){ // appends message divs, & sets initial values for positioning arrays
 if(!isNaN(window.pageYOffset)){
  ymouse += window.pageYOffset;
  xmouse += window.pageXOffset;
} else init.nopy = true;
for (var d, i = n; i > -1; --i){
  d = document.createElement('div'); d.id = 'iemsg' + i;
  d.style.height = d.style.width = a + 'px';
  d.appendChild(document.createTextNode(msg[i]));
  oi.appendChild(d); y[i] = x[i] = Y[i] = X[i] = 0;
};
o.appendChild(oi); document.body.appendChild(o);
setInterval(drag, 25);
},
ascroll = function(){
 ymouse += window.pageYOffset;
 xmouse += window.pageXOffset;
 window.removeEventListener('scroll', ascroll, false);
};

o.id = 'outerCircleText'; o.style.fontSize = size + 'px';
if (window.addEventListener){
 window.addEventListener('load', init, false);
 document.addEventListener('mouseover', mouse, false);
 document.addEventListener('mousemove', mouse, false);
 if (/Apple/.test(navigator.vendor))
   window.addEventListener('scroll', ascroll, false);
}
else if (window.attachEvent){
 window.attachEvent('onload', init);
 document.attachEvent('onmousemove', mouse);
};
})();



// // background ball
// console.log("Ball");

//     var canvas = document.getElementById("canvas");
//     var c = canvas.getContext("2d");
//     var tx = window.innerWidth;
//     var ty = window.innerHeight;
//     canvas.width = tx;
//     canvas.height = ty;

//     var mousex = 0;
//     var mousey = 0;

//     addEventListener("mousemove", function() {
//       mousex = event.clientX;
//       mousey = event.clientY;
//     });

//     var grav = 0.99;
//     c.strokeWidth=5;
//     function randomColor() {
//       return (
//         "rgba(" +
//         Math.round(Math.random() * 250) +
//         "," +
//         Math.round(Math.random() * 250) +
//         "," +
//         Math.round(Math.random() * 250) +
//         "," +
//         Math.ceil(Math.random() * 10) / 10 +
//         ")"
//         );
//     }

//     function Ball() {
//       this.color = randomColor();
//       this.radius = Math.random() * 20 + 14;
//       this.startradius = this.radius;
//       this.x = Math.random() * (tx - this.radius * 2) + this.radius;
//       this.y = Math.random() * (ty - this.radius);
//       this.dy = Math.random() * 2;
//       this.dx = Math.round((Math.random() - 0.5) * 10);
//       this.vel = Math.random() /5;
//       this.update = function() {
//         c.beginPath();
//         c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
//         c.fillStyle = this.color;
//         c.fill();
//       };
//     }

//     var bal = [];
//     for (var i=0; i<50; i++){
//       bal.push(new Ball());
//     }

//     function animate() {    
//       if (tx != window.innerWidth || ty != window.innerHeight) {
//         tx = window.innerWidth;
//         ty = window.innerHeight;
//         canvas.width = tx;
//         canvas.height = ty;
//       }
//       requestAnimationFrame(animate);
//       c.clearRect(0, 0, tx, ty);
//       for (var i = 0; i < bal.length; i++) {
//         bal[i].update();
//         bal[i].y += bal[i].dy;
//         bal[i].x += bal[i].dx;
//         if (bal[i].y + bal[i].radius >= ty) {
//           bal[i].dy = -bal[i].dy * grav;
//         } else {
//           bal[i].dy += bal[i].vel;
//         }    
//         if(bal[i].x + bal[i].radius > tx || bal[i].x - bal[i].radius < 0){
//           bal[i].dx = -bal[i].dx;
//         }
//         if(mousex > bal[i].x - 20 && 
//           mousex < bal[i].x + 20 &&
//           mousey > bal[i].y -50 &&
//           mousey < bal[i].y +50 &&
//           bal[i].radius < 70){
//         bal[i].radius +=5; 
//     } else {
//       if(bal[i].radius > bal[i].startradius){
//         bal[i].radius += -5;
//       }
//     }

//     }
//     }

//     animate();

//     setInterval(function() {
//       bal.push(new Ball());
//       bal.splice(0, 1);
//     }, 400);




// var clock = new Vue({
//     el: '#clock',
//     data: {
//         time: '',
//         date: ''
//     }
// });

// var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
// var timerID = setInterval(updateTime, 1000);
// updateTime();
// function updateTime() {
//     var cd = new Date();
//     clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
//     clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
// };

// function zeroPadding(num, digit) {
//     var zero = '';
//     for(var i = 0; i < digit; i++) {
//         zero += '0';
//     }
//     return (zero + num).slice(-digit);
// }




var hoursContainer = document.querySelector('.hours')
var minutesContainer = document.querySelector('.minutes')
var secondsContainer = document.querySelector('.seconds')
var tickElements = Array.from(document.querySelectorAll('.tick'))

var last = new Date(0)
last.setUTCHours(-1)

var tickState = true

function updateTime () {
  var now = new Date
  
  var lastHours = last.getHours().toString()
  var nowHours = now.getHours().toString()
  if (lastHours !== nowHours) {
    updateContainer(hoursContainer, nowHours)
  }
  
  var lastMinutes = last.getMinutes().toString()
  var nowMinutes = now.getMinutes().toString()
  if (lastMinutes !== nowMinutes) {
    updateContainer(minutesContainer, nowMinutes)
  }
  
  var lastSeconds = last.getSeconds().toString()
  var nowSeconds = now.getSeconds().toString()
  if (lastSeconds !== nowSeconds) {
    //tick()
    updateContainer(secondsContainer, nowSeconds)
  }
  
  last = now
}

function tick () {
  tickElements.forEach(t => t.classList.toggle('tick-hidden'))
}

function updateContainer (container, newTime) {
  var time = newTime.split('')
  
  if (time.length === 1) {
    time.unshift('0')
  }
  
  
  var first = container.firstElementChild
  if (first.lastElementChild.textContent !== time[0]) {
    updateNumber(first, time[0])
  }
  
  var last = container.lastElementChild
  if (last.lastElementChild.textContent !== time[1]) {
    updateNumber(last, time[1])
  }
}

function updateNumber (element, number) {
  //element.lastElementChild.textContent = number
  var second = element.lastElementChild.cloneNode(true)
  second.textContent = number
  
  element.appendChild(second)
  element.classList.add('move')

  setTimeout(function () {
    element.classList.remove('move')
  }, 990)
  setTimeout(function () {
    element.removeChild(element.firstElementChild)
  }, 990)
}

setInterval(updateTime, 100)