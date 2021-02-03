import axios from "https://cdn.skypack.dev/axios@0.21.1";

const baseURL = "https://jspaste.tnfangel.repl.co";

export async function obtener(key: string) {
  if (!key) {
    throw new Error(
      "[TSPaste Error] No has puesto la clave que quieres obtener.",
    );
  }

  let obtenido: any;

  axios(
    {
      method: "GET",
      url: `${baseURL}/documents/${key}`,
      data: key,
    },
  )
    .then(function (res: any) {
      console.log(res);
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

  return obtenido;
}
