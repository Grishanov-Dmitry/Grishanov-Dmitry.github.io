import './../sass/styles.scss';
import {buttonStart, buttonFullScreen, context} from './consts';
import {cleanWindow, showCanvas, launchFullScreen} from './logic';
import {loadImage} from './loaders';

const startGame = function () {
    cleanWindow();
    showCanvas();
};



buttonStart.addEventListener('click', startGame);
buttonFullScreen.addEventListener('click', launchFullScreen);


