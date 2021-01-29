import najax from "https://cdn.skypack.dev/najax@1.0.4";
const baseURL = "https://jspaste.tnfangel.repl.co";

export class publish {
  async publicar(texto: string) {
    let obtenido = null;
    await najax(`${baseURL}/documents`, {
      type: "POST",
      data: texto,
      dataType: "JSON",
      contentType: "application/json; charset=utf-8",
      success: function (result: { key: string }) {
        return obtenido = `${baseURL}/${result.key}`;
      },
    }, {
      error: function (result: { key: string }) {
        return console.log("[TSPaste Error]: " + result);
      },
    });
    return this;
  }
}

export class obtain {
  async obtener(texto: string) {
    let obtenido = null;
    await najax(`${baseURL}/documents/${texto}`, {
      type: "GET",
      dataType: "JSON",
      success: function (result: any) {
        obtenido = result;
      },
    }, {
      error: function (result: string) {
        console.log("[TSPaste Error]: " + result);
      },
    });
    return this;
  }
}
