/**
 * Created by Dima on 06.12.2017.
 */

import {allSpritesUrl, loadingWindiw} from  './consts';


export const imagesLoader = function (arrWithUrls) {
    debugger;
    return new Promise((resolve, rejected) => {
        allSpritesUrl.forEach(item => {
            let image = new Image();
            image.src = item;
            image.addEventListener('load',() => {
                showLoading();
            });
        });
        resolve('Все Ок');
            rejected('ошибка')
    });
};

export const showLoading = function () {
    loadingWindiw.classList.add('displayBlock');
};

export const hideLoading = function () {
    loadingWindiw.classList.toggle('displayBlock');
};

