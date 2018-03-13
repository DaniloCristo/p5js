
function setup(){
	createCanvas(1000,600);
	background(0,255,255);
}

function draw(){
	textSize(30);
	//texto "Aquario"
	fill(0);
	noStroke();	
	text("Aquario",400,50);
	textSize(18);
	text("Clique ENTER para limpar o aquario",250,100);
	drawFish(width/2,height/2);

}

//desenhando o peixe
//posY e posX recebem a posição do mouse quando clicada
let drawFish = function(posX,posY){
	fill(0,0,255);
	ellipse(posX,posY,70,40);
	fill(0);
	ellipse(posX + 20,posY,8,8);

	stroke(0,0,255);
	fill(0,0,255);
	triangle(posX - 20,posY,posX-50,posY-10,posX-50,posY+10);
}

//desenha um peixe sempre e onde clicar com o mouse
mousePressed = function(){
	drawFish(mouseX,mouseY);
}
//limpar a tela se a tecla ENTER for pressionada
keyPressed = function(){
	if(keyCode == ENTER){
		background(0,255,255);
	}
}