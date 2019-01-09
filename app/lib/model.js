( (game, models) => {

  models.Entity = Entity;

  function Entity(name, x, y, w, h) {
    
    // Properties
    this.name = name
    this.x = x
    this.y = y
    this.width = w
    this.height = h

    // Methods

    this.move = (x, y) => {
      this.x += x;
      this.y += y;
      this.logPosition();
      return this
    }

    this.logPosition = () => console.log(
      `Player position is: x:${this.x}, y:${this.y}`
    )

    return this;
  }

}) (window.Game = window.Game || {},
  window.Game.Models = window.Game.Models || {});