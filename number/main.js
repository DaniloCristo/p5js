let number;;
function setup(){
	createCanvas(600,400);
	//pegando um numero inteiro aleatoriamente
	number = Math.floor(random(-100,100));
}

function draw(){
	background(0,255,100);
	//chamando as funções
	verificarCategoria();
	
	categoria();

	showNumber();
	
}
//verificando se o numero é positivo negativo ou zero
let verificarCategoria = function(){
	stroke(255);
	fill(0,255,100);
	strokeWeight(5);
	
	if(number>0){	
		rect(14,40,200,30);
	}else if(number < 0 ){
		rect(14,80,200,30);
	}else{
		rect(14,114,200,30);
	}
}

//texto com as categorias (positivo/negativo/zero)
let categoria = function(){

	fill(0);
	textSize(20);
	noStroke();
	text("Positivo",20,60);
	text("Negativo",20,100);
	text("Zero",20,140);

}
//exibindo o numero
let showNumber = function(){
	textSize(22);
	text("Número: "+number,250,200);
}

