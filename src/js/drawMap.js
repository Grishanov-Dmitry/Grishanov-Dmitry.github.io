/**
 * Created by Dima on 08.12.2017.
 */

import {canvas, context, sprite3Url} from './consts';
import constructorOfEntities from  './constructorOfEntities';
import {map1} from './mapLevels';

let arrColor = ['green', 'red'];
let arrNumber =[0,1];


let x = 0;
let y = 0;

const entity = new Map();

const brick = new constructorOfEntities(sprite3Url, 798, 5, 32, 30, [x, y], 50, 50);
const brickQuestionMark = new constructorOfEntities(sprite3Url, 874, 5, 30, 30, [x, y], 50, 50);
const brickCoin = new constructorOfEntities(sprite3Url, 357, 12, 23, 31, [x, y], 50, 50);
const brickStar = new constructorOfEntities(sprite3Url, 434, 6, 38, 38, [x, y], 50, 50);
const brickMushroom = new constructorOfEntities(sprite3Url, 7, 53, 45, 45, [x, y], 50, 50);
const brickMushroom2 = new constructorOfEntities(sprite3Url, 158, 7, 45, 45, [x, y], 50, 50);
const brickFlower = new constructorOfEntities(sprite3Url, 134, 138, 48, 48, [x, y], 50, 50);
const brickTurtle = new constructorOfEntities(sprite3Url, 740, 151, 38, 38, [x, y], 50, 50);
const blockEmpty = new constructorOfEntities(sprite3Url, 910, 0, 25, 25, [x, y], 50, 50);


entity.set(0, blockEmpty);
entity.set(1, brick);
entity.set(2, brickCoin);
entity.set(3, brickQuestionMark);
entity.set(4, brickMushroom);
entity.set(5, brickMushroom2);
entity.set(6, brickFlower);
entity.set(7, brickTurtle);
entity.set(8, brickStar);

console.log(entity);


export const drawMap = function () {
    map1.forEach((item, i) => {
        item.forEach((itemInner) => {
            entity.get(itemInner).createElem(x, y);
            x += 51;
        });
        x = 0;
        y += 51;
    });
};
// alert();

