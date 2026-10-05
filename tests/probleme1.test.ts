import { creerExport } from "../src/probleme1-export/export";

describe("Probleme 1 - export multi-formats", () => {
  const lignes: [string, number][] = [["Clavier", 59.9], ["Ecran", 199]];

  test("export CSV", () => {
    expect(creerExport("csv").generer(lignes)).toBe("Clavier;59.9\nEcran;199");
  });
  test("export JSON", () => {
    expect(JSON.parse(creerExport("json").generer(lignes))).toEqual([
      { libelle: "Clavier", montant: 59.9 },
      { libelle: "Ecran", montant: 199 },
    ]);
  });
  test("format inconnu refuse", () => {
    expect(() => creerExport("csv")).not.toThrow();
    // "xml" simule une valeur venue de l'exterieur (requete HTTP, fichier).
    // Le cast laisse compiler les deux conceptions : parametre string ou type union.
    expect(() => creerExport("xml" as any)).toThrow();
  });
});
