# Introduction à l'industrialisation

<!-- .slide: data-background="zenika/images/title-background.png" -->



## Plan

- **[Introduction à l'industrialisation](#/1)**
- [Build & Run](#/2)
- [Optimisation du livrable](#/3)
- [Gestion des dépendances](#/4)
- [Tests et qualimétrie](#/5)
- [Productivité](#/6)
- [Intégration continue](#/7)
- [Debugging et optimisation](#/8)



## Sans industrialisation

- Les développeurs considèrent leur travail terminé si leur code fonctionne sur leur poste
- Les testeurs passent des semaines à vérifier manuellement que l'application fonctionne
- Les développeurs corrigent des bugs introduit des mois auparavant
- La livraison est prise en charge par une équipe spécialisée qui est seule à connaitre le processus



## Industrialisation ?

- Faire d'une livraison un "non évènement"
  - Visible
  - Facile
  - Rapide
  - Prévisible
  - Automatisé

Notes :
- Visible : tout le monde peut consulter le processus, il est clair et documenté
- Facile : lancer une livraison est à la protée de tous
- Rapide : on parle de minutes ou d'heures, pas de jours
- Prévisible : le processus se déroule toujours de la même façon
- Automatisé : pas d'action humaine au-delà de l'éventuel déclenchement



## Avantages

- Processus reproductible à l'identique par n'importe quel membre de l'équipe
- Soulage les équipes de tâches rébarbatives
- Fournit aux développeur un retour plus rapide sur leur travail
- Gain de temps et d'argent



## Livraison ?

<img src="assets/images/livraison.png" width="80%" style="margin-top: 20%;" />



## Livraison ?

- Compilation
- Exécution des tests
- Validateurs de style
- Qualimétrie
- Génération et publication de la documentation
- Publication des livrables
- Déploiement sur les machines cibles
- Démarrage



## Vocabulaire

- Quand on vérifie l'état du code en permanence, on parle de *Continuous Integration*
- Quand on est prêt à livrer à tout moment, on parle de *Continuous Delivery*
- Quand on livre à fréqeunce très rapide, on parle de *Continuous Deployment*

Notes :
Sur la slide précédente : 1-4 = Continuous Integration; 5-6 = Continuous Delivery; 7-8 = Continuous Deployment



## Chez Etsy

<img src="assets/images/etsy.png" width="30%" />

- 32 livraisons par jour en moyenne sur l'année 2012
- 196 personnes différentes ont lancé une livraison sur la même année
- http://fr.slideshare.net/beamrider9/continuous-deployment-at-etsy-a-tale-of-two-approaches



## Chez Quora

<img src="assets/images/quora.png" width="30%" />

- Jusqu'à une livraison toutes les 10 minutes
- http://engineering.quora.com/Continuous-Deployment-at-Quora



<!-- .slide: data-background="zenika/images/questions.png" -->
<!-- .slide: data-background-size="30%" -->
