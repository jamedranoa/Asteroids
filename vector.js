(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  var Vector = Asteroids.Vector = function(x,y) {
    this.x = x;
    this.y = y;
  };
  
  Vector.prototype.sum = function (vector2) {
    return new Vector(this.x+vector2.x,this.y+vector2.y); 
  };
  
  Vector.prototype.distanceFrom = function (vector2) {
    return Math.sqrt(
      Math.pow((this.x - vector2.x), 2) + Math.pow(this.y-vector2.y, 2)
    );
  };
  
  Vector.fromPolar = function(angle, radius) {
    return new Vector(
      radius * Math.cos(angle), radius * Math.sin(angle)
    );
  };
  
  Vector.prototype.times = function(multiplier) {
    return new Vector(this.x * multiplier, this.y * multiplier);
  };
}(this));
