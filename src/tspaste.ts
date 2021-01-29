import Prajax from "https://deno.land/x/cajax@2.0.0/Prajax.js";
const baseURL = "https://jspaste.tnfangel.repl.co";

export class publish {
  async publicar(texto: string) {
    let obtenido = null;
    await Prajax.post(`${baseURL}/documents`, { texto })
      .then((res) => {
        return obtenido = `${baseURL}/${res.key}`;
      }).catch((result) => {
        return console.error("[TSPaste Error]: "+result);
      });
    return this;
  }
}

export class obtain {
  async obtener(texto: string) {
    let obtenido = null;
    await Prajax.get(`${baseURL}/documents/${texto}`)
      .then((res) => {
        return obtenido = res;
      }).catch((res) => {
        return console.error("[TSPaste Error]: "+res);
      });
    return this;
  }
}
