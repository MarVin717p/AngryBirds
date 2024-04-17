/// <reference path="./libs/global.d.ts" />

let imagenFondo
let imagenFondo2
let mano
let musica
grado = Math.PI/180
let x=0
let y=0
let customFont
let copete
let cola
function preload(){
  imagenFondo = loadImage('./images/fondonube2.jpg');
  imagenFondo2 = loadImage('./images/fondonube2.jpg');
  mano = loadImage('./images/mano.png');
  click= loadImage('./images/click.png');
  copete=loadImage('./images/copete.png');
  cola=loadImage('./images/cola.png');
  musica = loadSound('./sounds/angrybirds.m4a');
  customFont = loadFont('./fonts/AngryBirdsPixela.ttf');
  

}

function setup() {
  //establecemos la fuente 
  textFont(customFont)

 // put setup code here
 //createCanvas(800, 800, WEBGL);
 createCanvas(1365, 632);

}

function draw() {
 
  //AGREGAREMOS DOS VECES LA MISMA IMAGEN
  //COMO LA IMAGEN TIENE UN FORMATO MAS PEQUEÑO ENTONCES 
  //HAREMOS UNA CADENA DE DOS IMAGENES PARA QUE NO SALGAN
  //TAN BRUSCAMENTE A EL CANVAS
  
  //fondo 1 
  image(imagenFondo, x, 0)
  
 image(imagenFondo, imagenFondo.width + x,0)
x=x-2
if(x< -imagenFondo.width){
x=0
}
//fondo2
image(imagenFondo2, y, 0)
image(imagenFondo2, imagenFondo2.width+940 + y,0)
y=y-2
if(y< -imagenFondo2.width){
y=0
}
  //montañas de tierra
  strokeWeight(0);
   stroke(0)
   fill(52,35,19)
  rect(-2,460, 350, 90)
  triangle(348,550, 450, 550, 348, 460);  
  rect(720,460, 900, 90)
  triangle(720,550, 720, 460, 625, 550);
  //brillo montaña de tierra izquierda
  //brillo 1
  fill(65,42,26)
  push();
  noStroke() 
  translate(12, 490)
  rotate(radians(150))
  rectMode(CENTER);
  rect(0,0, 20, 58);
  pop(); 
  rect(17, 500,58,20)

  push();
  noStroke() 
  translate(80, 529)
  rotate(radians(150))
  rectMode(CENTER);
  rect(0,0, 20, 58);
  pop(); 
  //brillo 2
  push();
  noStroke() 
  translate(162, 490)
  rotate(radians(150))
  rectMode(CENTER);
  rect(0,0, 20, 58);
  pop(); 
  rect(167, 500,58,20)

  push();
  noStroke() 
  translate(230, 529)
  rotate(radians(150))
  rectMode(CENTER);
  rect(0,0, 20, 58);
  pop(); 
  //brillo 3
  push();
  noStroke() 
  translate(312, 490)
  rotate(radians(150))
  rectMode(CENTER);
  rect(0,0, 20, 58);
  pop(); 
  rect(317, 500,58,20)

  push();
  noStroke() 
  translate(380, 529)
  rotate(radians(150))
  rectMode(CENTER);
  rect(0,0, 20, 58);
  pop(); 
  
  //brillo montaña de tierra derecha
  //brillo 1
  fill(65,42,26)
  push();
  noStroke() 
  translate(747, 483)
  rotate(radians(150))
  rectMode(CENTER);
  rect(0,0, 20, 58);
  pop(); 
  rect(755, 493,58,20)

  push();
  noStroke() 
  translate(820, 522)
  rotate(radians(150))
  rectMode(CENTER);
  rect(0,0, 20, 58);
  pop(); 
  rect(820, 540,58,20)

  push();
  noStroke() 
  translate(879, 568)
  rotate(radians(150))
  rectMode(CENTER);
  rect(0,0, 20, 58);
  pop(); 
  //brillo 2
  push();
  noStroke() 
  translate(947, 483)
  rotate(radians(150))
  rectMode(CENTER);
  rect(0,0, 20, 58);
  pop(); 
  rect(955, 493,58,20)

  push();
  noStroke() 
  translate(1020, 522)
  rotate(radians(150))
  rectMode(CENTER);
  rect(0,0, 20, 58);
  pop(); 
  rect(1020, 540,58,20)

  push();
  noStroke() 
  translate(1079, 568)
  rotate(radians(150))
  rectMode(CENTER);
  rect(0,0, 20, 58);
  pop(); 
  //brillo 3
  push();
  noStroke() 
  translate(1147, 483)
  rotate(radians(150))
  rectMode(CENTER);
  rect(0,0, 20, 58);
  pop(); 
  rect(1155, 493,58,20)

  push();
  noStroke() 
  translate(1220, 522)
  rotate(radians(150))
  rectMode(CENTER);
  rect(0,0, 20, 58);
  pop(); 
  rect(1220, 540,58,20)

  push();
  noStroke() 
  translate(1279, 568)
  rotate(radians(150))
  rectMode(CENTER);
  rect(0,0, 20, 58);
  pop(); 
//brillo 4
push();
  noStroke() 
  translate(1347, 483)
  rotate(radians(150))
  rectMode(CENTER);
  rect(0,0, 20, 58);
  pop(); 
  rect(1355, 493,58,20)

//piso azul de debajo
stroke(0,255,0)
strokeWeight(2);
fill(29,44,102)
rect(-2,550, 1368, 100)

///////////CONSTRUCCION DE ESTRUCTURAS/////////////////////
//+++++++++++++++++PRIMERA ESTRUCTURA++++++++++++++++++++++
//-----------------------hielo-------------------------
//hielo izquierda primeros 2
strokeWeight(0.4);
stroke(2,33,85)
fill(71,172,237)
//bloque 1
rect(730, 395,32,65)
//bloque 2
rect(765, 395,32,65)
//pilar ala par de madera 1
rect(806, 335,13,125)
//bloque acostado
rect(728, 362,65,32)
//encima del acostado
rect(761, 295.5,32,65)
//pilar a la par de madera 2
rect(818, 180,13,125)
//pilar final acostado de primer edificio
rect(804, 167,135,13)
//cubos de hielo encima primer pilar
//1
rect(800, 135,30,30)
//2
rect(858, 135,30,30)
//3
rect(912, 135,30,30)
//pilar de hielo  parado alrededor de la madera 
//izquierdo un bloque abajo
rect(952, 262,32,65)
//izquierdo encima
rect(995, 230,32,65)
//derecho encima
rect(1078, 230,32,65)
//derecho un bloque abajo
rect(1119.5, 262,32,65)
//pilar acostado encima de los bloques
rect(985, 217,134,13)
//pilar parado encima del pilar acostado
//izquierdo
rect(988,91,13,125)
//derecho
rect(1103,91,13,125)


//pilar acostado encima para encerrar el cubo
rect(982, 77,134,13)
//cubos encima del pilar acostado
//1
rect(980, 46,30,30)
//2
rect(1035, 46,30,30)
//3
rect(1090, 46,30,30)
//FIN DE LA SEGUNDA ESTRUCTURA////////////////////////////////////////////////
//INICIO DE LA TERCERA ESTRUCTURA
//pilar a la par de la madera 1
rect(1304, 335,13,125)
//bloques de hasta la derecha
//bloque 1
rect(1324, 395,21.5,65)
//bloque 2
rect(1348, 395,21,65)
//bloque acostado encima
rect(1319.5, 361,45,32)
//rectangulo parado
rect(1332, 302,30,58)
//pilar de segundo piso derecho
rect(1304, 180,13,125)
//pilar acostado encima
rect(1192, 166,135,13)
//cubos encima del pilar
//1
rect(1190, 135,30,30)
//2
rect(1244, 135,30,30)
//3
rect(1295, 135,30,30)

//----------------------------------------madera--------------------------------------
//PRIMERA ESTRUCTURA
// pilar  a la par de hielo 1
strokeWeight(0.6);
stroke(108,17,8)
fill(197,114,19)
rect(900, 335,13,125)
//pilar acostado 1
rect(795, 321,135,13)
//2
rect(795, 306.5,135,13)
//pilar  a la par de hielo arriba
rect(912, 180,13,125)
strokeWeight(0);
//SEGUNDA ESTRUCTURA
//lado izquierdo del cerdo
//bloques acostados
//1
strokeWeight(0.6);
stroke(108,17,8)
rect(928, 428,65,32)
//2
rect(944, 395,65,32)
//pilar rodeando al cerdo
//izqquierda
rect(1010, 392,13,68)
//derecha
rect(1095, 392,13,68)
//bloques encima 
//cubo
rect(958, 362,32,32)
//rectangulito
rect(992, 375,32,17)
//pilar acostado arriba del cerdo
rect(992, 361,130,13)
//lado derecho del cerdo ////////////////
//rectangulo 1
rect(1125, 428,65,32)
//2
rect(1109, 395,65,32)
//bloques encima 
//cubo
rect(1124, 362,32,32)
//rectangulito
rect(1090, 375,32,17)
//fin de estructuras alrededor del cerdo
//inicio de segundo piso
//rectangulos acostados
//1 izquierdo
rect(1100, 329,65,32)
//2 derecho
rect(947, 329,65,32)
//rectangulos acostados encima de los acostados
//1 izquierdo
rect(986.2, 295.5,65,32)
//2 derecho
rect(1052.2, 295.5,65,32)
//pilar de madera  parados en el centro encima
rect(1036, 230,32,65)
//FIN DE LA SEGUNDA ESTRUCTURA////////////////////////////////////////
//INICIO DE LA TERCERA ESTRUCTURA
//pilar a la par del pilar de hielo 1
rect(1210, 335,13,125)
//pilar acostado 1
rect(1197, 321,135,13)
//2
rect(1197, 306.5,135,13)
//pilar a la par del pilar de hielo en segundo piso
rect(1210, 180,13,125)
//madera dentro del cristal
//rectangulo parado
rect(1036, 127,32,65)
//madera acostada
rect(1012, 190,80,26)
//*********************************PIEDRA***************************** 
fill(134,133,130)
//primer banco de piedras estructura 1
strokeWeight(0.7);
stroke(50)
//piedra 1
rect(839, 275,32,32)
//piedra 2
rect(874, 275,32,32)
//piedra 3
rect(857, 241.8,32,32)
//segundo banco de piedras estructura 2
//piedra 1
rect(1036, 94,32,32)

//tercer banco de piedras estructura 3
//piedra 1
rect(1229, 275,32,32)
//piedra 2
rect(1269, 275,32,32)
//piedra 3
rect(1249, 241.8,32,32)

//LADO IZQUIERDO DEL TERRENO
//RESORTERA

fill(197,114,19)
//PRIMER LADO A LA DERECHA
push();
noStroke()

//PILAR PARA RESORTERA
rect(320, 392,13,68)
//METODO PARA ANGULO DERECHO
translate(336,384)
rotate(radians(120))
rectMode(CENTER);
rect(0,0, 30, 10);

pop();

push();
noStroke()
translate(317,385)
rotate(1)
rectMode(CENTER);
rect(0,0, 30, 10);

pop(); 
//FIN DE ANGULOS PARA RESORTERA
//PILARES DE RESORTERA
//IZQUIERDO
push();
noStroke()
translate(305,342)
rotate(radians(170))
rectMode(CENTER);
rect(0,0, 13, 68);
pop(); 
//DERECHO
push();
noStroke()
translate(349,342)
rotate(radians(13))
rectMode(CENTER);
rect(0,0, 13, 68);
pop(); 

//CINTAS NEGRAS DE LA RESORTERA
//IZQUIERDO
push();
noStroke()
fill(54,28,7)
translate(304,336)
rotate(radians(170))
rectMode(CENTER);
rect(0,0, 13, 25);
pop(); 
//DERECHO
push();
noStroke()
fill(54,28,7)
translate(350.4,336)
rotate(radians(13))
rectMode(CENTER);
rect(0,0, 13, 25);
pop(); 
//SILLA PARA LANZAR DE LA RESORTERA
fill(54,28,7)
rect(319, 320,12,22)
//cintas que unen a la silla
//IZQUIERDA
push();
noStroke()
translate(316, 331)
rotate(radians(255))
rectMode(CENTER);
rect(0,0, 10, 19);
pop(); 
//DERECHA
push();
noStroke()
translate(336, 331)
rotate(radians(106))
rectMode(CENTER);
rect(0,0, 10, 19);
pop(); 
//PUNTOS DE VUELO DEL PAJARO
fill(255)
circle(275, 350,10)
circle(243, 369,7)
circle(367, 318,9)
circle(400, 306,10)
circle(436, 297,12)
circle(463, 290,5)
//brillito izquierdo
fill(230,230,230,80)
push();
noStroke()
translate(300, 313.5)
rotate(radians(170))
rectMode(CENTER);
ellipse(0,0, 15, 10);
pop(); 



//CERDITO 1...........................................................
stroke(0,0,0)
strokeWeight(0.8);
fill(0,230,0)
//orejas 
//derecha
circle(880,400,20)
fill(83,178,41)
strokeWeight(0);
circle(880,402,9)
strokeWeight(0.8);
//izquierda
fill(0,230,0)
circle(850,395,20)
fill(83,178,41)
strokeWeight(0);
circle(850,398,9)
strokeWeight(0.8);
fill(0,230,0)
//cabeza
//circle(860,427,70)
ellipse(860, 430, 70, 60);
strokeWeight(0);
fill(90,178,90)
//sombras del cerdito
//derecha
circle(881,433,22)
//izquierda
circle(838,433,22)
//nariz
ellipse(860, 439, 33, 25);
//ojos
strokeWeight(0.8);
//derecho
fill(255,255,255)
circle(882,431,22)
fill(0)
//pupila
circle(887,430,4)
//izquierdo
fill(255,255,255)
circle(837,430,22)
fill(0)
//pupila
circle(835,430,4)
//nariz
fill(165,232,15)
ellipse(860, 436, 33, 25);
fill(0)
ellipse(865, 436, 6, 9);
ellipse(855, 436, 5, 8);
//cejas
ellipse(836, 414, 7, 2);
ellipse(880, 414, 7, 2);

//CERDITO 2..................................................................
fill(0,230,0)
//cabeza
//circle(860,427,70)
ellipse(1060, 430, 70, 60);
strokeWeight(0);
fill(90,178,90)
//casco
//patillas de casco
//derecha
push();
fill(98,63,40)
translate(1095,428)
rotate(1)
rectMode(CENTER);
rect(0,0, 30, 10);

pop(); 
//izquierda
push();
fill(98,63,40)
translate(1024, 429)
rotate(2)
rectMode(CENTER);
rect(0,0, 30, 10);

pop(); 

//casco
fill(62,62,62)
arc(1060, 430, 42 * 2, 47 * 2, PI, TWO_PI);
//brillitos
fill(129,129,129,80)
ellipse(1060, 412, 70, 60);
fill(129,129,129,100)
ellipse(1068, 398, 20, 15);
fill(255,100)
ellipse(1070, 395, 12, 8);
//mitad de casco brillante
fill(129,129,129,80)
arc(1060, 418, 40 * 2, 35 * 2, PI, TWO_PI);
fill(90,178,90)

//sombras del cerdito
//ojo derech0
circle(1082,433,22)
//izquierda
circle(1037,433,22)
//nariz
ellipse(1060, 439, 33, 25);
//fin de sombras
//ojos
strokeWeight(0.8);
//izquierdo
fill(255,255,255)
circle(1037,431,22)
fill(0)
//pupila izq
circle(1035,430,4)
//derecho
fill(255,255,255)
circle(1082,430,22)
fill(0)
//pupila der
circle(1086,430,4)
//nariz
fill(165,232,15)
ellipse(1060, 436, 33, 25);
fill(0)
ellipse(1065, 436, 6, 9);
ellipse(1055, 436, 5, 8);
//cejas
ellipse(1036, 414, 7, 2);
ellipse(1081, 414, 7, 2);

//CERDITO 3..................................................................
//orejas 
//izquierda
fill(0,230,0)
circle(1250,401,20)
fill(83,178,41)
strokeWeight(0);
circle(1250,402,9)
strokeWeight(0.8);
//derecha
fill(0,230,0)
circle(1285,400,20)
fill(83,178,41)
strokeWeight(0);
circle(1285,402,9)
strokeWeight(0.8);
fill(0,230,0)
//cabeza
//circle(860,427,70)
ellipse(1265, 430, 70, 60);
strokeWeight(0);
fill(90,178,90)
//sombras del cerdito
//ojo derech0
circle(1287,433,22)
//izquierda
circle(1242,433,22)
//nariz
ellipse(1265, 439, 33, 25);
//fin de sombras
//ojos
strokeWeight(0.8);
//izquierdo
fill(255,255,255)
circle(1242,431,22)
fill(0)
//pupila izq
circle(1241,430,4)
//derecha
fill(255,255,255)
circle(1287,430,22)
fill(0)
//pupila der
circle(1291,430,4)
//nariz
fill(165,232,15)
ellipse(1265, 436, 33, 25);
fill(0)
ellipse(1270, 436, 6, 9);
ellipse(1260, 436, 5, 8);
//cejas
ellipse(1241, 414, 7, 2);
ellipse(1286, 414, 7, 2);

//YELLOW PAJARO AMARILLOO .......................................................
// O COMO SE LLAME GRR LELE PANCHA
//copete
image(copete,220,386,30,25)
//cola
image(cola,204,422,20,20)
//base triangular
fill(239,222,41)
triangle(210, 454, 269, 454, 239, 400);  
//brillo
push();
strokeWeight(0);
fill(255,255,255,100)
translate(244,416)
rotate(TWO_PI/2+37.4)
ellipse(0,0,6,10)
pop();
//ojo izquierdo
strokeWeight(1);
fill(255,255,255)
ellipse(235,436,13,11)
fill(0)
//ojo derecho
fill(255,255,255)
ellipse(252,436,13,11)
fill(0)
//pupila izquierda
circle(237, 436,4)
//pupila derecha
circle(253, 436,4)
//ceja izquierda
fill(171,102,14)
strokeWeight(.2);
push();
translate(234, 427)
rotate(TWO_PI/25)
rectMode(CENTER);
rect(0,0,16,5);

pop();
//ceja derecha
 fill(171,102,14)
strokeWeight(.2);
push();
translate(252, 428)
rotate(TWO_PI/-25)
rectMode(CENTER);
rect(0,0,16,5);

pop();
//panza
fill(255)
//medio circulo de arriba
arc(238,453, 45 , 16 , PI, TWO_PI); 

//pico triangulo de arriba
fill(255,173,0)
triangle(243,437,235,445,258,445);  
//pico triangulo de abajo
triangle(235,444,249,445,239,449)


//Red pajaro rojo omaicod.........................................................
//cuerpo base 
fill(213,6,46)

//copetito 1
strokeWeight(1.5);
push();
translate(520, 236)
rotate(TWO_PI/2)
rectMode(CENTER);
ellipse(0,0,20,10);

pop();
//copetito 2
strokeWeight(1.5);
push();
translate(533, 230)
rotate(TWO_PI/25)
rectMode(CENTER);
ellipse(0,0,20,10);

pop();

//cola 1
push();
strokeWeight(1.5);
fill(0)
translate(507, 258)
rotate(TWO_PI/10)
rectMode(CENTER);
rect(0,0,16,5);

pop();
//cola 2
push();
strokeWeight(1.5);
fill(0)
translate(502, 262)
rotate(TWO_PI/2)
rectMode(CENTER);
rect(0,0,16,5);

pop();
//cola 2
push();
strokeWeight(1.5);
fill(0)
translate(507, 267)
rotate(2.5)
rectMode(CENTER);
rect(0,0,16,5);

pop();
//cuerpo
strokeWeight(1);
ellipse(533, 261,56,57)
//panza
fill(215,200,162)
//medio circulo de arriba
arc(533,280, 40 , 20 , PI, TWO_PI); 
//parte de abajo
arc(533, 279.2, 40, 20, TWO_PI, PI);

//inicio de sombras
//ojo izquierdo
strokeWeight(1);
fill(255,255,255)
circle(532, 260,15)
fill(0)
//ojo derecho
fill(255,255,255)
circle(548, 260,15)
fill(0)
//pupila izquierda
circle(533, 260,4)
//pupila derecha
circle(547, 260,4)
//ceja izquierda
fill(0)
strokeWeight(1.5);
push();
translate(533, 252)
rotate(TWO_PI/25)
rectMode(CENTER);
rect(0,0,16,5);

pop();
//ceja derecha
fill(0)
strokeWeight(1.5);
push();
translate(550, 252)
rotate(TWO_PI/-25)
rectMode(CENTER);
rect(0,0,16,5);

pop();

//pico triangulo de arriba
fill(239,222,41)
triangle(539,261,531,271,554,272);  
//pico triangulo de abajo
triangle(531,272,549,272,539,279)

//azul pajaro azul repito pajaro azul nose como se llama.........................................................
//cuerpo base 
fill(102,169,195)

//copetito 1
strokeWeight(1.5);
push();
translate(139, 414)
rotate(TWO_PI/2)
rectMode(CENTER);
ellipse(0,0,20,10);

pop();
//copetito 2
strokeWeight(1.5);
push();
translate(146, 407)
rotate(TWO_PI/25)
rectMode(CENTER);
ellipse(0,0,20,10);

pop();

//cola 1
push();
strokeWeight(1.5);
fill(0)
translate(130, 428)
rotate(TWO_PI/10)
rectMode(CENTER);
rect(0,0,10,4);

pop();

//cola 2
push();
strokeWeight(1.5);
fill(0)
translate(132, 435)
rotate(2.5)
rectMode(CENTER);
rect(0,0,10,4);

pop();
//cuerpo
strokeWeight(1);
ellipse(150, 431,39,40)

//ojo izquierdo
strokeWeight(1);
fill(255,255,255)
circle(147, 430,13)
fill(0)
//ojo derecho
fill(255,255,255)
circle(161, 430,13)
fill(0)
//pupila izquierda
circle(149, 430,4)
//pupila derecha
circle(163, 430,4)
//ojeras
fill(205,78,41)
//ojera izquierda
arc(147, 432, 12, 12, TWO_PI, PI);
//ojera derecha
arc(161, 432, 12, 12, TWO_PI, PI);
//pico triangulo de arriba
fill(239,222,41)
triangle(154,432,147,438,165,436.5);  
//pico triangulo de abajo
triangle(147,438,153,442,160,437)

//texto
textSize(25);
fill(255);
text('SCORE:   8140', 1170, 30);

//ICONO DE PAUSA
//circulo
fill(240,219,32,200);
strokeWeight(1.5);
stroke(255)
circle(40,40,45)
//rectangulo 1 izquierda
strokeWeight(0);
fill(255,200);
rect(29,31,8,20)
//rectangulo 2 izquierda
strokeWeight(0);
fill(255,200);
rect(43,31,8,20)
//sombra
//medio circulo de arriba
fill(255,70);
arc(40,33, 40 , 30 , PI, TWO_PI); 

//ICONO DE REINICIAR
//circulo
fill(240,219,32,200);
strokeWeight(1.5);
stroke(255)
circle(100,40,45)
//reinicio
strokeWeight(3);
fill(255,70,0,0);
circle(100,40,30)
//flecha
fill(255);
triangle(108,36,118,36,114,45)
//sombra
//medio circulo de arriba
strokeWeight(0);
fill(255,70);
arc(100,33, 40 , 30 , PI, TWO_PI); 

image(mano,mouseX-70/2,mouseY-70/2,60,60)
noCursor()

}
function mousePressed(){
  
  if(musica.isPlaying()){
    musica.stop();
  }else {
    musica.play();
  }
}