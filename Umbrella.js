class Umbrella{
    constructor(x,y){
        var options={
            restitution:0.1,
            friction:0.01,
            density:0.1,
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,50,200,options)
        World.add(world,this.body)
        }
        
        
        display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0, 30,30);
            pop();
          }
    }
