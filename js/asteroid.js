(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function() {
    var randomAngle = Math.random()*2*Math.PI;

    var pos = new Asteroids.Vector(
      Math.random() * (Asteroids.Game.DIM_X),
      Math.random() * (Asteroids.Game.DIM_Y)
    );
    var vel = Asteroids.Vector.fromPolar(randomAngle,1);
    var radius = (Math.random() * 5) + 6.8;

    Asteroids.MovingObject.call(this, pos, vel, radius, Asteroid.COLOR)
  };

  Asteroid.COLOR = "#52527A";

  Asteroid.inherits(Asteroids.MovingObject);




}(this));