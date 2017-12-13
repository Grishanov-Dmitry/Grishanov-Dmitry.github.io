/**
 * Created by Dima on 07.12.2017.
 */

import {} from './moveHero';
import {entities, coordMarioStart} from './consts';
import {moveMarioRight, stopMario, moveMarioLeft, jumpMario} from './moveHero';

export let keysDown = {
    65: false,
    68: false,
    83: false,
    87: false
};
export let jumpingUp = false;
export let jumpingDown = false;

export const keys = {
    w: 87,
    s: 83,
    a: 65,
    d: 68,
    space: 32,
    inter: 13
};

export const jumpingFalse = function () {
    jumpingUp = false;
    jumpingDown = true;
};

export const jumpingDownFalse = function () {
    jumpingDown = false;
};

export const jumpingDownTrue = function () {
    jumpingDown = true;
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
    console.log(keysDown);
    // console.log("Нажата D");
};

export const isPressSpace = function () {

};

export const isPressInter = function () {

};

window.addEventListener('keyup', (event) => {
    keysDown[event.keyCode] = false;
    stopMario();
});



window.addEventListener('keydown', (event) => {
    keysDown[event.keyCode] = true;
});

export const checkKeys = function () {
        for(let key in keysDown) {
            if(keysDown[key]) {
                switch(key) {
                    case '87':
                        jumpingUp = true; //Button W
                        break;
                    case '83': //Button S
                        break;
                    case '65':
                        moveMarioLeft(); //Button A
                        break;
                    case '68':
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


