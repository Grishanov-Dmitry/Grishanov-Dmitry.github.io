/**
 * Created by Dima on 06.12.2017.
 */
import constructorOfEntities from './constructorOfEntities';
import {coordMarioStart, spriteMarioUrl, entities, context} from './consts';

let count = 0;
let start = 120;
export const drawAllElem = function () {
    entities.mario = new constructorOfEntities(spriteMarioUrl, start, 4, 18, 30, 0, coordMarioStart, 46, 60);
    context.clearRect(coordMarioStart[0] -15, coordMarioStart[1], 46, 60);
    entities.mario.define();
    console.log(count);
    if(count % 6 === 0) {
        coordMarioStart[0] += 15;
        // count = 0;
        (start === 156) ? start = 120 : start += 18;
    }

    count++;
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

