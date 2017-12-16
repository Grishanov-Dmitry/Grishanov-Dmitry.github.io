/**
 * Created by Dima on 30.11.2017.
 */

import {wrapper, canvas, context, buttonFullScreen, pattern, bgInGame, canvasWidth, canvasHeight, starsCounter, coinCounter} from './consts';
import {counter} from './index';


export const cleanWindow = function () {
    wrapper.classList.add('displayNone');
    coinCounter.classList.add('displayBlock');
    starsCounter.classList.add('displayBlock');
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

export const showLoading = function () {
    loadingWindiw.classList.add('displayBlock');
};

export const hideLoading = function () {
    loadingWindiw.classList.toggle('displayBlock');
};




























// let gameTime = 0;
//
// export const update = function (dt) {
//     gameTime += dt;
//     console.log(gameTime);
// };





















// export const createBg = function () {
//     let image = new Image();
//     image.src = bgInGame;
//     const pattern = context.createPattern(image, 'no-repeat');
//     context.fillStyle = pattern;
//     context.fillRect(0, 0, canvasWidth, canvasHeight);
// };

