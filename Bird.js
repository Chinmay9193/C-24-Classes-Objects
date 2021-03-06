class Bird{
    //objects have properties and functions
    //properties in a class(blueprint) is mentioned inside constructor()
    constructor(x,y){
        var options = {
            restitution: 0.8,
            density: 1.5,
            friction: 1.0
          }
          this.body = Bodies.rectangle(x,y,50,50,options);
          this.width = 50;
          this.height = 50;
          World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
    
        var angle = this.body.angle;
        push();
        angleMode(RADIANS);
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3)
        stroke("blue")
        fill("red")
        rect(0,0,this.width,this.height)
        pop();
    }

}