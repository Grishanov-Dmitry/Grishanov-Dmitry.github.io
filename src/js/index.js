import './../sass/styles.scss';
import {buttonStart, buttonFullScreen, context} from './consts';
import {cleanWindow, showCanvas, launchFullScreen} from './logic';
import {loadImage} from './loaders';
import {mario} from './objectOfEntities';

let lastTime = undefined;

const startGame = function () {
    cleanWindow();
    showCanvas();
    // mainLoop(); It's need to show
};

const requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

//It's a permanent loop
const mainLoop = function () {
    let now = Date.now();
    debugger;
    let dt = (now - lastTime) / 1000.0;

    // update(dt);
    // render();

    lastTime = now;
    requestAnimFrame(mainLoop);
};

mainLoop();

buttonStart.addEventListener('click', startGame);
buttonFullScreen.addEventListener('click', launchFullScreen);


