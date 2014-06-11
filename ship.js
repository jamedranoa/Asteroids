(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  var Ship = Asteroids.Ship = function() {
    var pos = new Asteroids.Vector(
      Asteroids.Game.DIM_X/2, Asteroids.Game.DIM_Y/2);
    var vel = new Asteroids.Vector(0,0);
    
    Asteroids.MovingObject.call(this, pos, vel, Ship.RADIUS, Ship.COLOR);
    
    this.angle = -1*Math.PI/2;
  };
  
  Ship.RADIUS = 5;
  Ship.COLOR = "blue";
  
  Ship.inherits(Asteroids.MovingObject);
}(this));