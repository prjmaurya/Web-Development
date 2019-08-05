var p1b = document.querySelector("#p1b");
var p2b = document.querySelector("#p2b");
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var p1score = 0;
var p2score = 0;
var gameover=false ;
var win = document.querySelector("input");
var winningscore = 5;
var res = document.querySelector("#res");
var winn = document.querySelector("#winn");

p1b.addEventListener("click", function(){
	if(!gameover){
		p1score++;

		if(p1score === winningscore){
			gameover=true;
			// p1.style.color = "green";
			p1.classList.add("green");
		}
		p1.textContent = p1score;
		
	}
	
});

p2b.addEventListener("click", function(){
	if(!gameover){
		p2score++;
		if(p2score === winningscore){
			gameover=true;
			// p2.style.color = "green";
			p2.classList.add("green");
		}
		p2.textContent = p2score;
		
	}
});

function reset(){
	p1score=0;
	p2score=0;
	gameover=false;
	p1.textContent = p1score;
	p2.textContent = p2score;
	// p1.style.color = "black";
	// p2.style.color = "black";
	p1.classList.remove("green");
	p2.classList.remove("green");
}

res.addEventListener("click", function(){
	reset();
});

win.addEventListener("change",function(){
	winningscore = Number(win.value);
	winn.textContent = win.value;
	reset();
})
