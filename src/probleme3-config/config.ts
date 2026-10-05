// PROBLÈME 3 · Configuration de l'application
// Chargée une fois au démarrage, lisible partout, non modifiable.
// Réfléchissez avant de sortir un pattern : de quoi a-t-on VRAIMENT besoin ?

export interface Config {
  readonly appName: string;
  readonly port: number;
}

// PROBLÈME 3 · Configuration de l'application
// Chargée une fois au démarrage, lisible partout, non modifiable.

export interface Config {
  readonly appName: string;
  readonly port: number;
}

const config: Config = Object.freeze({
  appName: "VenteFlash",
  port: 8080,
});

export function chargerConfig(): Config {
  return config;
}
