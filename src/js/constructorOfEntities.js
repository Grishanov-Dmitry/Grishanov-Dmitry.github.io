/**
 * Created by Dima on 06.12.2017.
 */
import {canvas, context} from './consts';

export default class constructorOfEntities{
    constructor(posX, posY, sizeX, sizeY, speed, entitieCoord, width, height, url, frames) {
        this.posX = posX; // Coordinates in the sprite on the X-axis
        this.posY = posY; // Coordinates in the sprite on the Y-axis
        this.sizeX = sizeX; // The size of a entitie on the X-axis in sprite
        this.sizeY = sizeY; // The size of a entitie on the Y-axis in sprite
        this.entitieCoord = entitieCoord;
        this.width = width; // The width of a entitie on the X-axis in game
        this.height = height; // The height of a entitie on the Y-axis in gamee
        this.speed = typeof speed === 'number' ? speed : 0; // The speed of hero moves
        this.url = url;
        this.frames = frames;
        this._index = 0;
    }
    define() {
        const bufferElem = document.createElement('canvas');
        bufferElem.width = this.width;
        bufferElem.height = this.height;

        bufferElem.getContext('2d').drawImage(
            this.url,
            this.posX,
            this.posY,
            this.sizeX,
            this.sizeY,
            this.entitieCoord[0],
            this.entitieCoord[1],
            this.width,
            this.height
        )
    }
}
