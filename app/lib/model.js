((game, models) => {

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

    this.render = (ctx) => {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = '#000';
        ctx.fillText(this.name, this.x, this.y);

        this.x += 1;
        if (this.x > 500) {
            this.x = 0;
        }
        };

    return this;
  }

}) (window.Game = window.Game || {},
  window.Game.Models = window.Game.Models || {});