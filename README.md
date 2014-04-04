# Consulter les slides

- Lancer le serveur web inclus : `slides/serve`
- Ouvrir Chrome sur `http://localhost:8000`
- Vous arriverez sur le chapitre z�ro, slide une, c'est-�-dire la page de garde de la formation

Alternativement, si vous disposez de NodeJS, NPM et Grunt :
- `npm install`
- `grunt`

**Les slides ont seulement �t� test�es avec Chrome !** Firefox ne centre pas le contenu correctement.

## Navigation

- Fl�ches haut et bas pour naviguer au sein du chapitre
- Fl�ches gauche et droite pour naviguer entre les chapitres
- Les slides Plan sont faites de liens pour sauter directement aux diff�rents chapitres
- La petite fl�che en bas � gauche revient � la slide Plan maitresse (chapitre z�ro, slide deux)
- Les fonctions pr�c�dent et suivant du navigateur fonctionne normalement

## Fonctions avanc�es

- La touche `o` donne acc�s � une vue avec du recul sur les slides
- La touche `s` active le mode pr�sentateur : une nouvelle fen�tre s'ouvre avec slide en cours, slide suivante, temps �coul�, notes
- La touche `b` "�teind" la pr�sentation, afin que les participants se concentre sur le pr�sentateur

## Exporter en PDF

- Ouvrir les slides dans Chrome
- Ajouter `?print-pdf` � la fin de l'URL
- Contr�le-P pour amener les options d'impression
- S�lectionner :
  - Destination : Enregistrer au format PDF
  - Mise en page : Paysage
  - Marges : Aucun
- Enregistrer le PDF


# R�diger ou �diter des slides

## Principes

Le framework utilis� est [Reveal.js](https://github.com/hakimel/reveal.js).

Les slides sont compos�es de deux types de fichiers. D'une part, `index.html` sert de conteneur aux slides et configure Reveal. D'autre part, le contenu lui-m�me est �crit en markdown.

Reveal est capable de convertir le markdown en HTML � la vol�e, il n'y a donc pas de compilation. Par contre, `index.html` doit obligatoirement �tre atteint via un serveur pour que Reveal puisse charger les fichiers markdown. Ouvrir localement `index.html` entraine des erreurs et les slides ne sont pas affich�es.

## Inclusion du Markdown

Pour modifier la liste de fichiers charg�s, �diter `index.html`. La partie centrale comprend un �l�ment `section` par fichier. Il suffit de cr�er, modifier, d�placer, ou supprimer ces �l�ments.

## Contenu

### R�gles de r�daction

- Le contenu est �clat� dans les fichiers markdown, un par chapitre de la formation.
- La formation commence par un chapitre z�ro, qui contient au minimum une page de titre avec le titre de la formation, une page qui pr�sente le plan de la formation, et une page d'invitation aux questions.
- Tous les chapitres d�butent par une page de titre avec le titre du chapitre et une page qui reprend le plan de la formation. La partie en cours en mise en �vidence.
- Tous les chapitres se terminent par une page invitant aux questions, puis �ventuellement par une page qui annonce un TP.

### Markdown

- Le [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown) est support�
- Chaque slides doit �tre s�par�es par 3 lignes blanches.

#### Pages de titre

Les pages de titre sont compos�es d'un titre de premier niveau d'un fond Zenika.

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
- Les liens entre slides �tant possibles, il est int�ressant d'un mettre sur les slides de plan. Un lien inter-slides est au format `#/<chapitre>/<slide>` sachant que les chapitres et les slides sont num�rot�s � partir de z�ro, et que le num�ro de slide est facultatif (z�ro par d�faut).

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

- Pour le code inline, utiliser la syntaxe Markdown classique, et pour les blocs de code, utiliser les blocs GFM avec sp�cification du langage.

<!-- Utilisation de <br/> ici car les balises pre et code perturbent la coloration syntaxique Markdown Extended de Sublime Text si elles s'ouvrent et se ferment sur deux lignes diff�rentes. -->

<pre><code>```javascript<br/>function(arg) { return 'du javascript en couleur !'; }<br/>```</code></pre>

- Il n'y a pas de reotur � la ligne automatique dans les blocs de code, il faut donc v�rifier que les lignes rentrent bien dans la largeur de la slide.
- Si une ligne de code commence par une suite continue d'espaces trop longue, la ligne est mise � la ligne. Il est donc n�cessaire d'indenter avec 2 espaces seulement.

#### Images

- Pour les images, �crire du HTML classique. La taille peut �tre modifi� via l'attribut `width`, et la position en modifiant les marges. La classe `.with-border` active une fine bordure noire autour de l'image.

```html
<img 
    src="assets/images/image.png" 
    alt="Une image" 
    width="90%" 
    style="margin-top: 10%"
    class="with-border"/>
```

- Pour ajouter une l�gende � une image, on peut utiliser les �l�ments HTML5 `figure` et `figcaption`.

```html
<figure>
    <img 
      src="assets/images/image.png" 
      alt="Une image"/>
    <figcaption>Une superbe repr�sentation de quelque chose</figcaption>
</figure>
```

#### Fragments

On peut indiquer que des �l�ments de slides ne doivent �tre r�v�l�s qu'au fur et � mesure que le formateur appuie sur le bouton. Il faut utiliser la classe `fragment`.

```markdown
- item qui n'apparait pas tout de suite <!-- .element: class="fragment" -->
```

#### Fonctionnalit�s avanc�es

Si besoin, on peut ajouter des attibuts HTML � la slide en cours o� � un �l�ment gr�ce aux syntaxes `<!-- .slide: ... -->` et `<!-- .element: ... -->`. Cela peut �tre utile pour donner un style particulier � un �l�ment, par exemple pour le positionner.


# HTML vs LibreOffice

Comparaison de ce syst�me de slide HTML5 par rapport au syst�me classique LibreOffice, en suivant chaque contrainte de Zenika.

## SCM friendlyness

Fini les fichiers binaires impossible � differ. Avec les slides HTML, tout est en texte clair, et les fichiers sont beaucoup plus l�ger.

## Installation *bulletproof*

### HTML

Les seuls logiciels n�cessaires sont d�j� install�s sur tous les postes : Chrome et un �diteur de texte. M�me Notepad peut faire l'affaire. Non seulement ces programmes sont extr�mement r�pandu mais en plus ils sont tr�s l�ger et rapides. Tout le reste est embarqu� sur le repository Git et fonctionne imm�diatement. Si n�cessaire, et avec un peu de travail, plus de navigateurs peuvent �tre rendu compatibles.

### LibreOffice

Il faut t�l�charger LibreOffice (>100Mo), qui est plut�t lent (mais �a s'am�liore). La compatibilit� avec d'autres logiciels d'�dition de slides (Powerpoint, Google Docs) est absente et le sera probablement toujours.

## Utilisation simple

### HTML

Ouvrir le fichier avec un �diteur de texte, modifier le texte, enregistrer, recharger le navigateur. C'est � la port�e de tous. Pour les techniques, il y a LiveReload pour acc�l�rer le workflow.

Gr�ce � la s�gr�gation totale du contenu et de la pr�sentation, les r�dacteurs n'ont aucun besoin de se pr�occuper de la mise en page, des couleurs ou des polices. La seule v�rification � faire est que le contenu tient dans la slide.

### LibreOffice

C'est aussi � la port�e de tous, cependant il est �vident que tout le monde ne maitrise pas les styles. Nous avons tous �dit� un fichier LibreOffice o� les slides arboraient plusieurs polices diff�rentes, o� les titres n'�taient pas styl�s de la m�me mani�re, o� le mod�le de la slide maitresse n'�tait pas respect� au profit de styles *ad hoc* uniquement modifiable � la main dans chaque slide individuellement. C'est encore plus difficile � maintenir quand une formation est �clat�e en plusieurs fichiers de slides ind�pendants, ce qui est g�n�ralement le cas.


## Cycle �criture/pr�visualisation rapide

HTML ne peut pas concurrencer LibreOffice sur ce point. Cependant, avec LiveReload et un �cran qui permet de mettre l'�diteur de texte et le navigateur c�te � c�te, le d�lai entre la sauvegarde du fichier et l'affichage est inf�rieur � 1 seconde.

## G�n�ration d'un PDF propre

Les PDF g�n�r�s par Reveal.js sont tr�s propres et utilisable pour l'impression, mais pas aussi propre que ceux de LibreOffice, puisqu'il subsiste des marges blanches tout autour du contenu. On peut noter aussi l'absence de pieds de page avec copyright et num�rotation des pages. Ces points sont cependant potentiellement r�solvables avec un peu de recherche et de travail. Une piste [ici](https://gist.github.com/bollwyvl/5355231). Un avantage des slides HTML est que le PDF peut se g�n�rer en une seule fois, alors que pour LibreOffice il faut ouvrir chaque chapitre et exporter. A terme il est m�me potentiellement possible de g�n�rer les PDF via un script automatis�.


## Environnement 100% local

Aucuune connexion internet n'est n�cessaire pour travailler sur les slides, dans les deux cas.

## Robustesse et reproductibilit�

A voir dans le temps.

## Optionnel : Migration simple des formations existantes

Pas de solution triviale pour migrer de LibreOffice vers HTML, mais c'est la faute de LibreOffice ;). Il faudrait utiliser une librairie qui puissent manipuler les pr�sentations OpenDocument, extraire le contenu et le formater en markdown.

Dans tous les cas, les formations HTML gagne haut la main en terme d'interop�rabilit� : si un jour on veut remplacer Reveal.js par un autre framework, alors le contenu n'en sera aucunement affect� puisqu'il est s�par� dans des fichiers markdown � part. A l'oppos�, les fichiers produit pas LibreOffice ne sont pas utilisable dans des logiciels similaires comme Powerpoint.
