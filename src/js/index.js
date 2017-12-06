import './../sass/styles.scss';
import {buttonStart, buttonFullScreen, context, allSpritesUrl, bgInGame, spriteMarioUrl} from './consts';
import {cleanWindow, showCanvas, launchFullScreen, } from './logic';
import {loadImage} from './loaders';
import {mario} from './objectOfEntities';
import {imagesLoader,hideLoading} from './imagesLoader';
import constructorOfEntities from './constructorOfEntities';

let lastTime = undefined;



const startGame = function () {
    cleanWindow();
    imagesLoader(allSpritesUrl)
        .then(
            hideLoading(),
            (reason) => alert(reason + 'ошибка') // To change after
        );

    showCanvas();
    // mario.define();
    // mainLoop(); It's need to show
};

startGame(); // Delete after connect the button Start

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
    let dt = (now - lastTime) / 1000.0;

    // update(dt);
    // render();

    lastTime = now;
    requestAnimFrame(mainLoop);
};

mainLoop();

buttonStart.addEventListener('click', startGame);
buttonFullScreen.addEventListener('click', launchFullScreen);


