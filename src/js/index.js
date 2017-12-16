import './../sass/styles.scss';
import {buttonStart, buttonFullScreen, context, allSpritesUrl, bgInGame, spriteMarioUrl, canvas} from './consts';
import {cleanWindow, showCanvas, launchFullScreen, createBg, update} from './logic';
import {loadImage, create} from './loaders';
import {mario, moveMarioRight, drawMario, animation, jumpMario, mariodown, marioHero, marioDownUntilGround} from './moveHero';
import {imagesLoader,hideLoading} from './imagesLoader';
import constructorOfEntities from './constructorOfEntities';
import {keys, checkKeys, keysDown, lastPressButton} from './keysEvents';
import {drawMap, moveBrickStar} from './drawMap';
import {moveRec} from './camera';
import {enemies,startMoveEnemies} from './enemies';
import {crashOfEntities, checkTouchGround, crashWithCoin, crashWithStar} from './changeCrash';

export let counter = 0;

let canvasPosLeft = canvas.style.left;
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
    checkKeys();
    // crashOfEntities();
    crashWithCoin();
    crashWithStar();
    if(marioHero.goUp)  jumpMario();
    if(marioHero.goDown) mariodown();
    checkTouchGround();
    // console.log(canvasPosLeft);
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




