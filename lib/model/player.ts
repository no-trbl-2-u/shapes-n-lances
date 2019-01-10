import {Entity} from "./entity";
import {Bounds} from "./bounds";

export class Player extends Entity {

    constructor(public name:string,
                bounds: Bounds) {
        super(bounds);
    }

    keystroke(stroke: string) {
        switch(stroke) {
            case "w":
                this.bounds.y--;
                break;
            case "s":
                this.bounds.y++;
                break;
        }
    }

    render(ctx: any) {
        ctx.fillStyle = '#000';
        ctx.fillRect(this.bounds.x, this.bounds.y, this.bounds.w, this.bounds.h);

        ctx.fillStyle = 'red';
        ctx.fillText(this.name, this.bounds.x, this.bounds.y);
    }

}