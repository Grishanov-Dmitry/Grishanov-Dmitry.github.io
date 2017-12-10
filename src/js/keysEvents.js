/**
 * Created by Dima on 07.12.2017.
 */

import {} from './moveEntity';
import {entities, coordMarioStart} from './consts';
import {moveMarioRight, stopMario, moveMarioLeft} from './moveEntity';

let keyDown = null;

export const keys = {
    w: 87,
    s: 83,
    a: 65,
    d: 68,
    space: 32,
    inter: 13
};

export const isPressW = function () {
    console.log('press w');
};

export const isPressS = function () {

};

export const isPressA = function () {
    moveMarioLeft();
};

export const isPressD = function () {
    moveMarioRight();
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




