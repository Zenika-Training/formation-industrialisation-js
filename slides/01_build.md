# Build</br>Génération du livrable

<!-- .slide: data-background="zenika/images/title-background.png" -->



## Plan

<!-- .slide: class="toc" -->

- **[Build et génération du livrable](#/1)**
- [Gestion des dépendances](#/2)
- [Tests et qualimétrie](#/3)
- [Productivité](#/4)
- [Intégration continue](#/5)
- [Debugging et optimisation](#/6)



## Pourquoi un build automatisé ?

- Plus rapide
- Peut être reproduit à l'identique facilement
- Soulage les développeurs de tâches rébarbatives

&#8658; <!-- fat right arrow --> Gagne du temps et de l'argent

- Les outils de build sont omniprésents dans le monde Java avec Ant, Maven, et
Gradle
- De nombreuses plate-formes dispose de leur propre outil : make pour C et C++,
MSBuild pour .net, Rake pour Ruby...
- Et Javascript ?



## Pourquoi un build automatisé côté client ?

- Concaténation
- Minification
- Compilation
- Optimisation des images
- Documentation
- Tests
- Déploiement
- ...



## Grunt

<figure>
    <img src="assets/images/grunt-logo.png" alt="Grunt logo"  width="40%"/>
    <figcaption>The Javascript Task Runner</figcaption>
</figure>



## Principes de fonctionnement

- Description des tâches dans un fichier `gruntfile.js`
  - Pur Javascript
  - Configuration-over-code
- Un exécutable en ligne de commande : `grunt tâches...`
- De nombreux plugins apportent des tâches pré-définies
  - Il n'y a plus qu'à configurer !
- Possibilité de définir à volonté de nouvelles tâches en Javascript
  - APIs pour manipuler les fichiers, le logging, le reporting...



## Installation

- Pré-requis : [NodeJS](http://nodejs.org) et [NPM](http://npmjs.org)
- Installer la ligne de commande : `npm install -g grunt-cli`
  - La commande `grunt` devient alors accessible partout
- Grunt lui-même s'installe ensuite une fois par projet
  - Permet de travailler avec des versions différentes
  - `npm install grunt`
  - La commande `grunt` échoue s'il n'y pas de version de Grunt installée pour
  le projet

Notes :
- A ce moment de la formation, on a pas encore vu la différence entre
les installations globales (`-g`) et locales ("par projet") de NPM. Il est
possible d'expliquer rapidement que "par projet" signifie que Grunt est
installé dans un sous-dossier du projet, et que l'on verra plus précisément
le fonctionnement de NPM dans le chapitre suivant.



## Concepts

- Une *tâche* (task) est une opération automatisable paramétrée abstraite
  - Exemple : minifier
- Une *cible* (target) est une instanciation d'une tâche sur un ensemble de
fichier particulier
  - Exemple : minifier le fichier `app.js` en `app.min.js`
  - Une cible peut surcharger les paramètres de sa tâche
- Pour une tâche donnée, on peut créer autant de cibles que l'on veut



## Syntaxe du Gruntfile

```javascript
module.exports = function(grunt) {
  grunt.initConfig({
    // Configurer des tâches et des cibles
  });

  // Importer un plugin installée avec NPM
  grunt.loadNpmTasks('a-task-plugin');

  // Importer une tâche à partir d'un fichier
  grunt.loadTasks('a-task-file.js');

  // Déclarer une tâche composite
  grunt.registerTask('task', [/* une liste de tâche */]);

  // Déclarer une tâche personnalisée
  grunt.registerTask('custom', function() {

  });
};
```



## Configurer une tâche

- Une *tâche* est un objet contenant :
  - 1 ou plusieurs cibles
  - 0 ou 1 objet `options` qui valorise les options par défaut pour toutes les
  cibles

```javascript
grunt.initConfig({
  task: {
    options: {
      option1: 'valeur',
    },
    // Les cibles sont configurées ici
  },
});
```

Notes :
- Une tâche a un nom prédéfini par le plugin qui la fourni. Donc ici `task`
ne doit pas comporter de faute de frappe et ne doit pas être renommée.
- Il faut se référer à la documentation de chaque tâche pour connaitre les
options.



## Configurer des cibles

- Une *cible* est un objet contenant :
  - 0 ou 1 objet `options` qui surcharge les options de la tâche
  pour cette cible seulement
  - des paramètres (en général des chemins source et destination)

```javascript
task: {
  target1: {
    options: {
      option1: 'surcharge',
    },
    parameter1: 'valeur',
  },
},
```

Notes :
- Une cible a un nom arbitraire, défini par l'auteur du Gruntfile. Donc ici
`target1` pourrait être remplacé par n'importe quel mot.
- Il faut se référer à la documentation de chaque tâche pour connaitre les
options et paramètres disponibles.



## Exemple réel

```javascript
grunt.initConfig({
  copy: {  // tâche
    assets: {  // cible
      src: 'assets/**',  // paramètre
      dest: 'target/',  // paramètre
    },
  },
});

grunt.loadNpmTasks('grunt-contrib-copy');
```

```dos
$ ls
assets    Gruntfile.js
$ grunt copy
Running "copy:assets" (copy) task
Created 1 directories, copied 1 file
Done, without errors.
$ ls target
assets
```

Notes :
- La tâche copie le dossier `assets` et tout son contenu dans le dossier
`target`. C'est ce qu'est sensé montrer le bloc inférieur.
- On pourrait aussi lancer `grunt copy:assets`.
- Quand on appelle une tâche (et pas une cible) comme ici, toutes les cibles
sont exécutées après les autres.



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
```javascript
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-jsdoc');
...
```

- Solution : utiliser le
[plugin](https://github.com/sindresorhus/load-grunt-tasks) `load-grunt-tasks`
```javascript
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
  - Pur Javascript
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



<!-- .slide: data-background="zenika/images/tp1.png" -->
<!-- .slide: data-background-size="30%" -->
