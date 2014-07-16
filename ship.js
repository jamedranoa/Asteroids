(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function() {
    var pos = new Asteroids.Vector(
      Asteroids.Game.DIM_X/2, Asteroids.Game.DIM_Y/2);
    var vel = new Asteroids.Vector(0,0);

    Asteroids.MovingObject.call(this, pos, vel, Ship.RADIUS, Ship.COLOR);

    this.angle = -1*Math.PI/2;
  };

  Ship.inherits(Asteroids.MovingObject);

  Ship.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos.x,
      this.pos.y,
      this.radius,
      this.angle + Math.PI/2,
      this.angle - Math.PI/2,
      true
    );

    ctx.fill();
  };

  Ship.RADIUS = 5;
  Ship.COLOR = "blue";
}(this));