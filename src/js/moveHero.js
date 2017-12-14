/**
 * Created by Dima on 06.12.2017.
 */
import constructorOfEntities from './constructorOfEntities';
import {spriteMarioUrl, context, sprite3Url} from './consts';
import {counter} from './index';
import {jumpingFalse, jumpingDownFalse, jumpingDownTrue, lastPressButton} from './keysEvents';

export let animation = true;

export const marioHero = {};

export const drawMario = function () {
    marioHero.canGoRight = true;
    marioHero.canGoLeft = true;
    marioHero.coordMario = [245,550]; // Mario's coordinates in start game. After - current coordinates.
    marioHero.coordCenter = [marioHero.coordMario[0] + 25, marioHero.coordMario[1] + 25];
    marioHero.coordMarioInMamory = []; // Mario's coordinates in jump. 0 - top coord mario jump. 1 - coord return
    marioHero.coordOnsprite = [102, 4];
    marioHero.mario = new constructorOfEntities(spriteMarioUrl, marioHero.coordOnsprite[0], marioHero.coordOnsprite[1], 18, 30, marioHero.coordMario, 45, 50);
    marioHero.mario.define();
    // console.log(marioHero);
    // console.log(marioHero.coordMarioBotL);

};

export const stopMario = function () {
    if(!animation) return false;
    // debugger;
    context.clearRect(marioHero.coordMario[0], marioHero.coordMario[1] , 45, 50); // Here maybe a mistake
    marioHero.mario.posX = 102;
    marioHero.mario.define();
    // marioHero.canGo = true;
};

export const moveMarioRight = function () {
    if(!animation) return false;
    // debugger;
    marioHero.canGoRight ?  marioHero.coordMario[0] += 5 : marioHero.coordMario[0] += 0;
    context.clearRect(marioHero.coordMario[0] - 3, marioHero.coordMario[1], 45, 50);
    marioHero.mario.define();
    if(counter % 3 === 0) {
        (marioHero.mario.posX === 156) ? marioHero.mario.posX = 120 : marioHero.mario.posX += 18;
    }
};

export const moveMarioLeft = function () {
    if(!animation) return false;
    debugger;
    marioHero.canGoLeft ?  marioHero.coordMario[0] -= 5 : marioHero.coordMario[0] += 0;
    context.clearRect(marioHero.coordMario[0] + 2, marioHero.coordMario[1], 45, 50);
    marioHero.mario.define();
    if(counter % 3 === 0) {
        (marioHero.mario.posX === 48) ? marioHero.mario.posX = 84 : marioHero.mario.posX -= 18;
    }
};

const checkMarioJump = function () {
    if(marioHero.coordMarioInMamory.length === 0) {
        marioHero.coordMarioInMamory[0] = marioHero.coordMario[1] - 50;
        marioHero.coordMarioInMamory[1] = marioHero.coordMario[1];
    }
};

export const jumpMario = function () {
    checkMarioJump();
    if(!animation) return false;
    if(counter % 3 === 0) {
        context.clearRect(marioHero.coordMario[0], marioHero.coordMario[1], 45, 50);
        if(marioHero.coordMario[1] != marioHero.coordMarioInMamory[0]){
            marioHero.coordMario[1] -= 5;
        } else {
            jumpingFalse();
        }
        marioHero.mario.define();
    }
};

export const mariodown = function () {
    if(counter % 3 === 0) {
        context.clearRect(marioHero.coordMario[0], marioHero.coordMario[1] - 5, 45, 50);
        marioHero.coordMario[1] != marioHero.coordMarioInMamory[1] ? marioHero.coordMario[1] += 5 : jumpingDownFalse();
        marioHero.mario.define();
    }
};

export const fallMario = function () {
    animation = false;
    marioHero.coordOnsprite = [6, 113];
    // console.log(marioHero);
    // debugger;
    marioHero.mario = new constructorOfEntities(spriteMarioUrl, marioHero.coordOnsprite[0], marioHero.coordOnsprite[1], 24, 32, marioHero.coordMario, 50, 50);
    context.clearRect(marioHero.coordMario[0] - 5, marioHero.coordMario[1], 45, 50);
    // debugger;
    marioHero.mario.define();
};
