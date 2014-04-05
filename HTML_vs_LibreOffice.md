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
