(function(root) {
  var MovingObjects = root.MovingObjects = (root.MovingObjects || {});
  
  var MovingObject = MovingObjects.MovingObject = function(pos, vel,radius,color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  };
  
  var Vector = MovingObjects.Vector = function(x,y) {
    this.x = x;
    this.y = y;
  };
  
  Vector.prototype.sum = function (vector2) {
    return new Vector(this.x+vector2.x,this.y+vector2.y); 
  };
  
  Vector.prototype.distanceFrom = function (vector2) {
    return Math.sqrt(
      Math.pow((this.x - vector2.x), 2) + Math.pow(this.y-vector2.y), 2)
    ); 
  };

  MovingObject.prototype.move = function() {
    this.pos = pos.sum(vel)  
  };
  
  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    
    ctx.arc(
      this.pos.x,
      this.pos.y,
      this.radius,
      0,
      2 * Math.PI,
      true
    );
    
    ctx.fill();
  };
  
  MovingObject.prototype.isCollidedWith = function (movingObject) {
    return this.pos.distanceFrom(movingObject) <= 
      this.radius + movingObject.radius;
  };
})(this);
