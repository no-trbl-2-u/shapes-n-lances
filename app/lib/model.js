((game, models) => {

  models.Entity = Entity;

  function Entity(name, x, y, w, h, s) {

    // Properties
    this.name = name
    this.x = x
    this.y = y
    this.width = w
    this.height = h
    this.speed = s

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

    // ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
    this.render = (ctx) => {

      ctx.beginPath();
      // NAME
      ctx.fillStyle = "white";

      // Circle Shape/ Position
      ctx.arc(this.x, this.y, 50, 0, 2 * Math.PI)
      ctx.stroke();
      ctx.fillStyle = "white";
      ctx.fill();

      ctx.fillText(this.name, this.x, this.y);
    };


    this.event = (char) => {
      if (char === "s") {
        this.y += this.speed;
      }
      if (char === "w") {
        this.y -= this.speed;
      }
      if (char === "a") {
        this.x -= this.speed;
      }
      if (char === "d") {
        this.x += this.speed;
      }
    };

    return this;
  }

})(window.Game = window.Game || {},
    window.Game.Models = window.Game.Models || {});