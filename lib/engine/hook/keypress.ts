import {Scene} from "../scene";

export function keypress(e) {
    e = e || window.event;
    const charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    if (charCode) {
        Scene.elements.forEach(element => element.keystroke(String.fromCharCode(charCode)));
    }
}