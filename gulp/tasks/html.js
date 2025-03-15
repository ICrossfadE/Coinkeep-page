import fileInclude from "gulp-file-include"
import versionNumber from "gulp-version-number"
import webpHtmlNosvg from "gulp-webp-html-nosvg"


export const html = () => {
    return app.gulp
      .src(app.path.src.html)
      // Обробка помилок
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "HTML",
            message: "Error: <%= error.message %>",
          })
        )
      )
      .pipe(fileInclude()) // Для модульної збірки HTML
      .pipe(app.plugins.replace(/@img\//g, 'img/'))
      // webpHtmlNosvg тільки в режимі збірки
      .pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))
      .pipe(
        app.plugins.if(
          app.isBuild,
          versionNumber({
            value: "%DT%",
            append: {
              key: "_v",
              cover: 0,
              to: ["css", "js"],
            },
            output: {
              file: "gulp/version.json",
            },
          })
        )
      )
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browserSync.stream())
};