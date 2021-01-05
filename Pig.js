class Pig{
    //objects have properties and functions
    //properties in a class(blueprint) is mentioned inside constructor()
    constructor(x,y){
        var options = {
            restitution: 0.8,
            density: 1.0,
            friction: 0.3
          }
          this.body = Bodies.rectangle(x,y,50,50,options);
          this.width = 50;
          this.height = 50;
          World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        angleMode(RADIANS);
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill('green')
        rect(0,0,this.width,this.height)
        pop();
    }

}