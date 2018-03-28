function setup(){
	createCanvas(600,600);
}

function draw(){
	//primeiro retangulo
	fill(0,150,0);
	rect(0,20,600,300);
	//losando
	fill(250,255,0);
	quad(300,40,10,180,300,300,580,180);
	//circulo
	fill(0,0,170)
	ellipse(300,180,200,200);
}