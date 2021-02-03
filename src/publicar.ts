import axios from "https://cdn.skypack.dev/axios@0.21.1";
import { eliminar } from "../mod.ts";

const baseURL = "https://jspaste.tnfangel.repl.co";

export async function publicar(texto: string, tiempo?: number) {
  if (!texto) {
    throw new Error(
      "[TSPaste Error] No has puesto el texto que quieres publicar.",
    );
  }

  let obtenido: any;

  axios(
    {
      method: "post",
      url: `${baseURL}/documents`,
      data: texto,
      responseType: "json",
      responseEncoding: "utf8",
    },
  )
    .then(function (res: any) {
      obtenido = res.data;
      obtenido = JSON.parse(obtenido);
    })
    .catch(function (err: any) {
      console.error(`[TSPaste Error] (${err.status})  ${err.statusText}`);
      return;
    });

  if (!obtenido) {
    throw new Error(
      "[TSPaste Error] Ocurrio un error desconocido obteniendo los datos.",
    );
  }

  if (tiempo) {
    if (isNaN(tiempo)) {
      throw new Error(
        "[TSPaste Error] El tiempo puesto en publicar no es un numero.",
      );
    }
    setTimeout(async function () {
      await eliminar(obtenido.key, obtenido.secret);
    }, tiempo);
  }

  return obtenido;
}
