let x = 100;
let pikachu;
function setup(){
	createCanvas(600,400);
	background(99,200,255);
	
	pikachu = loadImage("pikachu.png");
	
}

function draw(){
	
	fill(255,250,0);
	stroke(255);
	while(x < 550){
		line(x,100,342,270);
		ellipse(x,100,60,80);
		x += 70
	}

	image(pikachu,342,210);
}