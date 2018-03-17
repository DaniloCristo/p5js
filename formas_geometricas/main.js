let lados;
let number;
let c;
function setup(){
	createCanvas(600,400);
	//array com os lados das formas
	lados = [0,3,4];
	//index aleatorio para o numero de lados do array acima
	number = round(random(0,lados.length - 1));
	c = color(255);
}

function draw(){
	background(0,100,255);
	noStroke();
	fill(230,205,200);
	//switch que altera de acordo com o number que é o index dos lados no array
	switch(number){
		case 0:
			ellipse(width/2,height/2,70,70);
			break;
		case 1:
			triangle(300,160,270,230,330,230);	
			break;
		case 2:
			rect(270,170,60,60);
			break;	
	}

	textSize(30);
	//Exibindo o numero de lados
	text("Numero de lados: "+lados[number],180,70);
	botao();
	//console.log(c);
}

//criação do botão
let botao = function(){
	fill(c);
	rect(240,90,100,40);
	fill(0);
	textSize(14)
	text("Clique em mim",240,110);
	//mudar cor do botão caso pressionado em cima dele
	if(mouseIsPressed && mouseX > 240 && mouseX < 340 && mouseY > 90 && mouseY < 130  ){
			c = color(100,100,100);
	}else{
			c =  color(255,255,255);
	}
	
}

//quando clicar o botão dentro do rect do botão alterar o numero de lados
mousePressed = function(){
	if(mouseX > 240 && mouseX < 340 && mouseY > 90 && mouseY < 130 ){
		number = round(random(0,lados.length - 1));
	}


}