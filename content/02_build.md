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
    <img src="assets/images/grunt-logo.png" alt="" />
    <figcaption>The Javascript Task Runner</figcaption>
</figure>



## Grunt <small>Principes de fonctionnement</small>

- Description des tâches dans un fichier `Gruntfile.js`
    - Pur Javascript
- Un exécutable en ligne de commande : `grunt tâches...`
- De nombreux plugins apportent des tâches pré-définies
    - Il n'y a plus qu'à configurer !
- Possibilité de définir à volonté de nouvelles tâches en Javascript
    - APIs pour manipuler les fichiers, le logging, le reporting...



<!-- .slide: data-background="/assets/zenika/images/questions.png" -->
<!-- .slide: data-background-size="30%" -->