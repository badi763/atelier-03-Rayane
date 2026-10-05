import * as mod from "../src/probleme2-requete/requete";

// Contrat impose par les tests : une fonction exportee `requete()` qui demarre
// la construction, et les methodes url, methode, entete, timeoutMs, retries, build.
// Ne renommez rien. L'implementation, elle, est libre.

const requete: any = (mod as any).requete;

describe("Probleme 2 - construction de requetes", () => {
  test("le module exporte une fonction requete()", () => {
    expect(typeof requete).toBe("function");
  });

  test("construction complete et lisible", () => {
    const r = requete()
      .url("https://api.example.com/produits")
      .methode("POST")
      .entete("Authorization", "Bearer x")
      .entete("Accept", "application/json")
      .timeoutMs(5000)
      .retries(2)
      .build();
    expect(r.methode).toBe("POST");
    expect(r.entetes["Accept"]).toBe("application/json");
    expect(r.retries).toBe(2);
  });

  test("valeurs par defaut", () => {
    const r = requete().url("https://a.b").build();
    expect(r.methode).toBe("GET");
    expect(r.timeoutMs).toBe(30000);
    expect(r.retries).toBe(0);
    expect(r.entetes).toEqual({});
  });

  test("une requete sans URL est refusee a la construction", () => {
    expect(() => requete().url("https://a.b").build()).not.toThrow();
    expect(() => requete().methode("GET").build()).toThrow();
  });

  test("la requete construite n'est pas modifiable", () => {
    const r = requete().url("https://a.b").entete("Accept", "text/plain").build();
    expect(() => { "use strict"; r.retries = 5; }).toThrow();
    expect(() => { "use strict"; r.entetes["Accept"] = "text/html"; }).toThrow();
  });
});
