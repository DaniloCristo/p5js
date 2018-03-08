function setup(){
	createCanvas(600,400);
	background(0);
}

function draw(){
	
	if(mouseIsPressed){
		paint();
	}	
}

//função que cria a ellipse que sera o "pincel"
let paint = function(){
	fill(100,230,100);
	ellipse(mouseX,mouseY,10,10);
}

function keyPressed(){
	if(keyCode == LEFT_ARROW){
		background(0);
	}
}

