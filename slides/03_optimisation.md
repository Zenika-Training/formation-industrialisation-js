# Optimisation du livrable

<!-- .slide: data-background="zenika/images/title-background.png" -->



## Plan

<!-- .slide: class="toc" -->

- [Introduction à l'industrialisation](#/1)
- [Build & Run](#/2)
- **[Optimisation du livrable](#/3)**
- [Gestion des dépendances](#/4)
- [Tests et qualimétrie](#/5)
- [Productivité](#/6)
- [Intégration continue](#/7)
- [Debugging et optimisation](#/8)



## Pourquoi un build automatisé côté client ?

- Concaténation
- Minification
- Compilation
- Optimisation des images
- Documentation
- Tests
- Déploiement
- ...



## Plugins

- Grunt n'embarque aucune tâche prédéfinie
- Ces tâches sont disponibles sous forme de plugins
  - [25](https://github.com/gruntjs/grunt-contrib) sont maintenus par l'équipe
  Grunt : `grunt-contrib-*`
  - Des dizaines d'autres par la communauté
- Installation :
  - `npm install <plugin>`
  - `grunt.loadNpmTasks('<plugin>')`

Notes :
- Le préfixe `grunt-contrib` est réservé aux plugins maintenus par l'équipe
Grunt.



## Plugins <small>Exemples</small>

- Concaténer : `grunt-contrib-concat`
- Minifier : `grunt-contrib-uglify`
- Compiler du Sass : `grunt-contrib-sass`
- Optimiser des images : `grunt-contrib-imagemin`
- Extraire de la documentation JSDoc : `grunt-jsdoc`
- Lancer des tests Jasmine : `grunt-contrib-jasmine`
- Déployer en FTP : `grunt-ftp-deploy`
- Déployer sur Artifactory : `grunt-artifactory-artifact`
- ...



## Plugins

- Charger tous les plugins peut devenir fastidieux
```js
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-jsdoc');
...
```

- Solution : utiliser le
[plugin](https://github.com/sindresorhus/load-grunt-tasks) `load-grunt-tasks`
```js
require('load-grunt-tasks')(grunt);
```
  - Charge tous les plugins listés dans le `package.json` (voir chapitre
  suivant)



## Gulp

<figure>
    <img src="assets/images/gulp-logo.png" alt="Gulp logo"  width="20%"/>
    <figcaption>The streaming build system</figcaption>
</figure>



## Gulp

- Challenger de Grunt
- Description des tâches dans un fichier `gulpfile.js`
  - Pur JavaScript
  - Code-over-configuration
- Un exécutable en ligne de commande : `gulp tâches...`
- Au lieu de configurer des tâches, on code des pipelines de transformation



## Gulp

```js
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('default', function() {
  return gulp.src('sass/*.scss')
    .pipe(watch())
    .pipe(sass())
    .pipe(gulp.dest('dist'));
});
```
Notes :
- gulp.src() : lecture des fichiers
- .pipe(watch()) : seulement les fichiers modifiés
- .pipe(sass()) : compilation SASS
- .pipe(gulp.dest()) : écriture



<!-- .slide: data-background="zenika/images/questions.png" -->
<!-- .slide: data-background-size="30%" -->



<!-- .slide: data-background="zenika/images/tp2.png" -->
<!-- .slide: data-background-size="30%" -->
