# Formation Industrialisation Web & Javascript
# Cahier de TP

## Pré-requis

### NodeJS et NPM

#### Windows

Si une connexion internet est disponible, se rendre sur http://nodejs.org et
télécharger la dernière version de NodeJS. NPM est embarqué. Après
l'installation, lancer une invite de commande et exécuter `node --version` pour
vérifier que la commande `node` est disponible. Faire de même pour `npm`.

En cas de problème, vérifier que le dossier d'installation de NodeJS se trouve
bien dans le `PATH`, et l'ajouter si nécessaire.


#### Linux

TODO


### Grunt

Exécuter la commande `npm install -g grunt-cli` pour installer la commande 
`grunt`. Pour chaque TP, installer Grunt localement pour le projet en se placer
dans le répertoire de travail et exécuter `npm install grunt`.


## TP 1 : Génération d'un livrable

Nous allons mettre en place un système de build automatisé pour l'application
existante ZenContacts. Ce build se compose des étapes suivantes :
- Analyse syntaxique du Gruntfile
- Analyse syntaxique du javascript
- Exécution des tests
- Concaténation de l'ensemble des fichiers javascript en seulement 2 
fichiers : un pour les librairies tierce, et un pour l'application elle-même
- Minification des 2 fichiers précédemment créés

Le build complet pourra être exécuté sur un poste vierge via les commandes
suivantes : `npm install` puis `grunt`.


### Analyse syntaxique Javascript

- Installer `grunt-contrib-jshint`.
- Créer un Gruntfile et configurer la tâche `jshint`.
  - La tâche `jshint` accepte des cibles sous forme de tableaux de string,
  chaque string étant un *filesystem glob* tel que `js/**/*.js`.
  Alternativement, la cible peut être un objet contenant un attribut `files`,
  lui-même un objet contenant un attribut `src` qui contient le tableaux de
  chemins.
  - Créer une cible `gruntfile` pour Gruntfile et une cible `app` pour les fichiers de l'applications qui se trouvent dans le dossier `js/app`.
- Exécuter `grunt jshint:gruntfile`, et corriger les erreurs s'il y en a.
- Exécuter `grunt jshint:app`, et remarquer les erreurs qui s'affichent.
  - Si le rapport d'erreurs semble trop confu, installer `jshint-stylish` avec
  `npm` puis insérer `options: { reporter: require('jshint-stylish') }` dans la
  tâche `jshint` et relancer.
- Il y a beaucoup d'erreurs `'angular' is not defined` ou 
`'window' is not defined`. Ces erreurs sont des faux positifs puisque ces
variables globales sont bien définies. Nous devons indiqué cela à JSHint.
  - Créer un fichier `.jshintrc` dans le même dossier que le Gruntfile.
  - Activer l'option `browser` pour éviter `'window' is not defined`.
  - Pour les variables globales de librairies, JSHint supporte une option
  `globals` qu'il faut valoriser par une map dont les clés sont les noms des
  variables et les valeurs sont des booléens indiquant si la variable peut être
  redéfinie ou non.
  - Ajouter `"globals": { "angular": false }` dans `.jshintrc`.
  - Avant de relancer la tâche, modifier votre Gruntfile pour qu'il utilise le
  `.jshintrc` en ajoutant l'option `jshint: true` à la cible `app`.
  - Relancer la tâche et vérifier que `window` et `angular` ne posent plus de
  soucis.
  - Ajouter les globales `markdown`, `Fuse`, et `zenContactApp` (attention
  cette dernière étant définie par l'application, il faut mettre `true` en
  valeur).
  - `'$' is not defined` se corrige en activant l'option `jquery`.
- Relancer la tâche. Il ne devrait rester que 2 types d'erreurs.
  - Corriger les `Missing semicolon` en éditant les fichiers incriminés.
  - L'erreur `Use the function form of "use strict"` est intéressante. Pour le
  moment chaque fichier de l'application commence par `'use strict';`, ce qui
  active le [mode strict](https://developer.mozilla.org/fr/docs/R%C3%A9f%C3%A9rence_de_JavaScript_1.5_Core/Fonctions_et_portee_des_fonctions/Strict_mode).
  Activer le mode strict en tête de script est une mauvaise pratique puisque 
  cela rend le script impossible à concaténer avec un script non-strict.
  La bonne pratique veut que chaque script soit englobé par une fonction 
  auto-appelante (`(function(){}())`), qui elle est un mode strict. C'est cela
  que JSHint nous conseille de faire. Cependant, nous n'allons pas concaténer
  notre javascript applicatif avec du javascript tierce-partie, et tous les
  scripts de l'application sont stricts. Il n'y a donc pas de problèmes : nous
  pouvons ignorer cett erreur en activant l'option `globalstrict`.
- Relancer la tâche et vérifier qu'aucune erreur ne subsiste.
