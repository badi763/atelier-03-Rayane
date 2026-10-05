# Atelier 3 · Kata créationnel

**Séance 3 · Patterns créationnels · 45 min de kata, puis 10 min de débrief**

Trois problèmes de création d'objets. Pour chacun, choisissez le pattern adapté (Factory Method, Abstract Factory, Builder… **ou aucun**). Implémentez-le pour faire passer les tests, puis justifiez votre choix dans `JUSTIFICATIONS.md`.

⚠️ **L'un des trois problèmes ne nécessite aucun pattern.** À vous de le détecter (YAGNI).
Les tests vérifient le comportement, jamais la structure. Le choix de conception vous appartient.

## Les trois problèmes

1. **`src/probleme1-export/`** : exporter un rapport en plusieurs formats (`csv`, `json`), choisis à l'exécution. D'autres formats arriveront chaque trimestre.
2. **`src/probleme2-requete/`** : construire des requêtes HTTP complexes. Méthode, URL, en-têtes multiples, délai, nouvelles tentatives : presque tout est optionnel. Une requête sans URL doit être refusée à la construction. Une fois construite, la requête ne doit plus pouvoir changer.
3. **`src/probleme3-config/`** : fournir la configuration de l'application (nom, port), chargée une fois au démarrage, lisible partout, non modifiable.

Complétez les fichiers marqués `TODO` pour faire passer `npm test`.

## Mise en place

1. Créez un dépôt GitHub **privé** nommé `atelier-03-nom1-nom2` à partir de l'archive déposée sur l'espace du cours.
2. Invitez votre intervenant comme collaborateur. Son pseudo GitHub est au tableau.
3. Créez une branche `travail` et travaillez dessus.
4. Installez puis lancez les tests : `npm install && npm test`.

> ℹ️ **CI rouge au départ : c'est normal.** Les tests décrivent la cible. Votre travail consiste à les faire passer du rouge au vert.

## Rendu

Avant 16:45, ouvrez une **pull request** de la branche `travail` vers `main`. Elle contient :

- votre code, avec les tests au vert,
- `JUSTIFICATIONS.md` complété : 3 à 5 lignes par problème, avec le pattern retenu (ou aucun), l'alternative écartée et la raison.

Déposez ensuite le lien de la pull request dans le devoir « Atelier 3 » de l'espace du cours.

## Règles communes

- Travail **en binôme**.
- Ne modifiez pas les tests. Ils décrivent le comportement attendu.
- À chaque push, la CI compile le projet puis lance les tests.
- IA autorisée dans le cadre du syllabus : l'IA propose, **vous** arbitrez, comprenez et signalez son usage dans `JUSTIFICATIONS.md`.
