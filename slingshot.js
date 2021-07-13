class SlingShot{
    constructor(pointA,pointB){
       
        var options ={
            pointA:pointA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        } 
        this.pointB= pointB
        this.SlingShot=Constraint.create(options);
        this.image1=loadImage('sprites/sling1.png');
        this.image2=loadImage('sprites/sling2.png');
        this.image3=loadImage('sprites/sling3.png');
        World.add(world,this.SlingShot);
    }
    fly(){
        this.SlingShot.bodyA=null
    }
    display(){
       image(this.image1,200,20)
       image(this.image2,170,20)
       

        var pointA=this.SlingShot.pointA.position
        var pointB=this.pointB
        strokeWeight(6);
        if (pointA.x<220){
            line(pointA.x-20,pointA.y,pointB.x-10,pointB.y)
            line(pointA.x-20,pointA.y,pointB.x+30,pointB.y)
            image(this.image3,pointA.x-30,pointA.y-10,15,30)
        }
        else{
            line(pointA.x+25,pointA.y,pointB.x-10,pointB.y)
            line(pointA.x+25,pointA.y,pointB.x+30,pointB.y)
            image(this.image3,pointA.x+25,pointA.y-10,15,30)
        }
        

       
    }
   
   
}