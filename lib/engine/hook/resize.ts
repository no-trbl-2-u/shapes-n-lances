import {canvas} from "..";
import {log} from "../../common";

export function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    log("ENGINE::resize",
        `canvas.width  = ${canvas.width}`,
        `canvas.height = ${canvas.height}`
    );
}