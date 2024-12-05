import browserSync from "browser-sync"; // Локальний сервер
import plumber from "gulp-plumber"; // Обробка помилок
import replace from "gulp-replace"; // Пошук та заміна
import notify from "gulp-notify"; // Сповіщення
import newer from "gulp-newer"; // Перевірка оновлиних зображень
import ifPlugin from "gulp-if";

export const plugins = {
    browserSync: browserSync,
    plumber: plumber,
    replace: replace,
    notify: notify,
    newer: newer,
    if: ifPlugin,
}

// Плагін replace 
// Потрібно у розширенні Path Autocomplete такі данні. Натиснути після установки F1 > Open User Settings JSON
// "path-autocomplete.pathMappings": {
//     "@img": "${folder}/src/img",
//     "@scss": "${folder}/src/scss",
//     "@js": "${folder}/src/js"
//   },