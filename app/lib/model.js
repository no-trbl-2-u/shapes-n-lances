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

        // ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
        this.render = (ctx) => {

            ctx.beginPath();
            ctx.fillStyle = "white";
            // ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.arc(100, 75, 50, 0, 2 * Math.PI)
            ctx.stroke();
            ctx.fillStyle = '#000';

            ctx.fillText(this.name, this.x, this.y);

            this.x += 1;
            if (this.x > 500) {
                this.x = 0;
            }
        };


        this.event = (char) => {
            if (char === "s") {
                this.y++;
            }
            if (char === "w") {
                this.y--;
            }
        };

        return this;
    }

})(window.Game = window.Game || {},
    window.Game.Models = window.Game.Models || {});