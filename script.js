window.addEventListener("load", initialize);

var playBtn = document.getElementById("play");

playBtn.addEventListener("click", play);

var pauseBtn = document.getElementById("pause");

pauseBtn.addEventListener("click", pause);

var stopBtn = document.getElementById("stop");

stopBtn.addEventListener("click", stop);


var x = 0;
var y = 0;

var d = "M 0 0";

var L = [];

function store(x, y, array) {
  
  if (member(x,y,array)==-false) {
    array.push({first: x, second: y});
  }

};

function member(x,y,array) {
  var i = array.length;
  while (i--) {
      if (array[i].first == x && array[i].second == y) {
          return true;
      }
  }
  return false;
}

console.log(member(x,y,L));

store(x,y,L);

console.log(member(x,y,L));



function initialize() {
  playBtn.disabled = false;
  pauseBtn.disabled = true;
  stopBtn.disabled = true;
  step = document.getElementById('jump').value = 1;
  speed = document.getElementById('sweep').value = 10;
};

function setStepSize(delimiter) {
  step = document.getElementById('jump').value = delimiter ;
};

function setSpeed(delimiter) {
  speed = document.getElementById('sweep').value = delimiter ;
};

function play() {
  halt = setInterval(trace,speed);
  playBtn.disabled = true;
  pauseBtn.disabled = false;
  stopBtn.disabled = false;
  jump.disabled = true;
  sweep.disabled = true;
};

function pause() {
  clearInterval(halt);
  playBtn.disabled = false;
  pauseBtn.disabled = true;
  stopBtn.disabled = false;
  jump.disabled = false;
  sweep.disabled = false;
};

function stop() {
  window.location.reload();
};




function trace() {

  var r = Math.floor((Math.random() * 4) + 1);

  var s = parseInt(step);

  
  if (r==1 && member(x+s,y,L)==false) {
    x = x + s;
    d = d + ` H ${x}`;
  } else if (r==2 && member(x-s,y,L)==false) {
    x = x - s;
    d = d + ` H ${x}`;    
  } else if (r==3 && member(x,y+s,L)==false) {
    y = y + s;
    d = d + ` V ${y}`;
  } else if (r==4 && member(x,y-s,L)==false) {
    y = y - s;
    d = d + ` V ${y}`;
  }

  store(x,y,L);
 
  var path = document.getElementById("path");

  path.setAttribute("stroke", "blue");
  path.setAttribute("stroke-width", "0.2");
  path.setAttribute("fill", "none");
  path.setAttribute("d", d);

  var dot = document.getElementById("dot")

  dot.setAttribute("cx", x);
  dot.setAttribute("cy", y);
  dot.setAttribute("r", "0.3");
  dot.setAttribute("fill", "greenyellow");
  dot.setAttribute("stroke", "black");
  dot.setAttribute("stroke-width", "0.3");
};








var stepsBtn = document.getElementById("print");

stepsBtn.addEventListener("click", steps);

function steps() {
  
  document.getElementById("steps").innerHTML = ""

  for (i in L) {
    document.getElementById("steps").innerHTML += "(" + L[i].first + "," + L[i].second + ")" + "&nbsp; &nbsp;";
  };
}