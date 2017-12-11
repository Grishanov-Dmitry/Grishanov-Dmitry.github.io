/**
 * Created by Dima on 10.12.2017.
 */
import {context} from './consts';


export const camera = {
    x: 0,
    y: 0,

    move: function(x, y) {
        this.x += x;
        this.y += y;
    }
};

let x = 100;
let y = 50;

const rect = function (x, y, w, h, color) {
    context.fillStyle = color;
    context.fillRect(-camera.x + x,-camera.y + y, w, h);
};

export const moveRec = function () {
    context.clearRect(x, 100, 100, 100);
    rect(x, 100, 100, 100, 'green');
    camera.move(-2, 0);
};
