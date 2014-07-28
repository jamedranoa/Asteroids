(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function(ship) {
    var vel = ship.vel.sum(Asteroids.Vector.fromPolar(ship.angle, Bullet.SPEED));

    Asteroids.MovingObject.call(
      this,
      new Asteroids.Vector(
        ship.pos.x % Asteroids.Game.DIM_X,
        ship.pos.y % Asteroids.Game.DIM_Y),
      vel,
      Bullet.RADIUS,
      Bullet.COLOR
    );
  };

  Bullet.inherits(Asteroids.MovingObject);

  Bullet.prototype.move = function() {
    this.pos = this.pos.sum(this.vel);
  };

  Bullet.prototype.offScreen = function () {
    return (this.pos.x < 0 || this.pos.x > Asteroids.Game.DIM_X) ||
      (this.pos.y < 0 || this.pos.y > Asteroids.Game.DIM_Y)
  };

  Bullet.RADIUS = 3;
  Bullet.COLOR = "white";
  Bullet.SPEED = 3;

}(this));