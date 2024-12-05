import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './docs';
const srcFolder = "./src";

export const path = {
 build: {
    js: `${buildFolder}/js/`,
    html: `${buildFolder}/`,
    svg: `${buildFolder}/img/`,
    style: `${buildFolder}/style/`,
    images: `${buildFolder}/img/`,
 },
 src: {
    js: `${srcFolder}/js/app.js`,
    html: `${srcFolder}/*.html`,
    svg: `${srcFolder}/img/**/*.svg`,
    style: `${srcFolder}/style/*.css`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
 },
 watch: {
    js: `${srcFolder}/js/**/*.js`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
},
 clean: buildFolder,
 buildFolder: buildFolder,
 srcFolder: srcFolder,
 rootFolder: rootFolder,
}