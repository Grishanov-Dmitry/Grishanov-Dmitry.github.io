/**
 * Created by Dima on 02.12.2017.
 */

import {canvas, context, canvasWidth, canvasHeight, spriteMarioUrl, sprite1Url, sprite2Url, coordMarioStart} from './consts';
// import ImagesConstructor from './imagesConstructor';


export const loadImage = function(url) {
    //waiting load the image
    return  new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
           resolve(image);
        });
        image.src = url;
    });
};

function foo(url) {
    let img = new Image();
    img.src = url;

    img.onload = function () {
        context.drawImage(img, 0, 0, 18, 30, 0, 0, 46, 60);
    }

}
// context.drawImage(0, 0, 18, 30, 0, coordMarioStart, 46, 60, spriteMarioUrl);

foo(spriteMarioUrl);


const moveMario = function (src, x1) {
    let img = new Image();
    img.src = src;
    img.addEventListener('load', () => {
        context.drawImage(img,
            x1, 4,
            18, 30, // the size of image
            100, 50, // the distance of top and left
            46 , 60 // width and height of image
        );
    });

};

let x1 = 120;

moveMario(spriteMarioUrl,x1);

const requestId  = requestAnimationFrame(

    function repeat() {
        context.clearRect(100,50,46,60);
        moveMario(spriteMarioUrl,x1);
        x1 == 156 ? x1 = 120 : x1 += 18;
        setTimeout(repeat,200);
    }
);



















//sprite with elements of map
// loadImage('../public/images/sprite-all-elem.png')
//     .then(image => {
//         const sprite = new ImagesConstructor(image, 30, 30);
//         sprite.define('bricks', 9.15, 0);
//         sprite.draw('bricks', context, 30, 50);
//     });

// //Sprite with Mario
// loadImage('../public/images/mario-sprite.png')
//     .then(image => {
//         const sprite = new ImagesConstructor(image, 20, 35);
//         sprite.define('bricks', 0, 0);
//         sprite.draw('bricks', context, 50, 50);
//     });




// const canvas2 = document.createElement('canvas');
// const context2 = canvas2.getContext('2d');
// canvas2.classList.add('forExample');
// document.getElementsByTagName('body')[0].appendChild(canvas2);
//
// const  loader = function () {
//     context2.drawImage('../public/images/mario-sprite.png', 16, 16, 0, 0, 0 ,0 ,10 ,10 );
// };
//
// loader();



// loadImage('../public/images/mario-sprite.png')
//     .then(image => {
//         context2.drawImage(image,
//             135, 0,
//             30, 30, // the size of image
//             50, 50, // the distance of top and left
//             150 , 100 // width and height of image
//         );
//     });






// loadImage('../public/images/bg-in-game.jpg')
//     .then(image => {
//         context.drawImage(image, 0, 0, 1000, 700);
//
//     });
