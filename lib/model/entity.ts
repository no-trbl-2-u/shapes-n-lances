import {Bounds} from "./bounds";

export abstract class Entity {
    constructor(public bounds: Bounds) {
    }

    abstract render(ctx: any);
    abstract keystroke(stroke: string);
}
