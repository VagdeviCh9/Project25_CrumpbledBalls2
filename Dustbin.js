
class Dustbin{

    constructor(x,y,width,height){

        var options = {
            isStatic :  true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
        this.width = width;
        this.height = height;

        if(this.body.position.x === 675 ){
            this.image = loadImage("dustbingreen.png");
        }
       
    }

    display(){
        push()
         rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y,this.width,this.height);
        if(this.body.position.x === 675 ){
            imageMode(CENTER);
            image(this.image, this.body.position.x, this.body.position.y-90,200,200);
        }
        
        pop()
    }
}