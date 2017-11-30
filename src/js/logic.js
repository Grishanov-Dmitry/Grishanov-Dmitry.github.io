/**
 * Created by Dima on 30.11.2017.
 */

import {wrapper, canvas, context, buttonFullScreen} from './variables';


export const cleanWindow = function () {
    wrapper.classList.add('displayNone');
};

export const showCanvas = function () {
    canvas.classList.add('displayBlock');
};

export const launchFullScreen = function () {
    if(canvas.requestFullScreen) {
        canvas.requestFullScreen();
    } else if(canvas.mozRequestFullScreen) {
        canvas.mozRequestFullScreen();
    } else if(canvas.webkitRequestFullScreen) {
        canvas.webkitRequestFullScreen();
    }
};
