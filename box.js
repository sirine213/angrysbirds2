class Boites {
  constructor(x, y, w, h) {
    var options={
      restitution:0.8,
      density:1,
      friction:1
    }
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x, y, w, h,options);
    this.image=loadImage("sprites/wood1.png")
    World.add(world, this.body);
  
  }
  display() {
    var angle=this.body.angle
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(angle*40);
    imageMode(CENTER)
    image(this.image,0,0,this.w,this.h);
    pop()
  }
}
