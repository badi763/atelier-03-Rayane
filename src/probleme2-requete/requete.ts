// PROBLÈME 2 · Construction de requêtes HTTP complexes
// Beaucoup de paramètres optionnels. Une requête sans URL est invalide.
// L'objet final doit être immuable (pas de setters après construction).

export interface Requete {
  readonly methode: string;
  readonly url: string;
  readonly entetes: Readonly<Record<string, string>>;
  readonly timeoutMs: number;
  readonly retries: number;
}

class RequeteBuilder {
  private _url?: string;
  private _methode = "GET";
  private _entetes: Record<string, string> = {};
  private _timeoutMs = 30000;
  private _retries = 0;

  url(url: string): this {
    this._url = url;
    return this;
  }

  methode(methode: string): this {
    this._methode = methode;
    return this;
  }

  entete(nom: string, valeur: string): this {
    this._entetes[nom] = valeur;
    return this;
  }

  timeoutMs(timeout: number): this {
    this._timeoutMs = timeout;
    return this;
  }

  retries(nombre: number): this {
    this._retries = nombre;
    return this;
  }

  build(): Requete {
    if (!this._url) {
      throw new Error("URL obligatoire");
    }

    const resultat: Requete = {
      methode: this._methode,
      url: this._url,
      entetes: Object.freeze({ ...this._entetes }),
      timeoutMs: this._timeoutMs,
      retries: this._retries,
    };

    return Object.freeze(resultat);
  }
}

export function requete(): RequeteBuilder {
  return new RequeteBuilder();
}