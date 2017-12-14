/**
 * Created by Dima on 12.12.2017.
 */

import {obj1} from './enemies';
import {marioHero, fallMario, animation, stopMario} from './moveHero';
import {obj} from './enemies';
import {coordMarioStart} from './consts';
import {enemies, changePosToRight, changePosToLeft} from './enemies';
import {brickqQuestCoord} from './drawMap';
import {keysDown, lastPressButton} from './keysEvents';

// console.log(marioHero.coordMarioBotL);
export const crashOfEntities = function () {
    enemies.forEach((item) => {
        if(Math.abs(item.posOnMap[0] - marioHero.coordMario[0]) <= 50
        && Math.abs(item.posOnMap[1] - marioHero.coordMario[1]) <= 50)
        {
            if(!animation) return false;
            fallMario();
        }
    });

    brickqQuestCoord.forEach((item) => {
        // debugger;r
        // let putButton =
        if(
            Math.abs(item[0] - marioHero.coordMario[0]) <= 50
            && Math.abs(item[1] - marioHero.coordMario[1]) <= 50
        ) {
            // debugger;
            // console.log('crash');
            if(lastPressButton === 65) {
                marioHero.canGoLeft = false;
                marioHero.canGoRight = true;
            } else if (lastPressButton === 68) {
                marioHero.canGoRight = false;
                marioHero.canGoLeft = true;
            }
        }
    });
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
