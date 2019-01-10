import {Entity} from "./entity";
import {Bounds} from "./bounds";

export class Player extends Entity {

  constructor(public name:string, bounds: Bounds) {
      super(bounds);
  }

  // Keyboard Events Specific to Player
  keystroke(stroke: string) {
    switch(stroke) {
      case "w":
        this.bounds.y-= this.bounds.s;
        break;
      case "s" :
        this.bounds.y+= this.bounds.s;
        break;
      case "a" :
        this.bounds.x-= this.bounds.s;
        break;
      case "d" :
        this.bounds.x+= this.bounds.s;
        break;
      }
  }

  // Render Method Specific to Player Entity
  render(ctx: any) {
      ctx.fillStyle = '#000';
      ctx.fillRect(this.bounds.x, this.bounds.y, this.bounds.w, this.bounds.h);

      ctx.fillStyle = 'red';
      ctx.fillText(this.name, this.bounds.x, this.bounds.y);
  }
}