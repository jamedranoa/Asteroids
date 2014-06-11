(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  var Bullet = Asteroids.Bullet = function(ship) {
    var vel = ship.vel.sum(Asteroids.Vector.fromPolar(ship.angle, Bullet.SPEED));
    
    Asteroids.MovingObject.call(this, ship.pos, vel, Bullet.RADIUS, Bullet.COLOR);
  };
  
  Bullet.RADIUS = 3;
  Bullet.COLOR = "black";
  Bullet.SPEED = 3;
  
  Asteroids.Bullet.inherits(Asteroids.MovingObject);
}(this));