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

  await Prajax.post(`${baseURL}/documents`, texto)
    .then((res: any) => {
      obtenido = res.response;
    })
    .catch((res: CajaxResponse) => {
      throw new Error(`[TSPaste Error] (${res.status})  ${res.responseText}`);
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

export async function obtener(clave: string) {
  if (!clave) {
    throw new Error(
      "[TSPaste Error] No has puesto la clave que quieres obtener.",
    );
  }

  let obtenido: any;

  await Prajax.get(`${baseURL}/documents/${clave}`)
    .then((res: any) => {
      obtenido = res.response;
    })
    .catch((res: CajaxResponse) => {
      throw new Error(`[TSPaste Error] (${res.status}) ${res.responseText}`);
    });

  if (!obtenido) {
    throw new Error(
      "[TSPaste Error] Ocurrio un error desconocido obteniendo los datos.",
    );
  }

  return obtenido;
}

export async function eliminar(clave: string, secret: string) {
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

  await Prajax.post(`${baseURL}/documents/${clave}/delete`, clave, {
    header: { "Secret": `${secret}` },
  })
    .then((res: any) => {
      obtenido = true;
    })
    .catch((res: CajaxResponse) => {
      obtenido = false;
      throw new Error(`[TSPaste Error] (${res.status}) ${res.responseText}`);
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
