function setup(){
	createCanvas(800,600);
}

function draw(){
	background(0,255,255);
	cards(70,50);//topo direita
	cards(450,50);// topo esquerda
	cards(70,300);// inferior esquerdo
	cards(450,300); // inferior direito

	fill(0);
	noStroke();
	textSize(16);
	text("Fatos interessantes",350,20);
	
	textSize(14);

	//primeira pergunta
	//checando se o mouse esta sendo clicado e se esta dentro da area do retangulo
	if(mouseIsPressed && mouseX > 70 && mouseX < 370 && mouseY > 50 && mouseY < 150){
		text("Sal Khan",100,100);
	}else{
		text("Qual nome do criador da Khan Academy?",100,100);	
	}

	//second question
	if(mouseIsPressed && mouseX>450 && mouseX < 750 && mouseY>50 && mouseY < 150){
		text("Php",455,100);
	}else{
		textSize(12);
		text("Qual linguagem de programação usada no Facebook?",455,100);
	}

	//terceira pergunta
	if(mouseIsPressed && mouseX>70 && mouseX < 370 && mouseY > 300 && mouseY < 400){
		textSize(16);
		text("Ada Lovelace",100,350);
	}else{
		textSize(15);
		text("Nome da primeira programadora do mundo?",70,350);
	}

	//quarta pergunta
	if(mouseIsPressed && mouseX>450 && mouseX < 750 && mouseY > 300 && mouseY < 400){
		textSize(16);
		text("Javascript",480,350);
	}else{
		textSize(15);
		text("Qual linguagem usada aqui? ",450,350);
	}
}

//cartão
let cards = function(x,y){
	fill(255,209,209);
	rect(x,y,300,100);
}
