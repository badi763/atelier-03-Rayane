// PROBLÈME 1 · Export multi-formats
// Objectif : exporter des lignes [libelle, montant] en CSV ou JSON,
// le format étant choisi à l'exécution. D'autres formats arriveront.

export type Ligne = [string, number];

export interface Export {
  generer(lignes: Ligne[]): string;
}

class ExportCSV implements Export {
  generer(lignes: Ligne[]): string {
    return lignes
      .map(([libelle, montant]) => `${libelle};${montant}`)
      .join("\n");
  }
}

class ExportJSON implements Export {
  generer(lignes: Ligne[]): string {
    return JSON.stringify(
      lignes.map(([libelle, montant]) => ({
        libelle,
        montant,
      }))
    );
  }
}

export function creerExport(format: string): Export {
  if (format === "csv") {
    return new ExportCSV();
  }

  if (format === "json") {
    return new ExportJSON();
  }

  throw new Error("Format inconnu");
}