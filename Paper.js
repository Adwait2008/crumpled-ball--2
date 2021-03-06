class Paper {
    constructor(x,y,r) {
        var options = {
            isStatic: false,
            restitution: 0.1,
            friction:100,
            density:1.2
        }
        this.r=r
        
        this.body = Bodies.circle (x,y,r, options);
        this.image = loadImage("paper.png");

        World.add(world, this.body);
    }
    display(){
        
        var paperpos=this.body.position;

        push()
        translate(paperpos.x,paperpos.y)
        ellipseMode(RADIUS);
        rectMode()

        fill(255);
        imageMode(CENTER);

        image(this.image,0,0,2*this.r,2*this.r);
        pop()
    }       
};