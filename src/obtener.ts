const baseURL: string = "https://jspaste.tnfangel.repl.co";

export async function obtener(key: string) {
  try {
    if (!key) {
      throw console.error(
        "[TSPaste Error] No has puesto la key que quieres obtener.",
      );
    }

    let obtenido: any;

    await fetch(`${baseURL}/documents/${key}`, {
      method: "GET",
    }).then((res) => {
      obtenido = res.json();
    }).catch((err) => {
      throw console.error(
        `[TSPaste Error] [${err.status}] ==> ${err.statusText}`,
      );
    });

    if (!obtenido) {
      throw console.error(
        "[TSPaste Error] No se obtuvo ninguna respuesta del servidor.\nKey: " +
          key,
      );
    }

    return obtenido;
  } catch (error) {
    throw console.error(
      "[TSPaste Error] Ocurrió un error desconocido obteniendo los datos.",
    );
  }
}
