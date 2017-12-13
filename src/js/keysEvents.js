/**
 * Created by Dima on 07.12.2017.
 */

import {} from './moveHero';
import {entities, coordMarioStart} from './consts';
import {moveMarioRight, stopMario, moveMarioLeft, jumpMario} from './moveHero';

let keyDown = null;
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

};

export const isPressA = function () {
    moveMarioLeft();
};

export const isPressD = function () {
    debugger;
    moveMarioRight();
    console.log("Нажата D");
};

export const isPressSpace = function () {

};

export const isPressInter = function () {

};

window.addEventListener('keyup', (event) => stopMario());



window.addEventListener('keydown', (event) => {
    switch(event.keyCode) {
        case 87:
            isPressW();
            break;
        case 83:
            isPressS();
            break;
        case 65:
            isPressA();
            break;
        case 68:
            isPressD();
            break;
        case 32:
            isPressSpace();
            break;
        case 13:
            isPressInter();
            break;
    }
});




