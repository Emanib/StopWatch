// Stop watch 


var time = 0;
var running = 0;
let start = document.getElementById("start");
let reset =document.getElementById("reset");
start.addEventListener("click",startPause);
reset.addEventListener("click",reset1);

function startPause(){
	if(running == 0){
		running = 1;
		increment();
		document.getElementById("start").textContent = "Pause";
	}else{
		running = 0;
		document.getElementById("start").textContent = "Resume";
	}
};

function reset1(){
	running = 0;
	time = 0;
	document.getElementById("time").textContent = "00:00:00";
	document.getElementById("start").textContent = "Start";
};

function increment(){
	if(running == 1){
		setTimeout(function(){
			time++;
            var mins = Math.floor(time / 10 / 60);
            console.log(mins);
			if(mins <= 9){
				mins = "0" + mins;
			}
			var secs = Math.floor(time / 10);
			if(secs <= 9){
				secs = "0" + secs;
			}
			var tenths = Math.floor(time % 10);
			if(tenths <= 9){
				tenths = "0" + tenths;
			}
			document.getElementById("time").textContent = mins + ":" + secs + ":" + tenths;
			increment();
		}, 100);
	}
};
