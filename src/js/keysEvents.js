/**
 * Created by Dima on 07.12.2017.
 */

import {} from './moveHero';
import {entities, coordMarioStart} from './consts';
import {moveMarioRight, stopMario, moveMarioLeft, jumpMario, marioHero} from './moveHero';

export let lastPressButton = [];

export let keysDown = {
    65: false,
    68: false,
    83: false,
    87: false
};

export const keys = {
    w: 87,
    s: 83,
    a: 65,
    d: 68,
    space: 32,
    inter: 13
};

export const isPressW = function () {
    jumpingUp = true;
    console.log("Нажата W");

};

export const isPressS = function () {
    console.log("Нажата S");
};

export const isPressA = function () {
    moveMarioLeft();
};

export const isPressD = function (event) {
    // debugger;
    moveMarioRight();
    // console.log(keysDown);
    // console.log("Нажата D");
};

export const isPressSpace = function () {

};

export const isPressInter = function () {

};

window.addEventListener('keyup', (event) => {
    keysDown[event.keyCode] = false;
    stopMario();
    // marioHero.canGo = true;
    // lastPressButton = 0;
});



window.addEventListener('keydown', (event) => {
    keysDown[event.keyCode] = true;
});

export const checkKeys = function () {
        for(let key in keysDown) {
            if(keysDown[key]) {
                switch(key) {
                    case '87':
                        if(!marioHero.goDown) marioHero.goUp = true;  //Button W
                        break;
                    case '83': //Button S
                        break;
                    case '65':
                        lastPressButton.unshift(65);
                        lastPressButton.length = 2;
                        moveMarioLeft(); //Button A
                        break;
                    case '68':
                        lastPressButton.unshift(68);
                        lastPressButton.length = 2;
                        moveMarioRight(); //Button D
                        break;
                    case 32:
                        isPressSpace();
                        break;
                    case 13:
                        isPressInter();
                        break;
                }
            }
        }
};


