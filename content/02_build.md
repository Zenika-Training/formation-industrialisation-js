# Build</br>Génération du livrable

<!-- .slide: data-background="/assets/zenika/images/title-background.png" -->



## Plan

- **Build et génération du livrable**
- Gestion des dépendances
- Tests et qualimétrie
- Productivité
- Intégration continue
- Debugging et optimisation



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



## Pourquoi un build automatisé <small>côté client ?</small>

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

- Écrit en Javascript, il tourne sur NodeJS
- Description des tâches dans un fichier `Gruntfile.js`
  - Pur Javascript
- Un exécutable en ligne de commande : `grunt tâches...`
- De nombreux plugins apportent des tâches pré-définies
  - Il n'y a plus qu'à configurer !
- Possibilité de définir à volonté de nouvelles tâches en Javascript
  - APIs pour manipuler les fichiers, le logging, le reporting...



## Installation

- Installer [NodeJS](nodejs.org)
- Installer l'exécutable : `npm install -g grunt-cli`
- Grunt lui-même s'installe ensuite une fois par projet
  - Permet de travailler avec des versions différentes
  - `npm install grunt`



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
- Les options ne sont jamais obligatoires, les paramètres peuvent l'être ou non



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
grunt.registerTask('default', ['copy']);
```

```dos
$ ls
assets    Gruntfile.js
$ grunt
Running "copy:assets" (copy) task
Created 1 directories, copied 1 file
Done, without errors.
$ ls target
assets
```



<!-- .slide: data-background="/assets/zenika/images/questions.png" -->
<!-- .slide: data-background-size="30%" -->