import axiod from "https://deno.land/x/axiod@0.20.0-0/mod.ts";
const baseURL = "https://jspaste.tnfangel.repl.co";

export class tspaste {
  async publicar(texto: string) {
    let respuesta = null;
    await axiod.post(`${baseURL}/documents`, texto)
      .then((result) => {
        return respuesta = `${baseURL}/${result}`;
      })
      .catch((error) => {
        return console.error("[TSPaste Error]: " + error);
      });
    return respuesta;
  }

  async obtener(clave: string) {
    let respuesta = null;
    await axiod.get(`${baseURL}/documents/${clave}`)
      .then((result) => {
        return respuesta = result;
      })
      .catch((error) => {
        return console.error("[TSPaste Error]: " + error);
      });
    return respuesta;
  }
}
