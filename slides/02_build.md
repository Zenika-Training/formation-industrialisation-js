# Build & Run

<!-- .slide: data-background="zenika/images/title-background.png" -->



## Plan

<!-- .slide: class="toc" -->

- [Introduction à l'industrialisation](#/1)
- **[Build & Run](#/2)**
- [Optimisation du livrable](#/3)
- [Gestion des dépendances](#/4)
- [Tests et qualimétrie](#/5)
- [Productivité](#/6)
- [Intégration continue](#/7)
- [Debugging et optimisation](#/8)



## Build

- Le build est l'étape de la livraison où l'on construit un artéfact exécutable du programme, à partir du code source
- Les outils de build sont omniprésents dans le monde Java avec Ant, Maven, et
Gradle
  - Quand on récupère un projet Maven, on sait `mvn package` produira un programme exécutable
- De nombreuses plate-formes dispose de leur propre outil : make pour C et C++,
MSBuild pour .Net, Rake pour Ruby...
- Et JavaScript ?



## Un build JavaScript minimaliste

- JavaScript étant un langage interprété, il est moins dépendant d'un outil de build
- Cependant, pour déployer l'application il faut au minimum copier des fichiers
- Il faut aussi de quoi exécuter l'application



## Grunt

<figure>
    <img src="assets/images/grunt-logo.png" alt="Grunt logo"  width="40%"/>
    <figcaption>The JavaScript Task Runner</figcaption>
</figure>



## Principes de fonctionnement

- Description des tâches dans un fichier `gruntfile.js`
  - Pur JavaScript
  - Configuration-over-code
- Un exécutable en ligne de commande : `grunt tâches...`
- De nombreux plugins apportent des tâches pré-définies
  - Il n'y a plus qu'à configurer !
- Possibilité de définir à volonté de nouvelles tâches en JavaScript
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



## Run

- Quand on récupére un projet, on veut pouvoir l'exécuter
- Pour un projet client JavaScript, il faut un serveur HTTP
- Voici un `gruntfile.js` qui fait cela

```js
module.exports = function(grunt) {
  grunt.initConfig({
    connect: { serve: { options: { keepalive:true } } }
  });
  grunt.loadNpmTasks('grunt-contrib-connect');
};
```

- `grunt connect`
- `http://localhost:8000`



## Concepts

- Une *tâche* (task) est une opération automatisable paramétrée abstraite
  - Exemple : copier
- Une *cible* (target) est une instanciation d'une tâche sur un ensemble de
fichier particulier
  - Exemple : copier le fichier `app.js` dans le dossier `dist`
  - Une cible peut surcharger les paramètres de sa tâche
- Pour une tâche donnée, on peut créer autant de cibles que l'on veut



## Syntaxe du Gruntfile

```js
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

```js
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

```js
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



## Exemple

```js
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
sont exécutées les unes après les autres.



<!-- .slide: data-background="zenika/images/questions.png" -->
<!-- .slide: data-background-size="30%" -->



<!-- .slide: data-background="zenika/images/tp1.png" -->
<!-- .slide: data-background-size="30%" -->
