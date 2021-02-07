import { eliminar } from "../mod.ts";

const baseURL: string = "https://jspaste.tnfangel.repl.co";

export async function publicar(texto: string, tiempo?: number) {
  try {
    if (!texto) {
      throw console.error(
        "[DTSPaste Error] No has puesto el texto que quieres publicar.",
      );
    }

    let obtenido: any;

    await fetch(`${baseURL}/documents`, {
      method: "POST",
      body: JSON.stringify(texto),
    }).then((res) => {
      obtenido = res.json();
    }).catch((err) => {
      throw console.error(
        `[DTSPaste Error] [${err.status}] ==> ${err.statusText}`,
      );
    });

    if (!obtenido) {
      throw console.error(
        "[DTSPaste Error] No se obtuvo ninguna respuesta del servidor.\nMensaje para publicar: " +
          texto,
      );
    }

    if (tiempo) {
      if (isNaN(tiempo)) {
        console.error(
          "[DTSPaste Error] El numero es invalido, no se hará nada...",
        );
        return obtenido;
      }
      setTimeout(async function () {
        await eliminar(obtenido.key, obtenido.secret);
      }, tiempo);
    }

    return obtenido;
  } catch (error) {
    throw console.error(
      "[DTSPaste Error] Ocurrió un error desconocido obteniendo los datos.",
    );
  }
}
