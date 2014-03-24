# Productivité

<!-- .slide: data-background="zenika/images/title-background.png" -->



## Plan

<!-- .slide: class="toc" -->

- [Build et génération du livrable](#/1)
- [Gestion des dépendances](#/2)
- [Tests et qualimétrie](#/3)
- **[Productivité](#/4)**
- [Intégration continue](#/5)
- [Debugging et optimisation](#/6)



## LiveReload

<figure>
    <img 
      src="assets/images/livereload-logo.png" 
      alt="Karma logo"  
      width="40%"
      style="margin-top: 10%"/>
    <figcaption>A happy land where browsers don't need a Refresh button.</figcaption>
</figure>



## Fonctionnement

- Un serveur surveille des fichiers et envoie des notifications à tous les
clients connectés quand l'un d'eux est modifié.
- Le serveur peut être :
  - Une application avec GUI : http://livereload.com/
  - Une application en ligne de commande : `guard-livereload`
  - Un éditeur de texte
  - Un outil de build : `grunt-contrib-watch`
- Le client prend la forme d'un plugin pour navigateur qui rafraichit la page à
chaque notification reçue



## Configuration de Grunt

- `npm install grunt-contrib-watch`

```javascript
watch: {
  options: {
    livereload: true,
  },
  assets: {
    files: ['assets/**'],
    tasks: ['copy:assets'],
  },
}
```

```dos
grunt watch
```

- Attention : `watch` est une tâche bloquante, elle doit donc être la dernière
tâche dans une suite de tâche

Notes :
- `files` : fichiers à surveiller
- `tasks` : tâches à exécuter à chaque modification des fichiers



## Côté navigateur

- Extensions Firefox et Safari disponibles sur livereload.com
  - Pas d'accès aux fichiers locaux pour Safari
- Extension Chrome [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) 
sut le Chrome Web Store
  - Cocher *Autoriser l'accès aux URL de fichier* dans les paramètres de
  l'extension pour pouvoir l'utiliser avec des fichiers locaux
  - Il faut activer l'extension en cliquant dessus pour chaque page que l'on veut voir rechargée

<img 
  src="assets/images/livereload-chrome-activated.png" 
  alt="Karma logo"  
  width="20%"
  class="with-border"/>



<!-- .slide: data-background="zenika/images/questions.png" -->
<!-- .slide: data-background-size="30%" -->