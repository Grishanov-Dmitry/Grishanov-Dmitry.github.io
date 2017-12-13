/**
 * Created by Dima on 12.12.2017.
 */

import {obj1} from './enemies';
import {marioHero, fallMario, animation} from './moveHero';
import {obj} from './enemies';
import {coordMarioStart} from './consts';
import {enemies} from './enemies';

export const crashOfEntities = function () {
    enemies.forEach((item) => {
        if(item.posOnMap[0] === marioHero.coordMario[0]) { // Координаты Марио выше чем у врагов
            if(!animation) return false;
            // fallMario();
        }
    });
};

