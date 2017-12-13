import './../sass/styles.scss';
import {buttonStart, buttonFullScreen, context, allSpritesUrl, bgInGame, spriteMarioUrl} from './consts';
import {cleanWindow, showCanvas, launchFullScreen, createBg, update} from './logic';
import {loadImage, create} from './loaders';
import {mario, moveMarioRight, drawMario, animation, jumpMario, mariodown} from './moveHero';
import {imagesLoader,hideLoading} from './imagesLoader';
import constructorOfEntities from './constructorOfEntities';
import {keys, jumpingUp, jumpingDown} from './keysEvents';
import {drawMap, moveBrickStar} from './drawMap';
import {moveRec} from './camera';
import {enemies,startMoveEnemies} from './enemies';
import {crashOfEntities} from './crashOfEntities';

export let counter = 0;


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
    if(!animation) return false;
    counter === 24 ? counter = 1 : counter++;
    startMoveEnemies();
    crashOfEntities();
    if(jumpingUp)  jumpMario();
    if(jumpingDown) mariodown();
    // console.log(counter);
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




