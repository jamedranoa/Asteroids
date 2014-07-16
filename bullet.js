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

  Bullet.RADIUS = 3;
  Bullet.COLOR = "black";
  Bullet.SPEED = 3;

  Asteroids.Bullet.inherits(Asteroids.MovingObject);
}(this));