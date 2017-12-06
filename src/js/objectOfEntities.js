/**
 * Created by Dima on 06.12.2017.
 */
import constructorOfEntities from './constructorOfEntities';
import {coordMarioStart, spriteMarioUrl, entities} from './consts';

// alert();
entities.mario = new constructorOfEntities(spriteMarioUrl, 120, 4, 18, 30, 0, coordMarioStart, 46, 60);


entities.mario.define();
console.log(entities);
