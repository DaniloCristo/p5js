function setup(){
	createCanvas(600,400);
	background(0);
}

function draw(){
	//texto que alerta como apagar
	fill(255);
	textSize(20);
	text("Para apagar pressione a seta esquerda",20,20);
	//desenhar pressionando o mouse
	if(mouseIsPressed){
		paint();
	}	
}

//função que cria a ellipse que sera o "pincel"
let paint = function(){
	fill(100,230,100);
	ellipse(mouseX,mouseY,10,10);
}

//função que "limpa" o background
function keyPressed(){
	if(keyCode == LEFT_ARROW){
		background(0);
	}
}

