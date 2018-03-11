//posição do primeiro carro
let x1 = 0;
//posição do segundo carro
let x2 = 0;
//velocidade do primeiro carro que esta sendo gerada aleatoriamente
let v1 = 0;
// velocidade do segundo carro que esta sendo gerada aleatoriamente
let v2 = 0;
//aceleração do primeiro carro
let a1;
//aceleração do segundo carro
let a2;
//cor do carro vencedor
let win;
//variavel que vai indiciar o fim do loop no draw
let fimLoop = false;

setup = function(){
	createCanvas(1000,400);

}

draw = function(){
	background(255);
	a1 = random(0.001,0.9);
	a2 = random(0.001,0.9);
	v1 += a1;
	v2 += a2;
	//alterando posição do primeiro carro com base na velocidade
	x1 += v1;
	x2 += v2;
	//chamando as duas estradas
	estrada(300);
	estrada(120);
	//chamando os dois carros
	car1();
	car2();
	velocimetro(v1,20,40);
	velocimetro(v2,20,240);
	verificarVencedor();
	
	//console.log(a1);
	//console.log(a2);
}

//carro generico
let cars = function(altura,x){
	//carro
	rect(x,altura,70,40);
	//rodas
	fill(0);
	ellipse(x + 10,altura + 50,20,20);
	ellipse(x + 55,altura + 50,20,20);
}

let estrada = function(altura){
	fill(100,100,100);
	rect(0,altura,width,100);
}
//criação do primeiro carro
let car1 = function(){
	fill(230,200,100);
	cars(65,x1);
}

//criação do segundo carro
let car2 = function(){
	fill(240,0,0);
	cars(245,x2);
}


// texto falando do vencedor
let showVencedor = function(texto){
	//recebendo como parametro o texto com o resultado da corrida
	textSize(20);
	fill(100,200,200);
	text(texto,20,20);
}

let verificarVencedor = function(){
	// verficiando qual posição ultrapassa o width primeiro (linha de chegada)
	if(x1 > width && x2 > width){
		win = "Os carros empataram";
		//variavel pra cancelar o loop no draw
		fimLoop = true;
		showVencedor(win);
	}else if(x1 > width){
		win = "Carro de cor amarela vence a corrida";
		fimLoop = true;
		showVencedor(win);
	}else if(x2 > width){
		win = "Carro de cor vermelha vence a corrida";
		fimLoop = true;
		showVencedor(win);
	}
	//cancelar o loop no draw apos o primeiro carro ultrapassar a "linha de chegada"
	if(fimLoop){
		noLoop();
	}
}

let velocimetro = function(carro,x,y){
	text("Velocidade Final aproximada "+ Math.floor(carro),x,y);
}
