function setup(){
	createCanvas(600,400);
	background(255,100,100);
	caixa();
}

function draw(){
	//loop	
	
}

mouseClicked = function(){
	//condição para o mouse estar dentro do retangulo
	if(mouseX>220 && mouseX < 370 && mouseY > 150 && mouseY < 270){
		stroke(0);
		ellipse(mouseX,mouseY,5,5);
	}
}

//retangulo que tem que ser clicado
let caixa = function(){
	textSize(16);	
	text("Clique dentro do retangulo", 200,120);
	fill(255);
	noStroke();
	rect(220,150,150,120);
}