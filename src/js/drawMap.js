/**
 * Created by Dima on 08.12.2017.
 */

import {canvas, context, sprite3Url} from './consts';
import constructorOfEntities from  './constructorOfEntities';
import {map1} from './mapLevels';
import {counter} from './index';

let x = 0; //Coordinates when will draw a new image
let y = 0;
let q = 0;

let arr = [ ];

//Create a new parts for map
const brick = new constructorOfEntities(sprite3Url, 798, 5, 32, 30, [x, y], 50, 50);
const brickQuestionMark = new constructorOfEntities(sprite3Url, 874, 5, 30, 30, [x, y], 50, 50);
const brickCoin = new constructorOfEntities(sprite3Url, 359, 13, 20, 29, [x, y], 50, 50);
const brickStar = new constructorOfEntities(sprite3Url, 434, 6, 38, 38, [x, y], 50, 50);
const brickMushroom = new constructorOfEntities(sprite3Url, 9, 53, 45, 45, [x, y], 50, 50);
const brickMushroom2 = new constructorOfEntities(sprite3Url, 160, 8, 44, 44, [x, y], 50, 50);
const brickFlower = new constructorOfEntities(sprite3Url, 134, 138, 48, 48, [x, y], 50, 50);
const brickTurtle = new constructorOfEntities(sprite3Url, 740, 151, 38, 38, [x, y], 50, 50);
const blockEmpty = new constructorOfEntities(sprite3Url, 910, 0, 25, 25, [x, y], 50, 50);


//Here we keep the parts of the map
const entity = new Map();
const parts = [];

const hindrance = [];

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


const addHindrance = function (item, obj) {
  switch (item) {
      // case 1:

  }
};


//Draws map
export const drawMap = function () {
    map1.forEach((item) => {
        item.forEach((itemInner) => {

            let entityInstance = entity.get(itemInner);
            addHindrance(itemInner, entityInstance);
            hindrance.push({
                posX: entityInstance.posX + x,
                posY: entityInstance.posY + y
            });
            let createElem = entityInstance.createElem.bind(entityInstance, x, y, q);
            createElem();

            x += 51;
        });
        x = 0;
        y += 51;
    });
};

















// export const moveBrickStar = function () {
//     parts.forEach((item) => {
//         if(counter % 10 === 0) {
//             if(item.posX === 510) {
//                 item.posX = 434;
//             } else {
//                 // console.log(item.posY);
//                 // item.define();
//                 item.posX += 38;
//             }
//         }
//     });
//
// };
