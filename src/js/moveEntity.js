/**
 * Created by Dima on 06.12.2017.
 */
import constructorOfEntities from './constructorOfEntities';
import {coordMarioStart, spriteMarioUrl, context} from './consts';
import {counter} from './index';

export const entities = {};

export const drawMario = function () {
    entities.mario = new constructorOfEntities(spriteMarioUrl, 102, 4, 18, 30, coordMarioStart, 46, 60);
    entities.mario.define();
    console.log(entities);
};

export const stopMario = function () {
    context.clearRect(coordMarioStart[0] - 5, coordMarioStart[1] , 56, 60); // Here maybe a mistake
    entities.mario.posX = 102;
    entities.mario.define();
};

export const moveMarioRight = function () {
    context.clearRect(coordMarioStart[0] - 5, coordMarioStart[1], 46, 60);
    entities.mario.define();
    console.log(entities.mario);
    if(counter % 5 === 0) {
        (entities.mario.posX === 156) ? entities.mario.posX = 120 : entities.mario.posX += 18;
    }
    coordMarioStart[0] += 5;
};

export const moveMarioLeft = function () {
    context.clearRect(coordMarioStart[0] + 5, coordMarioStart[1], 46, 60);
    entities.mario.define();
    console.log(entities.mario);
    if(counter % 5 === 0 || counter === 0) {
        (entities.mario.posX === 48) ? entities.mario.posX = 84 : entities.mario.posX -= 18;
    }
    coordMarioStart[0] -= 5;
};


// function foo(url) {
//     let img = new Image();
//     img.src = url;
//
//     img.onload = function () {
//         context.drawImage(img, 0, 0, 25, 40, 0, 0, 46, 60);
//     }
//
// }
//
// foo(spriteMarioUrl);

