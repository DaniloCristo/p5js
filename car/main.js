//posição inicial do carro
let x = 0;
//aceleração do carro
let a;
//velocidade inicial = 0
let v = 0;
//variavel que vai "controlar" caso o carro chegue até a ponta do canvas
let on = true;
function setup(){
	createCanvas(1000,400);
}

function draw(){
	//definindo a cor do background do canvas
	background(0);
	//chamando a função do carro
	car();
	//exibindo a velocidade
	velocimetro();
	//condição para o carro retornar ao atigindir a ponta do canvas
	if(x >= width){
		on = false;
		v = 0;
	}else if(x < 0 ){
		on = true;
		 v = 0;
	}
	//se estiver em direção a direita aceleração positiva
	if(on){
		a = 1;
		v += a;
		x += v;
	}else{
		//indo a esquerda aceleração negativa
		a = -1;
		v -= a;
		x -= v
	}
	
	
}

//carro
let car = function(){
	fill(200,200,200);
	rect(x,320,70,40);
	ellipse(x + 10,370,30,30);
	ellipse(x + 60,370,30,30);
}

//mostrando a velocidade atual
let velocimetro = function(){
	textSize(20);
	fill(255);
	text("Essa é sua velocidade: " + v,40,50);
}