/**
 * Created by Dima on 12.12.2017.
 */

import {obj1} from './enemies';
import {marioHero, fallMario, animation, stopMario, marioDownUntilGround} from './moveHero';
import {obj} from './enemies';
import {coordMarioStart} from './consts';
import {enemies, changePosToRight, changePosToLeft} from './enemies';
import {brickqQuestCoord, brickAll} from './drawMap';
import {keysDown, lastPressButton} from './keysEvents';

// console.log(marioHero.coordMarioBotL);
export const crashOfEntities = function () {
    enemies.forEach((item) => {
        if(Math.abs(item.posOnMap[0] - 5 - marioHero.coordMario[0] - 5) <= 50
        && Math.abs(item.posOnMap[1] + 5 - marioHero.coordMario[1] + 5) <= 50)
        {
            if(!animation) return false;
            fallMario();
        }
    });
};


let crash = false;

const checkInJumping = function (item) {
    if(marioHero.coordMario[1] + 50 <= item[1]) {
        // debugger;
        // console.log('Run');
        marioHero.canGoRight = true;
        marioHero.canGoLeft = true;
        marioHero.goDown = false;
        marioHero.goUp = false;
        // if(marioHero.coordMario[0] + 75 > item[0]) {
        //     marioHero.coordMarioInMamory[1] = item[1] - 50;
        //     marioHero.coordMarioInMamory[0] = item[1] - 50 - 70;
        // }

    }
};

export const crashMarioWithBrick = function () {
    let arrLength = brickqQuestCoord.length;
    // debugger;
    brickqQuestCoord.forEach((item, i) => {
        if(Math.abs(item[0] - marioHero.coordMario[0]) <= 50
            && Math.abs(item[1] - marioHero.coordMario[1] + 1) <= 50) {
            crash = true;
            // console.log('crash');
        }

        if(marioHero.goUp || marioHero.goDown && crash) {
            checkInJumping(item);
            // console.log('up down');
        }


        if(i + 1 === arrLength && crash === true) {
            if(lastPressButton[0] === 65 && lastPressButton[1] === 65) {
                    marioHero.canGoLeft = false;
                    marioHero.canGoRight = true;
                } else if (lastPressButton[0] === 68 && lastPressButton[1] === 65) {
                    marioHero.canGoLeft = true;
                    marioHero.canGoRight = true;
                } else if (lastPressButton[0] === 68 && lastPressButton[1] === 68) {
                marioHero.canGoLeft = true;
                marioHero.canGoRight = false;
            } else if (lastPressButton[0] === 65 && lastPressButton[1] === 68) {
                marioHero.canGoLeft = true;
                marioHero.canGoRight = true;
            }
        }

        // else if(i + 1 === arrLengt && crash === false && lastPressButton == 65) {
        //     marioHero.canGoLeft = true;
        // } else if(i + 1 === arrLengt && crash === false && lastPressButton == 68) {
        //     marioHero.canGoRight = true;
        // }

    });
    crash = false;
};

export const changeCrash = function (enem) {
    brickqQuestCoord.forEach((coord) => {
        // debugger;
        if(coord[0] - 50 === enem.posOnMap[0] && coord[1] === enem.posOnMap[1] ||
            coord[0] + 50 === enem.posOnMap[0] && coord[1] === enem.posOnMap[1]
        ) {
            if(enem.moveRight) {
                enem.moveRight = false;
                changePosToLeft(enem);
            } else {
                enem.moveRight = true;
                changePosToRight(enem);
            }


        }
    });
};

export const checkTouchGround = function () {
    let length = brickAll.length;
    let crash = false;
   brickAll.forEach((item, i) => {

         if(Math.abs(item[0] - marioHero.coordMario[0]) <= 50
             && Math.abs(item[1] - marioHero.coordMario[1] - 5) <= 50) {
             marioHero.coordMarioInMamory[1] = item[1];
             marioHero.coordMarioInMamory[0] = item[1] - 120;

                 crash = true;
             // marioHero.coordMarioInMamory[1] = item[1];
             // marioHero.goDown = false;
             // marioHero.goDownUnderGround = false;
         }
       if(i + 1 === length && !crash && marioHero.goDown != true && marioHero.goUp != true) {
             // debugger;
           marioHero.goDown = true;
           console.log('NO CRASH');
       } else {
             marioHero.goDown = false;
           console.log('CRASH CRASH CRASH');

       }
   });
};
