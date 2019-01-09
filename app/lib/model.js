( (game, models) => {

    models.Entity = Entity;

    function Entity(x, y, w, h) {
        return {
            x,
            y,
            w,
            h,

            move(x, y) {
                this.x += x;
                this.y += y;

                return this;
            },

            dance() {
                return this
                    .move(this.w, -this.h)
                    .move(-this.w, this.h);
            }
        }
    }

}) (window.Game = window.Game || {},
    window.Game.Models = window.Game.Models || {});