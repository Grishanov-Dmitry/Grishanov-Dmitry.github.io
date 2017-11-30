import './../sass/styles.scss';
import {buttonStart} from './variables';
import {cleanWindow, showCanvas} from './logic';

const startGame = function () {
    cleanWindow();
    showCanvas();
};



buttonStart.addEventListener('click', startGame);
requestAnimationFrame()
