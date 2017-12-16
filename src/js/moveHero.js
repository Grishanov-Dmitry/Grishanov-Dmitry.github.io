/**
 * Created by Dima on 06.12.2017.
 */
import constructorOfEntities from './constructorOfEntities';
import {spriteMarioUrl, context, sprite3Url} from './consts';
import {counter} from './index';
import {lastPressButton} from './keysEvents';
import {crashMarioWithBrick, checkTouchGround} from './changeCrash';
import {moveRecRight, moveRecLeft, camera} from './camera';

export let animation = true;

export const marioHero = {};

export const drawMario = function () {
    marioHero.goUp = false;
    marioHero.goDown = false;
    marioHero.canGoRight = true;
    marioHero.canGoLeft = true;
    marioHero.coordMario = [10,550]; // Mario's coordinates in start game. After - current coordinates.
    marioHero.coordMarioInMamory = []; // Mario's coordinates in jump. 0 - top coord mario jump. 1 - coord when hero most return
    marioHero.coordOnsprite = [102, 4];
    marioHero.mario = new constructorOfEntities(spriteMarioUrl, marioHero.coordOnsprite[0], marioHero.coordOnsprite[1], 18, 30, marioHero.coordMario, 45, 50);
    marioHero.mario.define();

};

export const stopMario = function () {

    context.clearRect(marioHero.coordMario[0], marioHero.coordMario[1] , 45, 50); // Here maybe a mistake
    marioHero.mario.posX = 102;
    marioHero.mario.define();

};

export const moveMarioRight = function () {


    if(marioHero.coordMario[0] > 700) {
        moveRecRight();
    }

    crashMarioWithBrick();

    marioHero.canGoRight ?  marioHero.coordMario[0] += 3 : marioHero.coordMario[0] += 0;
    context.clearRect(marioHero.coordMario[0] - 3, marioHero.coordMario[1], 45, 50);
    marioHero.mario.define();

    if(counter % 3 === 0) {
        (marioHero.mario.posX === 156) ? marioHero.mario.posX = 120 : marioHero.mario.posX += 18;
    }

};

export const moveMarioLeft = function () {

    if(marioHero.coordMario[0] - camera.x - 300) {
        moveRecLeft();
    }

    crashMarioWithBrick();

    marioHero.canGoLeft ?  marioHero.coordMario[0] -= 3 : marioHero.coordMario[0] += 0;
    context.clearRect(marioHero.coordMario[0] + 2, marioHero.coordMario[1], 45, 50);
    marioHero.mario.define();

    if(counter % 3 === 0) {
        (marioHero.mario.posX === 48) ? marioHero.mario.posX = 84 : marioHero.mario.posX -= 18;
    }
};

export const jumpMario = function () {

    if(counter % 3 === 0) {
        context.clearRect(marioHero.coordMario[0], marioHero.coordMario[1], 45, 50);

        if(marioHero.coordMario[1] != marioHero.coordMarioInMamory[0]){
            marioHero.coordMario[1] -= 10;
        } else {
            marioHero.goDown = true;
            marioHero.goUp = false;
        }

        marioHero.mario.define();
    }
};

export const mariodown = function () {

    if(counter % 3 === 0) {
        context.clearRect(marioHero.coordMario[0], marioHero.coordMario[1] - 5, 45, 50);
        marioHero.coordMario[1] += 10;
        marioHero.mario.define();
    }
};

export const fallMario = function () {
    animation = false;

    marioHero.coordOnsprite = [6, 113];
    marioHero.mario = new constructorOfEntities(spriteMarioUrl, marioHero.coordOnsprite[0], marioHero.coordOnsprite[1], 24, 32, marioHero.coordMario, 50, 50);
    context.clearRect(marioHero.coordMario[0] - 5, marioHero.coordMario[1], 45, 50);
    marioHero.mario.define();
};
