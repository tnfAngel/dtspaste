import Prajax from "https://deno.land/x/cajax@2.0.0/Prajax.js";
import CajaxResponse from "https://deno.land/x/cajax@2.0.0/CajaxResponse.ts";

const baseURL = "https://jspaste.tnfangel.repl.co";

export async function publicar(texto: string, tiempo?: number) {
  if (!texto) {
    throw new Error(
      "[TSPaste Error] No has puesto el texto que quieres publicar.",
    );
  }

  let obtenido: any;

  await Prajax.post(`${baseURL}/documents`, texto, {
    contentType: "application/json; charset=utf-8",
  })
    .then((res: any) => {
      obtenido = res.response;
      obtenido = JSON.parse(obtenido);
    })
    .catch((err: CajaxResponse) => {
      throw new Error(`[TSPaste Error] (${err.status})  ${err.responseText}`);
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

export async function obtener(key: string) {
  if (!key) {
    throw new Error(
      "[TSPaste Error] No has puesto la clave que quieres obtener.",
    );
  }

  let obtenido: any;

  await Prajax.get(`${baseURL}/documents/${key}`)
    .then((res: any) => {
      obtenido = res.response;
      obtenido = JSON.parse(obtenido);
    })
    .catch((err: CajaxResponse) => {
      throw new Error(`[TSPaste Error] (${err.status}) ${err.responseText}`);
    });

  if (!obtenido) {
    throw new Error(
      "[TSPaste Error] Ocurrio un error desconocido obteniendo los datos.",
    );
  }

  return obtenido;
}

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

  await Prajax.post(`${baseURL}/documents/${key}/delete`, key, {
    header: { "Secret": `${secret}` },
  })
    .then(() => {
      obtenido = true;
    })
    .catch((err: CajaxResponse) => {
      obtenido = false;
      throw new Error(`[TSPaste Error] (${err.status}) ${err.responseText}`);
    });

  if (!obtenido) {
    throw new Error(
      "[TSPaste Error] Ocurrio un error desconocido obteniendo los datos.",
    );
  }

  return obtenido;
}

export const paquete = {
  version: "6.0.0",
  creador: "tnfAngel#8642",
  porter: "AlexTek#0840",
  creditos: Array("ILuck ✯Team VR✯丂匚#2060", "Lil MARCROCK22#2222"),
  web: "https://jspaste.tnfangel.repl.co",
};
