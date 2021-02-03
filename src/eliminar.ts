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
      method: "POST",
      url: `${baseURL}/documents/${key}/delete`,
      data: key,
      headers: { "Secret": `${secret}` },
    },
  )
    .then(function () {
      obtenido = true;
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
