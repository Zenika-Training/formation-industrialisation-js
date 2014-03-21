# Gestion<br/>des dépendances

<!-- .slide: data-background="zenika/images/title-background.png" -->



## Plan

<!-- .slide: class="toc" -->

- [Build et génération du livrable](#/1)
- **[Gestion des dépendances](#/2)**
- [Tests et qualimétrie](#/3)
- [Productivité](#/4)
- [Intégration continue](#/5)
- [Debugging et optimisation](#/6)



## Motivation

- Facilité d'installation des dépendances
- Pas de dépendances dans le gestionnaire de sources
- Gestion des dépendances transitives
  - Si l'application dépend de `A` et que `A` dépend de `B` alors `B` est
  localisée et téléchargée automatiquement



## NPM

<figure style="margin-top: 20%">
    <img src="assets/images/npm-logo.png" alt="NPM logo"  width="40%"/>
    <figcaption>The Node Package Manager</figcaption>
</figure>



## NPM <small>Node Package Manager</small>

- http://npmjs.org
- ~64k packages pour la plate-forme Node
  - pas pour le Javascript côté client
  - mais utile pour les outils de développement (Grunt...)
- Description des dépendances dans un fichier `package.json`
  - Différenciation des dépendances de développement (build, test) et des
  dépendances de production
- Stockage dans un dossier `node_modules`, *un par projet*



## Syntaxe du package.json

```json
{
  "name": "formation-zenika-industrialisation-web-et-javascript",
  "version": "1.0.0",
  "author": "Zenika",
  "devDependencies": {
    "grunt": "~0.4.4"
  },
  "dependencies": {
    "async": "0.2.x",
    "underscore": "^1.6.0"
  }
}
```

Note:
  - `~0.4.4` signifie "au moins 0.4.4, mais pas 0.5 ou plus".
  - `^1.6.0` au moins 1.6.0, mais pas 2.0 ou plus.
  - Plus d'explications au slide suivant



## Commandes

- `npm init` crée un `package.json` interactivement
- `npm install` installe toutes les dépendances si un `package.json` est
présent
- L'option `--save` de `npm install` enregistre la dépendance
  - Idem pour les dépendances de développement avec `--save-dev`
  - La version peut être spécifiée : `npm install <package>@<version>`
- Recherche : `npm search <term>`



## Côté client ?

- Rappel : NPM installe des packages pour NodeJS, pas des librairies pour le
développement dans le navigateur
- Il faut donc un autre programme pour cela...



## Bower

<figure>
    <img src="assets/images/bower-logo.png" alt="Bower logo"  width="40%"/>
    <figcaption>A package manager for the web</figcaption>
</figure>



## Bower

- http://bower.io
- Basé sur Git, développé par Twitter
- Tourne sur [NodeJS](http://nodejs.org) : `npm install -g bower`
- ~10k packages dans l'index
  - mais possible d'utiliser n'importe quel dépôt Git ou SVN comme source pour
  d'autres packages
- Description des dépendances dans un fichier `bower.json`
  - Différenciation des dépendances de développement (build, test) et des
  dépendances de production
- Stockage dans un dossier `bower_components`, *un par projet*



## Syntaxe du bower.json

```json
{
  "name": "formation-zenika-industrialisation-web-et-javascript",
  "version": "1.0.0",
  "devDependencies": {
    "underscore": "^1.6.0"
  },
  "dependencies": {
    "angular": "~1.2.10"
  }
}
```

- Les versions doivent suivre le [Semantic Versioning 2.0](http://semver.org/)
  - version = major.minor.patch-anything
- ou être une référence Git : commit, tag, branche



## Commandes

- `bower init` crée un `bower.json` interactivement
- `bower install` installe toutes les dépendances si un fichier `bower.json`
est présent
- L'option `--save` de `bower install <package>` enregistre la dépendance dans
le `bower.json`
  - Idem pour les dépendances de développement avec `--save-dev`
  - La version peut être spécifiée : `bower install <package>#<version>`
- Recherche : `bower search <term>`



## Intégration Bower / Grunt

- On peut consommer les packages Bower simplement en référençant leur contenu
dans une page HTML
```html
<link href="bower_components/bootstrap/dist/bootstrap.css">
```
&#8658; <!-- fat right arrow --> Contraint d'embarquer `bower_components` en
production alors que tous les fichiers ne sont pas forcément utilisés

- Solution : utiliser Grunt pour lancer `bower install` puis copier les
fichiers dans le répertoire de build
  - Plusieurs plugins de la communauté sont disponibles (fonctionnalités et
  maturité diverses) : `grunt-bower`, `grunt-bowercopy`, `grunt-bower-task`
  - On peut aussi le faire avec `grunt-contrib-copy`



<!-- .slide: data-background="zenika/images/questions.png" -->
<!-- .slide: data-background-size="30%" -->