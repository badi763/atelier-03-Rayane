import { chargerConfig } from "../src/probleme3-config/config";

describe("Probleme 3 - configuration", () => {
  test("la configuration est lisible", () => {
    const c = chargerConfig();
    expect(c.appName).toBe("VenteFlash");
    expect(c.port).toBe(8080);
  });
  test("la configuration n'est pas modifiable", () => {
    const c: any = chargerConfig();
    expect(() => { "use strict"; c.port = 9999; }).toThrow();
  });
});
