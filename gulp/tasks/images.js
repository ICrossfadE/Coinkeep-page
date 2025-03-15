import webp from "gulp-webp"; // @ts-nocheck
import imagemin from "gulp-imagemin";

export const images = () => {
  return app.gulp
    .src(app.path.src.images, { encoding: false })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "IMAGES",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.plugins.newer(app.path.build.images))
    // Створення webp версій
    .pipe(app.plugins.if(app.isBuild, webp()))
    .pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.images)))
    // Оптимізація оригінальних зображень
    .pipe(app.plugins.if(app.isBuild, app.gulp.src(app.path.src.images)))
    .pipe(app.plugins.if(app.isBuild, app.plugins.newer(app.path.build.images)))
      .pipe(
        app.plugins.if(
          app.isBuild,
          imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }], // Виправлено з flase на false
            interlaced: true,
            optimizationLevel: 3, // 0 to 7
          })
        )
      )
    .pipe(app.gulp.dest(app.path.build.images))
    // Копіювання SVG в будь-якому випадку
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browserSync.stream());
};