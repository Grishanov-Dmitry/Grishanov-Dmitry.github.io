/**
 * Created by Dima on 12.12.2017.
 */

import {obj1} from './enemies';
import {marioHero, fallMario, animation} from './moveHero';
import {obj} from './enemies';
import {coordMarioStart} from './consts';

export const crashOfEntities = function () {
    if(obj.posOnMap[0] === marioHero.coordMario[0]) {
        if(!animation) return false;
        // fallMario();
    }

};

