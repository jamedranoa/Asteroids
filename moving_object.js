(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var MovingObject = Asteroids.MovingObject = function(pos, vel,radius,color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  };

  MovingObject.prototype.move = function() {
    DIM_X = Asteroids.Game.DIM_X
    DIM_Y = Asteroids.Game.DIM_Y
    this.pos = this.pos.sum(this.vel);
    this.pos.x = ((this.pos.x % DIM_X) + DIM_X) % DIM_X;
    this.pos.y = ((this.pos.y % DIM_Y) + DIM_Y) % DIM_Y;
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
    return (this.pos.distanceFrom(movingObject.pos) <=
      this.radius + movingObject.radius);
  };


})(this);

Function.prototype.inherits = function (Super) {
  function Surrogate(){};
  Surrogate.prototype = Super.prototype
  this.prototype = new Surrogate();
};