import './../sass/styles.scss';
import {buttonStart, buttonFullScreen} from './variables';
import {cleanWindow, showCanvas, launchFullScreen} from './logic';

const startGame = function () {
    cleanWindow();
    showCanvas();
};



buttonStart.addEventListener('click', startGame);
buttonFullScreen.addEventListener('click', launchFullScreen);
