// ./gulp/tasks/images.js
import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = () => {
  // Копіювання всіх зображень без додаткової обробки
  const copyAllImages = app.gulp
    .src(app.path.src.images, { encoding: false })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "IMAGES",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.images));

  // Копіювання SVG
  const copySvg = app.gulp
    .src(app.path.src.svg, { encoding: false })
    .pipe(app.gulp.dest(app.path.build.images));

  // Для режиму розробки просто копіюємо файли
  if (!app.isBuild) {
    return copyAllImages;
  }

  // Для режиму збірки додаємо обробку WebP і оптимізацію
  const webpProcess = app.gulp
    .src(app.path.src.images, { encoding: false })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "IMAGES WEBP",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.build.images));

  const optimizeProcess = app.gulp
    .src(app.path.src.images, { encoding: false })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "IMAGES OPTIMIZE",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      imagemin({
        progressive: true,
        interlaced: true,
        optimizationLevel: 3,
      })
    )
    .pipe(app.gulp.dest(app.path.build.images));

  // Повертаємо відповідний потік
  return app.isBuild ? copyAllImages : copySvg;
};