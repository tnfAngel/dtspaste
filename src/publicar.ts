import { eliminar } from "../mod.ts";

const baseURL: string = "https://jspaste.tnfangel.repl.co";

export async function publicar(texto: string, tiempo?: number) {
  try {
    if (!texto) {
      throw console.error(
        "[TSPaste Error] No has puesto el texto que quieres publicar.",
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
        `[TSPaste Error] [${err.status}] ==> ${err.statusText}`,
      );
    });

    if (!obtenido) {
      throw console.error(
        "[TSPaste Error] No se obtuvo ninguna respuesta del servidor.\nMensaje para publicar: " +
          texto,
      );
    }

    if (tiempo) {
      if (isNaN(tiempo)) {
        console.error(
          "[TSPaste Error] El numero es invalido, no se hará nada...",
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
      "[TSPaste Error] Ocurrió un error desconocido obteniendo los datos.",
    );
  }
}
