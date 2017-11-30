/**
 * Created by Dima on 30.11.2017.
 */

import {wrapper, canvas, context} from './variables';


export const cleanWindow = function () {
    wrapper.classList.add('displayNone');
};

export const showCanvas = function () {
    canvas.classList.add('displayBlock');
}
