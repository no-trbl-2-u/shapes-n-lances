import {resize} from "./hook/resize";
import {keypress} from "./hook/keypress";

export const canvas: any = document.getElementById('canvas');
export const context = canvas.getContext('2d');

export const state = {
    get time() {
        return Date.now()
    },
    frame: 0
};

export const boot = async () => {
    resize();

    window.addEventListener(
        'resize',
        resize,
        false
    );

    document.onkeypress = keypress;
};
