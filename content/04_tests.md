# Tests<br/>Qualimétrie

<!-- .slide: data-background="/assets/zenika/images/title-background.png" -->



## Plan

- Build et génération du livrable
- Gestion des dépendances
- **Tests et qualimétrie**
- Productivité
- Intégration continue
- Debugging et optimisation



## Objectifs

- Feedback rapide sur la fiabilité du code à tous les niveaux
  - Tests unitaires
  - Tests de bout-en-bout
  - Analyse statique
  - Calcul de la couverture



## Tests unitaires

<figure>
    <img src="assets/images/jasmine-logo.png" alt="Jasmine logo"  width="50%"/>
</figure>



## Jasmine

- http://jasmine.github.io/2.0

```javascript
describe('a parrot', function() {

  var sut = parrot();
  var message = 'hello!';

  it("repeats what it's told", function () {
    sut.onTold(message);
    expect(sut.repeat()).toBe(message);
  });
});
```

- Divers matchers : `toBeEqual`, `toContain`, `toBeLessThan`,
`toBeTruthy`... + matchers custom



## Setup & Teardown

```javascript
describe('a parrot', function() {

  var sut = parrot();
  var message = 'hello!';

  beforeEach(function() { 
    sut.onPet(); 
  });

  afterEach(function() { 
    sut.onFed(); 
  });

  it("repeats what it's told", function () {
    sut.onTold(message);
    expect(sut.repeat()).toBe(message);
  });

});
```



## Mocks / Spies

```javascript
describe('a parrot', function() {

  var sut = parrot();
  var message = 'hello!';

  beforeEach(function() { 
    spyOn(sut, 'onTold'); 
  });

  it("repeats what it's told", function () {
    sut.onTold(message);
    expect(sut.onTold).toHaveBeenCalledWith(message);
  });

});
```



## Lancer les tests

- Dans un navigateur
  - Ecrire une page HTML qui importe Jasmine, le code à tester, les tests
  - Ouvrir la page dans le navigateur de référence
  - Une telle page est fourni avec Jasmine, il faut simplement modifier les 
  `script[src]`
- Dans Node, à l'aide du projet `jasmine-node`
  - `npm install -g jasmine-node`
  - `jasmine-node <dossier de tests>`



## Alternatives

- [Mocha](http://visionmedia.github.io/mocha/)
  - API très proche de Jasmine
  - Conçu pour Node mais supporte les navigateurs
  - Plus flexible mais plus difficile à appréhender (pas d'API d'assert ni de
  mock embarquées)
- [QUnit](https://qunitjs.com/)
  - API standard xUnit
  - Conçu pour les navigateurs, peut fonctionner sous Node avec à l'aide de
  projets tierce-partie



<!-- .slide: data-background="/assets/zenika/images/questions.png" -->
<!-- .slide: data-background-size="30%" -->