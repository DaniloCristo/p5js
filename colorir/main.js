//cor do "pincel"
let c;
function setup(){
	createCanvas(600,400);
	background(0);
	boneco();
	c = color(0,255,100);
}

function draw(){
	fill(255);
	stroke(0);
	textSize(20);
	text("Pressione enter para limpar o desenho",180,20);

	if(mouseIsPressed){
		colorir();
	}
	tabelaCores();
}

//boneco a ser pintado
let boneco = function(){
	//cabeça
	stroke(0);
	fill(255);
	ellipse(300,150,40,40);
	//olhos
	fill(0);
	ellipse(290,147,8,8); // direito
	ellipse(310,147,8,8); // esquerdo
	//corpo
	fill(255);
	rect(280,170,40,100);
	//braços
	stroke(255);
	line(280,175,260,200);// esquerdo
	line(320,175,340,200); // direito
	//pernas
	line(285,300,285,250); // esquerdo
	line(315,300,315,260);
	stroke(0);
}

//"pincel" de colorir
let colorir = function(){
	fill(c);
	noStroke();
	ellipse(mouseX,mouseY,10,10);
}

//limpar o desenho pressionando ENTER
keyPressed  = function(){
	if(keyCode == ENTER){
		background(0);
		boneco();
	}
}

//texto que mostra a tabela de cores disponiveis com suas respectivas teclas
let tabelaCores = function(){
	textSize(16);
	fill(255);
	stroke(0);
	text("Mudar a cor",20,30);
	text("g para verde",20,50);
	text("b para azul",20,70);
	text("p para rosa",20,90);
	text("w para preto",20,110);
}

//selecionar cores de acordo coma tecla pressionada
keyTyped = function(){
	if(key == 'g'){
		c = color(0,255,100);
	}else if(key == 'b'){
		c = color(0,255,255);
	}else if(key == 'p'){
		c = color(255,0,255);
	}else if(key == 'w'){
		c = color(0);
	}
}