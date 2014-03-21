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

- Les outils de build sont omniscients dans le monde Java avec Ant, Maven, et
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

- Description des tâches dans un fichier `Gruntfile.js`
  - Pur Javascript
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

Note:
  - A ce moment de la formation, on a pas encore vu la différence entre
  les installations globales (`-g`) et locales ("par projet") de NPM. Il est
  possible d'expliquer rapidement que "par projet" signifie que Grunt est
  installé dans un sous-dossier du projet, et que l'on verra plus précisément
  le fonctionnement de NPM dans le chapitre suivant.


## Syntaxe du Gruntfile

<!-- Obligé d'indenter avec 2 espaces sinon retour à la ligne au niveau de
'options'. Je n'ai pas trouvé pourquoi. -->

```javascript
module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    task1: {
      options: { /*...*/ },
      target1: {
        src: '...',
        dest: '...',
      },
      target2: { /*...*/ },
    },
    task2: { /*...*/ },
  });
  
  // Charger des tâches externes
  grunt.loadNpmTasks('task1');
  grunt.loadTasks('task2');
  // Déclarer une tâche composite
  grunt.registerTask('default', ['task1:target2']);
};
```



## Syntaxe du Gruntfile

- Une *tâche* est un objet contenant :
  - 1 ou plusieurs cibles
  - 0 ou 1 objet `options` qui valorise les options par défaut pour toutes les
  cibles
- Une *cible* est un objet contenant :
  - 0 ou 1 objet `options` qui surcharge les options de la tâche
  pour cette cible seulement
  - des paramètres (en général des chemins source et destination)
- Se référer à la documentation de chaque tâche pour connaitre les options et
paramètres disponibles



## Syntaxe du Gruntfile <small>Exemple</small>

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

Note:
  - La tâche copie le dossier `assets` et tout son contenu dans le dossier
  `target`. C'est ce qu'est sensé montrer le bloc inférieur.



## Plugins

- Grunt n'embarque aucune tâche prédéfinie
- Ces tâches sont disponibles sous forme de plugins
  - [25](https://github.com/gruntjs/grunt-contrib) sont maintenus par l'équipe 
  Grunt : `grunt-contrib-*`
  - Des dizaines d'autres par la communauté
- Installation :
  - `npm install <plugin>`
  - `grunt.loadNpmTasks('<plugin>')`

Note:
  - Le préfixe `grunt-contrib` est réservé aux plugins maintenus par l'équipe
  Grunt



## Plugins <small>Exemples</small>

- Concaténer : `grunt-contrib-concat`
- Minifier : `grunt-contrib-uglify`
- Compiler du Sass : `grunt-contrib-sass`
- Optimiser des images : `grunt-contrib-imagemin`
- Extraire de la documentation JSDoc : `grunt-jsdoc`
- Lancer des tests Jasmine : `grunt-contrib-jasmine`
- Déployer en FTP : `grunt-ftp-deploy`
- ...



<!-- .slide: data-background="zenika/images/questions.png" -->
<!-- .slide: data-background-size="30%" -->