class Paper{

    constructor(){

        var options = {
            isStatic :  false,
            restitution : 0.1,
            friction : 0.3,
            density: 1.2
        }
        this.body = Bodies.circle(50,600,70,options);
        this.image = loadImage("paper.png")
        World.add(world, this.body);
    }

    display(){
        push()
        imageMode(CENTER)
        image(this.image,this.body.position.x, this.body.position.y, 70,70)
        //ellipseMode(RADIUS);
        //ellipse(this.body.position.x, this.body.position.y,20,20);
        pop()
        
    }
}