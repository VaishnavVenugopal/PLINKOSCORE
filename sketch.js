var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];

var divisionHeight=300;
var score =0;
var turn =0;
var gameState="start"
var particle;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(30)
 text("Score : "+score,20,30);
 text("500",20,530)
 text("500",90,530)
 text("500",170,530);
 text("500",250,530);
 text("100",330,530);
 text("100",410,530);
 text("200",490,530);
 text("300",570,530);
 text("200",650,530);
 text("200",730,530)
  Engine.update(engine);
 
  if(gameState=="start"){
   
    for (var i = 0; i < plinkos.length; i++) {
     
      plinkos[i].display();
    }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particle!=null){
    particle.display();
    
    if(particle.body.position.y>760){
      if(particle.body.position.x<300){
        score=score+500;
        particle=null;
        if(count>=5)gameState="end";
        
      }
    }
    else{
      score=score+100;
    }
  }
  if(turn==5){
    gameState = "end";
   
  }

}
else if(gameState=="end"){
  textSize(40)
  textFont("italic")
  text("GAMEOVER!",350,350);
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
  }
}
  
}

  

function mousePressed(){

  if(gameState!=="end"){

   
    score++;
    particle=new Particle(mouseX,10,10,10);
  }
  turn=turn+1;
}
  
