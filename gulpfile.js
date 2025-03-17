// Головний модуль / Main module
import gulp from "gulp";
// Імпорт шляхів / Import paths
import { path } from "./gulp/configs/path.js";
// Імпорт основних плагінів / Import basic plugins
import { plugins } from "./gulp/configs/plugins.js";

// Гробальна змінна
global.app = {
    isBuild: process.argv.includes("--build"),
    isDev: !process.argv.includes("--build"),
    path: path,
    gulp: gulp,
    plugins: plugins,
};

// Імпорт зачач / Import Tasks
import { reset } from "./gulp/tasks/reset.js";
import { styles } from "./gulp/tasks/tailwind.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";


// Наглядач за файлами
function wather() {
    gulp.watch(path.watch.html, gulp.series(html, styles));
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

const mainTasks = gulp.parallel(styles, images, html, js);
const helperTask = gulp.parallel(wather, server);

// Серія задач
const dev = gulp.series(reset, mainTasks, helperTask);
const build = gulp.series(reset, mainTasks);

export { dev };
export { build };

// Виконання задачі
gulp.task("default", dev);
