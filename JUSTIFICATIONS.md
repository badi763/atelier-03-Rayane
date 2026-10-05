# Justifications · Kata créationnel

## Problème 1 · Export multi-formats

Pattern retenu : Factory Method

J'ai choisi Factory Method car on doit créer un export différent selon le format demandé, CSV ou JSON. Ça permet aussi d'ajouter d'autres formats plus tard sans changer tout le fonctionnement.

Alternatives écartées et pourquoi :
Builder n'était pas utile ici car on ne construit pas un objet étape par étape. Abstract Factory aurait été trop complexe pour seulement choisir un type d'export.

## Problème 2 · Requêtes HTTP

Pattern retenu : Builder

J'ai choisi Builder car la requête contient plusieurs paramètres optionnels comme la méthode, les en-têtes, le timeout et les retries. On peut donc construire la requête petit à petit puis utiliser build() pour obtenir la requête finale.

Alternatives écartées et pourquoi :
Factory n'était pas adaptée car on ne cherche pas à choisir entre plusieurs types d'objets, mais à construire une requête avec différentes options.

## Problème 3 · Configuration

Pattern retenu : aucun

Je n'ai pas utilisé de pattern car la configuration est simple. Elle est créée une fois avec le nom de l'application et le port, puis elle est rendue non modifiable. Ajouter un Singleton aurait compliqué le code pour rien.

Alternatives écartées et pourquoi :
J'ai pensé au Singleton car il permet d'avoir une seule instance, mais ici ce n'était pas nécessaire. Une configuration simple et immuable suffit, donc j'ai préféré respecter YAGNI.

## Usage de l'IA

J'ai utilisé ChatGPT pour m'aider à comprendre les différences entre Factory Method, Builder et Singleton et pour vérifier mes choix. J'ai gardé Factory Method pour les exports et Builder pour les requêtes. Pour la configuration, j'ai choisi de ne pas utiliser Singleton car une solution plus simple suffisait.