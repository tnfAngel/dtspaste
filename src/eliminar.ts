import axios from "https://cdn.skypack.dev/axios@0.21.1";

const baseURL = "https://jspaste.tnfangel.repl.co";

export async function eliminar(key: string, secret: string) {
  if (!key) {
    throw new Error(
      "[TSPaste Error] No has puesto la clave que quieres eliminar.",
    );
  }

  if (!secret) {
    throw new Error(
      "[TSPaste Error] Tienes que poner el secret de la clave para poder eliminarla.",
    );
  }

  let obtenido = false;

  axios(
    {
      method: "post",
      baseURL: `${baseURL}/documents/${key}/delete`,
      headers: { "Secret": `${secret}` },
      data: key,
      timeout: 5000,
      responseType: "json",
      responseEncoding: "utf8",
    },
  )
    .then(() => {
      obtenido = true;
    })
    .catch(function (err: { status: any; statusText: any }) {
      console.error(`[TSPaste Error] (${err.status})  ${err.statusText}`);
    });

  if (!obtenido) {
    throw new Error(
      "[TSPaste Error] Ocurrio un error desconocido obteniendo los datos.",
    );
  }

  return obtenido;
}
