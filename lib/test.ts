import {Player} from "./model/player";
import {Bounds} from "./model/bounds";
import {Scene} from "./engine/scene";

export function prep() {
    const player = new Player("DR", new Bounds(30, 30, 50, 50));

    Scene.elements.push(player);
}