# Consulter les slides

- Aller dans le répertoire slides
- Lancer le serveur web inclus : `./serve` (linux) ou `.\serve.exe` (windows)
- Ouvrir Chrome sur `http://localhost:8000`
- Vous arriverez sur le chapitre zéro, slide une, c'est-à-dire la page de garde de la formation

Alternativement, vous pouvez lancer un serveur web avec *Grunt*, avec le mode **livereload**, pour la prise en compte automatique des modifications lors de l'édition : `npm install && grunt`

A ce jour, **les slides ont seulement été testées avec Chrome !** Firefox ne centre pas le contenu correctement.

## Navigation

- Flèches haut et bas pour naviguer au sein du chapitre
- Flèches gauche et droite pour naviguer entre les chapitres
- Les slides Plan sont faites de liens pour sauter directement aux différents chapitres
- La petite flèche en bas à gauche revient à la slide Plan maitresse (chapitre zéro, slide deux)
- Les fonctions précédent et suivant du navigateur fonctionne normalement

## Fonctions avancées

- La touche `o` donne accès à une vue avec du recul sur les slides
- La touche `s` active le mode présentateur : une nouvelle fenêtre s'ouvre avec slide en cours, slide suivante, temps écoulé, notes
- La touche `b` "éteind" la présentation, afin que les participants se concentre sur le présentateur

## Exporter en PDF

- Ouvrir les slides dans Chrome
- Ajouter `?print-pdf` à la fin de l'URL (`http://localhost:8000?print-pdf`)
- Contrôle-P pour amener les options d'impression
- Sélectionner :
  - Destination : Enregistrer au format PDF
  - Mise en page : Paysage
  - Marges : Aucun
- Enregistrer le PDF


# Rédiger ou éditer des slides

## Principes

Le framework utilisé est [Reveal.js](https://github.com/hakimel/reveal.js).

Les slides sont composées de deux types de fichiers. D'une part, `index.html` sert de conteneur aux slides et configure Reveal. D'autre part, le contenu lui-même est écrit en markdown.

Reveal est capable de convertir le markdown en HTML à la volée, il n'y a donc pas de compilation. Par contre, `index.html` doit obligatoirement être atteint via un serveur pour que Reveal puisse charger les fichiers markdown. Ouvrir localement `index.html` entraine des erreurs et les slides ne sont pas affichées.

## Inclusion du Markdown

Pour modifier la liste de fichiers chargés, éditer `index.html`. La partie centrale comprend un élément `section` par fichier. Il suffit de créer, modifier, déplacer, ou supprimer ces éléments.

Exemple: 

```html
<div class="slides">

  <section 
    data-markdown="00_agenda.md"  
    data-vertical="^\r?\n\r?\n\r?\n"
    data-notes="^Notes :">
  </section>

  ...
</div>
```

## Contenu

### Règles de rédaction

- Le contenu est éclaté dans les fichiers markdown, un par chapitre de la formation.
- La formation commence par un chapitre zéro, qui contient au minimum une page de titre avec le titre de la formation, une page qui présente le plan de la formation, et une page d'invitation aux questions. On peut éventellement ajouter des rappels concernant les horaires et autres informations pratiques.
- Tous les chapitres débutent par une page de titre avec le titre du chapitre et une page qui reprend le plan de la formation. La partie en cours en mise en évidence.
- Tous les chapitres se terminent par une page invitant aux questions, puis éventuellement par une page qui annonce un TP.

### Markdown

- Le [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown) est supporté
- Chaque slides doit être séparées par 3 lignes blanches.

#### Pages de titre

Les pages de titre sont composées d'un titre de premier niveau d'un fond Zenika.

```markdown
# Titre du chapitre

<!-- .slide: data-background="zenika/images/title-background.png" -->
```

#### Pages de questions

Les pages de questions n'ont pas de titre et le fond `questions.png` avec une taille de 30%.

```markdown
<!-- .slide: data-background="zenika/images/tp3.png" -->
<!-- .slide: data-background-size="30%" -->
```

#### Pages de plan

- L'emphase sur la partie en cours dans les slides de plan est une emphase double : `**Partie en cours**`.
- Les liens entre slides étant possibles, il est intéressant d'un mettre sur les slides de plan. Un lien inter-slides est au format `#/<chapitre>/<slide>` sachant que les chapitres et les slides sont numérotés à partir de zéro, et que le numéro de slide est facultatif (zéro par défaut).

```markdown
## Plan

- [Partie 1](#/1)
- **[Partie 2](#/2)**
- [Partie 3](#/3)
```

#### Pages standards

- Les slides standards commencent par un titre de second niveau.
- Les mots importants sont à emphaser avec emphase simple : `*mot important*`.

#### Code

- Pour le code inline, utiliser la syntaxe Markdown classique, et pour les blocs de code, utiliser les blocs GFM avec spécification du langage.

<!-- Utilisation de <br/> ici car les balises pre et code perturbent la coloration syntaxique Markdown Extended de Sublime Text si elles s'ouvrent et se ferment sur deux lignes différentes. -->

<pre><code>```javascript<br/>function(arg) { return 'du javascript en couleur !'; }<br/>```</code></pre>

- Il n'y a pas de retour à la ligne automatique dans les blocs de code, il faut donc vérifier que les lignes rentrent bien dans la largeur de la slide.
- Si une ligne de code commence par une suite continue d'espaces trop longue, la ligne est mise à la ligne. Il est donc nécessaire d'indenter avec 2 espaces seulement.

#### Images

- Pour les images, écrire du HTML classique. La taille peut être modifié via l'attribut `width`, et la position en modifiant les marges. La classe `.with-border` active une fine bordure noire autour de l'image.

```html
<img 
  src="assets/images/image.png" 
  alt="Une image" 
  width="90%" 
  style="margin-top: 10%"
  class="with-border"/>
```

- Pour ajouter une légende à une image, on peut utiliser les éléments HTML5 `figure` et `figcaption`.

```html
<figure>
    <img 
      src="assets/images/image.png" 
      alt="Une image"/>
    <figcaption>Une superbe représentation de quelque chose</figcaption>
</figure>
```

#### Fragments

On peut indiquer que des éléments de slides ne doivent être révélés qu'au fur et à mesure que le formateur appuie sur le bouton. Il faut utiliser la classe `fragment`.

```markdown
- item qui n'apparait pas tout de suite <!-- .element: class="fragment" -->
```

#### Fonctionnalités avancées

Si besoin, on peut ajouter des attibuts HTML à la slide en cours où à un élément grâce aux syntaxes `<!-- .slide: ... -->` et `<!-- .element: ... -->`. Cela peut être utile pour donner un style particulier à un élément, par exemple pour le positionner.
