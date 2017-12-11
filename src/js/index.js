import './../sass/styles.scss';
import {buttonStart, buttonFullScreen, context, allSpritesUrl, bgInGame, spriteMarioUrl} from './consts';
import {cleanWindow, showCanvas, launchFullScreen, createBg, update} from './logic';
import {loadImage, create} from './loaders';
import {mario, moveMarioRight, drawMario} from './moveEntity';
import {imagesLoader,hideLoading} from './imagesLoader';
import constructorOfEntities from './constructorOfEntities';
import {keys} from './keysEvents';
import {drawMap, moveBrickStar} from './drawMap';
import {moveRec} from './camera';

export let counter = 0;
// create();
// alert();


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
    counter === 24 ? counter = 1 : counter++;
    moveBrickStar();
    // moveRec();
    // drawAllElem();
    requestAnimFrame(mainLoop);
};

// Game starts after press buttonStart
const startGame = function () {
    cleanWindow();
    imagesLoader(allSpritesUrl)
        .then(() => showCanvas())
        .then(() => drawMap())
        .then(() => drawMario())
        .then(() => mainLoop());
};


buttonStart.addEventListener('click', startGame);
buttonFullScreen.addEventListener('click', launchFullScreen);


