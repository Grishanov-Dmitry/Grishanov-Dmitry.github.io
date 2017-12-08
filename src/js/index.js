import './../sass/styles.scss';
import {buttonStart, buttonFullScreen, context, allSpritesUrl, bgInGame, spriteMarioUrl, counter} from './consts';
import {cleanWindow, showCanvas, launchFullScreen, createBg, update} from './logic';
// import {loadImage} from './loaders';
import {mario, drawAllElem} from './objectOfEntities';
import {imagesLoader,hideLoading} from './imagesLoader';
import constructorOfEntities from './constructorOfEntities';
import {keys} from './keys';

var lastTime;

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
    count++;
    let now = Date.now();
    let dt = (now - lastTime) / 1000.0;
    // drawAllElem();
    // update(dt);
    // render();
    // console.log('loop');
    lastTime = now;
    requestAnimFrame(mainLoop);
};

// Game starts after press buttonStart
const startGame = function () {
    cleanWindow();
    imagesLoader(allSpritesUrl)
        .then(() => showCanvas())
        .then(() => drawAllElem())
        .then(() => mainLoop());


};


buttonStart.addEventListener('click', startGame);
buttonFullScreen.addEventListener('click', launchFullScreen);


