# Consulter les slides

- Lancer le serveur web inclus : `slides/serve`
- Naviguer sur `http://localhost:8000`
- Vous arriverez sur le chapitre z�ro, slide une, c'est-�-dire la page de garde
de la formation

Alternativement, si vous disposez de NodeJS, NPM et Grunt :
- `npm install`
- `grunt` (lance un serveur sur le port 8000, avec LiveReload)
- Naviguer sur `http://localhost:8000`

## Navigation

- &#8593; et &#8595; pour naviguer au sein du chapitre
- &#8592; et &#8594; pour naviguer entre les chapitres
- Les slides Plan sont faites de liens pour sauter directement aux diff�rents
chapitres
- La petite fl�che en bas � gauche revient � la slide Plan maitresse (chapitre
z�ro, slide deux)
- Les fonctions pr�c�dent et suivant du navigateur fonctionne normalement

## Fonctions avanc�es

- La touche `o` donne acc�s � une vue avec du recul sur les slides
- La touche `s` active le mode pr�sentateur : une nouvelle fen�tre s'ouvre avec slide en cours, slide suivante, temps �coul�, notes
- La touche `b` "�teind" la pr�sentation, afin que les participants se
concentre sur le pr�sentateur


# R�diger ou �diter des slides

## Principes

Le framework utilis� est [Reveal.js](https://github.com/hakimel/reveal.js).

Les slides sont compos�es de deux types de fichiers. D'une part, `index.html`
sert de conteneur aux slides et configure Reveal. D'autre part, le contenu
lui-m�me est �crit en markdown.

Reveal est capable de convertir le markdown en HTML � la vol�e, il n'y a donc
pas de compilation. Par contre, `index.html` doit obligatoirement �tre atteint
via un serveur pour que Reveal puisse charger les fichiers markdown. Ouvrir
localement `index.html` entraine des erreurs et les slides ne sont pas
affich�es.

## Inclusion du Markdown

Pour modifier la liste de fichiers charg�s, �diter `index.html`. La partie
centrale comprend un �l�ment `section` par fichier. Il suffit de cr�er,
modifier, d�placer, ou supprimer ces �l�ments.

## Contenu

### R�gles de r�daction

- Le contenu est �clat� dans les fichiers markdown, un par chapitre de la formation.
- La formation commence par un chapitre z�ro, qui contient une page de titre avec le titre de la formation, une page qui pr�sente le plan de la formation, et une page d'invitation aux questions.
- Tous les chapitres d�butent par une page de titre avec le titre du chapitre et une page qui reprend le plan de la formation. La partie en cours en mise en �vidence.
- Tous les chapitres se terminent par une page invitant aux questions, puis
�ventuellement par une page qui annonce un TP.

### Markdown

- Le [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown)
est support�
- Chaque slides doit �tre s�par�es par 3 lignes blanches.

#### Pages de titre

Les pages de titre sont compos�es d'un titre de premier niveau d'un fond
Zenika.

```markdown
# Titre du chapitre

<!-- .slide: data-background="zenika/images/title-background.png" -->
```

#### Pages de questions

Les pages de questions n'ont pas de titre et le fond `questions.png` avec une
taille de 30%.

```markdown
<!-- .slide: data-background="zenika/images/tp3.png" -->
<!-- .slide: data-background-size="30%" -->
```

#### Pages de plan

- L'emphase sur la partie en cours dans les slides de plan est une emphase
double : `**Partie en cours**`.
- Les liens entre slides �tant possibles, il est int�ressant d'un mettre sur
les slides de plan. Un lien inter-slides est au format `#/<chapitre>/<slide>`
sachant que les chapitres et les slides sont num�rot�s � partir de z�ro, et que
le num�ro de slide est facultatif (z�ro par d�faut).

```markdown
## Plan

- [Partie 1](#/1)
- **[Partie 2](#/2)**
- [Partie 3](#/3)
```

#### Pages standards

- Les slides standards commencent par un titre de second niveau.
- Les mots importants sont � emphaser avec emphase simple : `*mot important*`.

#### Code

- Pour le code inline, utiliser la syntaxe Markdown classique, et pour les 
blocs de code, utiliser les blocs GFM avec sp�cification du langage.

<pre><code>```javascript
function(arg) { return 'du javascript en couleur !'; }
```</code></pre>

- Attention : il n'y a pas de reotur � la ligne automatique dans les blocs de
code, il faut donc v�rifier que les lignes rentrent bien dans la largeur de la
slide.
- Attention : si une ligne de code commence par une suite continue d'espaces
trop longue, la ligne est mise � la ligne. Il est donc n�cessaire d'indenter
avec 2 espaces seulement.

#### Images 

- Pour les images, �crire du HTML classique. La taille peut �tre modifi� via
l'attribut `width`, et la position en modifiant les marges. La classe 
`.with-border` active une fine bordure noire autour de l'image.

```html
<img 
    src="assets/images/image.png" 
    alt="Une image" 
    width="90%" 
    style="margin-top: 10%"
    class="with-border"/>
```

- Pour ajouter une l�gende � une image, on peut utiliser les �l�ments HTML5
`figure` et `figcaption`.

```html
<figure>
    <img 
      src="assets/images/image.png" 
      alt="Une image"/>
    <figcaption>Une superbe repr�sentation de quelque chose</figcaption>
</figure>
```

#### Fragments

On peut indiquer que des �l�ments de slides ne doivent �tre r�v�l�s qu'au fur
et � mesure que le formateur appuie sur le bouton. Il faut utiliser la classe
`fragment`.

```markdown
- item qui n'apparait pas tout de suite <!-- .element: class="fragment" -->
```

#### Fonctionnalit�s avanc�es

Si besoin, on peut ajouter des attibuts HTML � la slide en cours o� � un
�l�ment gr�ce aux syntaxes `<!-- .slide: ... -->` et `<!-- .element: ... -->`.
Cela peut �tre utile pour donner un style particulier � un �l�ment, par exemple
pour le positionner.