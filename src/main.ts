import { CajaxResponse, Prajax } from "../deps.ts";
export { eliminar, obtener, publicar };

var apiURL = "https://jspaste.tnfangel.repl.co";

async function publicar(texto: any, tiempo: any) {
  if (!texto) {
    throw new Error(
      "[TSPaste Error] No has puesto el texto que quieres publicar.",
    );
  }

  let obtenido: { clave: any; secret: any; url?: string } | null = null;
  await Prajax.post(`${apiURL}/documents`, texto)
    .then((res: CajaxResponse) => {
      obtenido = {
        url: `${apiURL}/${res.key}`,
        clave: `${res.key}`,
        secret: `${res.secret}`,
      };
    })
    .catch((res: CajaxResponse) => {
      throw `[TSPaste Error] (${res.status}) ${res.responseText}`;
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
      await eliminar(obtenido.clave, obtenido.secret);
    }, tiempo);
  }
  return obtenido;
}

async function obtener(clave: any) {
  if (!clave) {
    throw new Error(
      "[TSPaste Error] No has puesto la clave que quieres obtener.",
    );
  }

  let obtenido = null;
  await Prajax.get(`${apiURL}/documents/${clave}`)
    .then((res: CajaxResponse) => {
      obtenido = res;
    })
    .catch((res: CajaxResponse) => {
      throw `[TSPaste Error] (${res.status}) ${res.responseText}`;
    });
  if (!obtenido) {
    throw "[TSPaste Error] Ocurrio un error desconocido obteniendo los datos.";
  }
  return obtenido;
}

async function eliminar(clave: any, secret: any) {
  if (!clave) {
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
  await Prajax.post(`${apiURL}/documents/${clave}/delete`, clave, {
    header: { "Secret": `${secret}` },
  })
    .then(() => {
      obtenido = true;
    })
    .catch((res: CajaxResponse) => {
      obtenido = false;
      throw `[TSPaste Error] (${res.status}) ${res.responseText}`;
    });
  if (!obtenido) {
    throw "[TSPaste Error] Ocurrio un error desconocido obteniendo los datos.";
  }
  return obtenido;
}
