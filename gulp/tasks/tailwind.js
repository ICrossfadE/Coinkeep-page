
import postcss from 'gulp-postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

// Задача для компіляції Tailwind CSS
export const styles = () => {
    return app.gulp
      .src(app.path.src.style)
      .pipe(
        postcss([
          tailwindcss(),
          autoprefixer(),
          cssnano(), // Для мінімізації CSS
        ])
      )
      .pipe(app.gulp.dest(app.path.build.style));
  }