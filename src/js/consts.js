/**
 * Created by Dima on 29.11.2017.
 */
let img = new Image().src = bgInGame;
export const buttonStart = document.getElementById('button-start');
export const wrapper = document.getElementById('wrapper');
export const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
export const context = canvas.getContext('2d');
export const pattern = context.createPattern(img, 'no-repeat');
export const canvasWidth = canvas.width;
export const canvasHeight = canvas.height;
export const buttonFullScreen = document.getElementById('button-full-screen');
export const spriteMarioUrl = '../public/images/mario-sprite.png';
export const sprite1Url = '../public/images/sprite-1.png';
export const sprite2Url = '../public/images/sprite-2.png';
export const bgInGame = '../public/images/bg-in-game.jpg';
export const loadingWindiw = document.getElementById('loading');
export const entities = {};



export const coordMarioStart = [200,200];
export const allSpritesUrl = [
    '../public/images/mario-sprite.png',
    '../public/images/sprite-1.png',
    '../public/images/sprite-2.png',
    '../public/images/bg-in-game.jpg'
];





