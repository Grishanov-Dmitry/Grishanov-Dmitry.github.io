/**
 * Created by Dima on 08.12.2017.
 */

import {canvas, context, sprite3Url} from './consts';
import constructorOfEntities from  './constructorOfEntities';
import {map1} from './mapLevels';
import {counter} from './index';

let x = 0; //Coordinates when will draw a new image
let y = 0;

let arr = [ ];

//Create a new parts for map
const brick = new constructorOfEntities(sprite3Url, 798, 5, 32, 30, [x, y], 50, 50);
const brickQuestionMark = new constructorOfEntities(sprite3Url, 874, 5, 30, 30, [x, y], 50, 50);
const brickCoin = new constructorOfEntities(sprite3Url, 359, 13, 20, 29, [x, y], 50, 50);
const brickStar = new constructorOfEntities(sprite3Url, 434, 6, 38, 38, [x, y], 50, 50);
const brickMushroom = new constructorOfEntities(sprite3Url, 7, 53, 45, 45, [x, y], 50, 50);
const brickMushroom2 = new constructorOfEntities(sprite3Url, 158, 8, 44, 44, [x, y], 50, 50);
const brickFlower = new constructorOfEntities(sprite3Url, 134, 138, 48, 48, [x, y], 50, 50);
const brickTurtle = new constructorOfEntities(sprite3Url, 740, 151, 38, 38, [x, y], 50, 50);
const blockEmpty = new constructorOfEntities(sprite3Url, 910, 0, 25, 25, [x, y], 50, 50);


// console.log(brickStar);

//Here we keep the parts of the map
const entity = new Map();
const parts = [];

//Add a new parts in the entity
entity.set(0, blockEmpty);
entity.set(1, brick);
entity.set(2, brickCoin);
entity.set(3, brickQuestionMark);
entity.set(4, brickMushroom);
entity.set(5, brickMushroom2);
entity.set(6, brickFlower);
entity.set(7, brickTurtle);
entity.set(8, brickStar);

// console.log(entity);
// entity.forEach((item) => console.log(item));

// console.log(entity);


export const moveBrickStar = function () {
    if(counter % 10 === 0) {
        if(entity.get(8).posX === 510) {
            entity.get(8).posX = 434;
        } else {
            entity.get(8).define();
            entity.get(8).posX += 38;
        }
    }
};

let count = 0;
//Draws map
export const drawMap = function () {
    map1.forEach((item) => {
        item.forEach((itemInner) => {
            let elem = entity.get(itemInner).createElem.bind(x, y); // Вот в этих двух строчках беда.

            entity.get(itemInner).createElem(x, y); // Вот эта нормально создает объекты и отрисовывает на страницу.
            // Но, запихнуть эту стоку в переменную или сразу закинуть в массив не выходит - он равнв undef
            
            if(itemInner === 8) {
                parts.push(elem);
                console.log(elem);
            }

            // console.log(elem);
            x += 51;
        });
        x = 0;
        y += 51;
    });
};

// console.log(parts[0]);




