const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world
var man_running, man, thunder
var umbrella
var drops=[]

function preload(){
man_running = loadAnimation('Images/walking_1.png','Images/walking_2.png','Images/walking_3.png','Images/walking_4.png','Images/walking_5.png','Images/walking_6.png','Images/walking_7.png')
thunder= loadAnimation('Images/thunderbolt/1.png','Images/thunderbolt/2.png','Images/thunderbolt/3.png','Images/thunderbolt/4.png')
}

function setup(){
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;
    man=createSprite(200,450,200,500)
    umbrella= new Umbrella(man.x,man.y-25) 
    man.scale=0.4
    man.addAnimation("run",man_running)
    if(frameCount%100===0){
        for(var i =0; i<100; i++){
            drops.push(new Drops(random(0,400),random(0,600),5))
        }
    }
    
}

function draw(){
    Engine.update(engine)
    background(0)
    for(var i=0;i<100;i++){
        drops[i].display();
        drops[i].update();
    }
    umbrella.display();
    spawnThunder();
  drawSprites();
}   

function keyPressed(){
    if(keyIsDown(RIGHT_ARROW)){
        Matter.Body.setPosition(umbrella.body,{x:umbrella.body.position.x+4, y:umbrella.body.position.y})
        man.x=man.x+4
    }   
}
function spawnThunder(){
    if(frameCount%50===0){
        var t = createSprite(random(0,400),50,10,10)
        t.addAnimation('lightning',thunder);
        t.lifetime=50
    }
}