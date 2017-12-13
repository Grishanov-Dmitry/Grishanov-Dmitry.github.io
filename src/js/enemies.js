/**
 * Created by Dima on 11.12.2017.
 */
import constructorOfEntities from './constructorOfEntities';
import {sprite3Url, context} from './consts';
import {counter} from './index';

export const enemies = [
    {
        posOnMap: [500, 560],
        posStart: [7, 53],
        posOnsprite: [7, 53, 97],
        size: [45, 45],
        get newImage() {
            let nextEnemy = new constructorOfEntities(sprite3Url, this.posOnsprite[0], this.posOnsprite[1], this.size[0], this.size[1], this.posOnMap, 50, 50);
            nextEnemy.createElem();
        }
    },
    {
        posOnMap: [700, 560],
        posStart: [158,8],
        posOnsprite: [158, 8, 246],
        size: [44, 44],
        get newImage() {
            let nextEnemy = new constructorOfEntities(sprite3Url, this.posOnsprite[0], this.posOnsprite[1], this.size[0], this.size[1], this.posOnMap, 50, 50);
            nextEnemy.createElem();
        }
    }
];

export let obj = {
    posOnMap: [300, 560],
    posStart: [158,8],
    posOnsprite: [158, 8, 246],
    size: [44, 44],
    get newImage() {
        let nextEnemy = new constructorOfEntities(sprite3Url, this.posOnsprite[0], this.posOnsprite[1], this.size[0], this.size[1], this.posOnMap, 50, 50);
        nextEnemy.createElem();
    }
};

obj.newImage;


export const startMoveEnemies = () => {
    enemies.forEach( (item) => {
        if(counter % 8 === 0) {
            context.clearRect(item.posOnMap[0]- 5, item.posOnMap[1], 50, 50);
            item.newImage;
            item.posOnMap[0] += 5;
            // Chenge enemy image
            if( item.posOnsprite[0] === item.posOnsprite[2] ) {
                item.posOnsprite[0] = item.posStart[0];
            } else {
                item.posOnsprite[0] += item.size[0];
            }
        }
    });
};



