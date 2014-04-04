# Consulter les slides

- Lancer le serveur web inclus : `slides/serve`
- Ouvrir Chrome sur `http://localhost:8000`
- Vous arriverez sur le chapitre zéro, slide une, c'est-à-dire la page de garde de la formation

Alternativement, si vous disposez de NodeJS, NPM et Grunt :
- `npm install`
- `grunt`

**Les slides ont seulement été testées avec Chrome !** Firefox ne centre pas le contenu correctement.

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
- Ajouter `?print-pdf` à la fin de l'URL
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

- Il n'y a pas de reotur à la ligne automatique dans les blocs de code, il faut donc vérifier que les lignes rentrent bien dans la largeur de la slide.
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


# HTML vs LibreOffice

Comparaison de ce système de slide HTML5 par rapport au système classique LibreOffice, en suivant chaque contrainte de Zenika.

## SCM friendlyness

Fini les fichiers binaires impossible à differ. Avec les slides HTML, tout est en texte clair, et les fichiers sont beaucoup plus léger.

## Installation *bulletproof*

### HTML

Les seuls logiciels nécessaires sont déjà installés sur tous les postes : Chrome et un éditeur de texte. Même Notepad peut faire l'affaire. Non seulement ces programmes sont extrêmement répandu mais en plus ils sont très léger et rapides. Tout le reste est embarqué sur le repository Git et fonctionne immédiatement. Si nécessaire, et avec un peu de travail, plus de navigateurs peuvent être rendu compatibles.

### LibreOffice

Il faut télécharger LibreOffice (>100Mo), qui est plutôt lent (mais ça s'améliore). La compatibilité avec d'autres logiciels d'édition de slides (Powerpoint, Google Docs) est absente et le sera probablement toujours.

## Utilisation simple

### HTML

Ouvrir le fichier avec un éditeur de texte, modifier le texte, enregistrer, recharger le navigateur. C'est à la portée de tous. Pour les techniques, il y a LiveReload pour accélérer le workflow.

Grâce à la ségrégation totale du contenu et de la présentation, les rédacteurs n'ont aucun besoin de se préoccuper de la mise en page, des couleurs ou des polices. La seule vérification à faire est que le contenu tient dans la slide.

### LibreOffice

C'est aussi à la portée de tous, cependant il est évident que tout le monde ne maitrise pas les styles. Nous avons tous édité un fichier LibreOffice où les slides arboraient plusieurs polices différentes, où les titres n'étaient pas stylés de la même manière, où le modèle de la slide maitresse n'était pas respecté au profit de styles *ad hoc* uniquement modifiable à la main dans chaque slide individuellement. C'est encore plus difficile à maintenir quand une formation est éclatée en plusieurs fichiers de slides indépendants, ce qui est généralement le cas.


## Cycle écriture/prévisualisation rapide

HTML ne peut pas concurrencer LibreOffice sur ce point. Cependant, avec LiveReload et un écran qui permet de mettre l'éditeur de texte et le navigateur côte à côte, le délai entre la sauvegarde du fichier et l'affichage est inférieur à 1 seconde.

## Génération d'un PDF propre

Les PDF générés par Reveal.js sont très propres et utilisable pour l'impression, mais pas aussi propre que ceux de LibreOffice, puisqu'il subsiste des marges blanches tout autour du contenu. On peut noter aussi l'absence de pieds de page avec copyright et numérotation des pages. Ces points sont cependant potentiellement résolvables avec un peu de recherche et de travail. Une piste [ici](https://gist.github.com/bollwyvl/5355231). Un avantage des slides HTML est que le PDF peut se générer en une seule fois, alors que pour LibreOffice il faut ouvrir chaque chapitre et exporter. A terme il est même potentiellement possible de générer les PDF via un script automatisé.


## Environnement 100% local

Aucuune connexion internet n'est nécessaire pour travailler sur les slides, dans les deux cas.

## Robustesse et reproductibilité

A voir dans le temps.

## Optionnel : Migration simple des formations existantes

Pas de solution triviale pour migrer de LibreOffice vers HTML, mais c'est la faute de LibreOffice ;). Il faudrait utiliser une librairie qui puissent manipuler les présentations OpenDocument, extraire le contenu et le formater en markdown.

Dans tous les cas, les formations HTML gagne haut la main en terme d'interopérabilité : si un jour on veut remplacer Reveal.js par un autre framework, alors le contenu n'en sera aucunement affecté puisqu'il est séparé dans des fichiers markdown à part. A l'opposé, les fichiers produit pas LibreOffice ne sont pas utilisable dans des logiciels similaires comme Powerpoint.


# Les petits +

- [Sublime Text Monokai Extended](https://github.com/jonschlinkert/sublime-monokai-extended) permet d'avoir de la coloration syntaxique pour le markdown ainsi que d'autres améliorations
- [Sublime Text Markdown Extended](https://github.com/jonschlinkert/sublime-markdown-extended) permet la coloration syntaxique du code à l'intérieur des bloc de code intégré au markdown
