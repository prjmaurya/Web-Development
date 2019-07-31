// var game = {};

// game.init = function(){
// 	setupmode();
// 	setupsquares();
// 	reset();
// }

// game.init();

var numsquares = 6;

var colors = [];

var pickedcolor;

var trial = document.querySelector("#trial");

var rgbdisplay = document.querySelector("#rgbdisplay");

var squares = document.querySelectorAll(".square");

var h1 = document.querySelector("h1");

var newcolors = document.querySelector("#newcolor");

var modes = document.querySelectorAll(".mode");

init();

function init(){
	setupmode();
	setupsquares();
	reset();
}

function setupmode(){
	for(var i = 0 ; i < modes.length ; i++){
	modes[i].addEventListener("click",function() {
		modes[0].classList.remove("selected");
 		modes[1].classList.remove("selected");
 		this.classList.add("selected");
 		this.textContent === "Easy" ? numsquares = 3 : numsquares = 6 ;
 	// 	if(this.textContent === "Easy")
		// 	numsquares = 3;
		// else
		// 	numsquares = 6;

 		reset();
});
}
}

function setupsquares(){
	rgbdisplay.textContent = pickedcolor;

	for(var i = 0; i<squares.length ; i++){
		squares[i].addEventListener("click",function () {
			var clickedcolor = this.style.backgroundColor ;
			if(clickedcolor === pickedcolor){
				changecolor(clickedcolor);
				trial.textContent = "Correct!"
				h1.style.background = clickedcolor;
				
					alert("yes");
				
				newcolors.textContent = "Play Again??";
			}
			else{
				this.style.backgroundColor = "black";
				trial.textContent = "Try Again"
			}
		});
	}

}

function reset(){
	colors = colorgenerator(numsquares);
	pickedcolor = pickcolor();
	rgbdisplay.textContent = pickedcolor ;
	trial.textContent="";
	h1.style.background = "steelblue";
	newcolors.textContent = "New Colors";
	trial.textContent="";

	for(var i = 0 ; i<squares.length ; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
}

// easy.addEventListener("click",function(){
// 	easy.classList.add("selected");
// 	hard.classList.remove("selected");
// 	numsquares=3;
// 	colors = colorgenerator(numsquares);
// 	pickedcolor = pickcolor();
// 	rgbdisplay.textContent = pickedcolor ;
// 	trial.textContent="";

// 	for(var i = 0 ; i<squares.length ; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		}
// 		else{
// 			squares[i].style.display = "none";
// 		}
// 	}	
// });

// hard.addEventListener("click",function(){
// 	hard.classList.add("selected");
// 	easy.classList.remove("selected");
// 	numsquares=6;
// 	colors = colorgenerator(numsquares);
// 	pickedcolor = pickcolor();
// 	trial.textContent="";
// 	rgbdisplay.textContent = pickedcolor ;
// 	for(var i = 0 ; i<numsquares ; i++){
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";
// 	}	
// });

newcolors.addEventListener("click",function() {
	reset();
	// colors = colorgenerator(numsquares);
	// pickedcolor = pickcolor();
	// rgbdisplay.textContent = pickedcolor ;
	// for(var i = 0; i<squares.length ; i++){
	// 	squares[i].style.backgroundColor = colors[i];
	// }

	// h1.style.background = "steelblue";		
	// newcolors.textContent = "New Colors";
	// trial.textContent="";
});


function changecolor(color){
	for(var i=0; i<squares.length ; i++){
		squares[i].style.backgroundColor = color ;
	}
}

function pickcolor(){
	var ran = Math.floor(Math.random() * colors.length);
	return colors[ran];
}

function colorgenerator(num){
	var arr= [];
	for(var i=0 ; i<num; i++){
		arr.push(randomcolor());
	}

	return arr;
}

function randomcolor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+ r +", "+ g +", "+ b +")";
}

