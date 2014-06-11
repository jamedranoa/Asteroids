(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});
  
  var Game = Asteroids.Game = function(ctx) {
    this.asteroids = [];
    this.ship = new Asteroids.Ship();
    this.bullets = [];
        
    this.ctx = ctx;
    this.xDim = Game.DIM_X;
    this.yDim = Game.DIM_Y;
    for (var i = 0; i < 0; i++) {
      this.asteroids.push(new Asteroids.Asteroid());
    };
  };
  
  Game.prototype.movingObjects = function () {
    return this.asteroids.concat(this.bullets).concat([this.ship])
  };
  
  Game.DIM_X = 1000;
  Game.DIM_Y = 500;
  
  Game.prototype.draw = function() {
    var ctx = this.ctx;
    ctx.clearRect(0, 0, this.xDim, this.yDim);
    
    this.movingObjects().forEach(function(movingObj){
      movingObj.draw(ctx);
    });
  };
  
  Game.prototype.move = function () {
    this.movingObjects().forEach(function(movingObj){
      movingObj.move();
    });
  };
  
  Game.prototype.step = function () {    
    if (key.isPressed("up")) {
      this.ship.vel = this.ship.vel.sum(
        Asteroids.Vector.fromPolar(this.ship.angle, 0.01));
    }
    
    if (key.isPressed("down")) {
      this.ship.vel = this.ship.vel.sum(
        Asteroids.Vector.fromPolar(this.ship.angle, -0.01));
    }
    
    if (key.isPressed("left")) {
      this.ship.angle -= .01;
    }
    
    if (key.isPressed("right")) {
      this.ship.angle += .01;
    }
    
    var game = this;
    
    key("space", function() {
      game.bullets.push(new Asteroids.Bullet(game.ship));
    });
    
    this.move();
    this.draw();
  };
  
  Game.prototype.checkCollisions = function (myVar) {
    var game = this;
    this.asteroids.forEach(function(astr, i){
      if (astr.isCollidedWith(game.ship)) {
        alert("You Lose!!");
        game.stop(myVar);
      }
      game.bullets.forEach(function(bullet) {
        if (astr.isCollidedWith(bullet)) {
          game.asteroids.splice(i,1);
        }
      })
    })
  };
  
  Game.prototype.stop = function (myVar) {
    clearInterval(myVar);
  };
  
  Game.prototype.start = function () {
    var game = this;
    var inter = window.setInterval(function () {gameFunc()}, 10);
    
    gameFunc = function () {
      game.step();
      game.checkCollisions(inter);
    };
    
    
  };
}(this));