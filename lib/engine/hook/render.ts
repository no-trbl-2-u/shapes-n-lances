import {
    canvas,
    context,
    state
} from "..";

import {Scene} from "../scene";

export function render() {
    state.frame ++;

    requestAnimationFrame(render);

    context.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    Scene.elements.forEach(element => element.render(context));

    context.fillStyle = '#000';

    context.fillText('snl', 10, 20);
    context.fillText('frame: ' + `${state.frame}`.padStart(10, "0"), 10, canvas.height - 20);
}
