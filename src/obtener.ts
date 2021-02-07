const baseURL: string = "https://jspaste.tnfangel.repl.co";

export async function obtener(key: string) {
  try {
    if (!key) {
      throw console.error(
        "[DTSPaste Error] No has puesto la key que quieres obtener.",
      );
    }

    let obtenido: any;

    await fetch(`${baseURL}/documents/${key}`, {
      method: "GET",
    }).then((res) => {
      obtenido = res.json();
    }).catch((err) => {
      throw console.error(
        `[DTSPaste Error] [${err.status}] ==> ${err.statusText}`,
      );
    });

    if (!obtenido) {
      throw console.error(
        "[DTSPaste Error] No se obtuvo ninguna respuesta del servidor.\nKey: " +
          key,
      );
    }

    return obtenido;
  } catch (error) {
    throw console.error(
      "[DTSPaste Error] Ocurrió un error desconocido obteniendo los datos.",
    );
  }
}
