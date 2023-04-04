//tamanho bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 21;
let raio = diametro/2;

//velocidade bolinha
let = velocidadexBolinha = 6;
let= velocidadeyBolinha = 6;

//tamanho raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;

function preload(){
batida = loadSound("batida.mp3");
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
}
function setup() {
  createCanvas(600, 400);
  trilha.loop();
  
}

function draw() {
  background(0);
  mostraBolinha()
  movimentaBolinha();
  verificaColisao();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  mostraRaqueteOponente(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  colisaoRaquete(xRaquete,yRaquete);
  colisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  
}
function mostraBolinha(){
   circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadexBolinha ;
  yBolinha += velocidadeyBolinha;
  
}

function verificaColisao(){
   if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadexBolinha *=-1;
  }
  if (yBolinha + raio > height ||
     yBolinha - raio < 0){
    velocidadeyBolinha *=-1
  }
}

function mostraRaquete(x,y){
  rect(x ,y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if(xBolinha - raio< xRaquete + raqueteComprimento
    && yBolinha - raio < yRaquete + raqueteAltura &&
    yBolinha + raio > yRaquete){
    velocidadexBolinha *= -1
  }
}

function mostraRaqueteOponente(){
  rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);
}

function movimentaRaqueteOponente(){
  if (keyIsDown(87)){
    yRaqueteOponente -= 10;
    
  }
  
  if (keyIsDown(83)){
    yRaqueteOponente += 10;
  }
  
}

function colisaoRaquete(x,y){
    colidiu = collideRectCircle(x,y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadexBolinha *= -1;
      batida.play();
    }
  
  

}

function incluiPlacar(){
  textAlign(CENTER)
  textSize(20)
  fill(75,0,130);
  rect(150,10,40,20);
  fill(2550);
  text(meusPontos, 170,26);
  fill(75,0,130);
  rect(450,10,40,20);
  fill(2550);
  text(pontosDoOponente,470,26);
  
}

function marcaPonto(){
  if(xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  
  if(xBolinha < 10){
    pontosDoOponente += 1;
    ponto.play();
  }
}



