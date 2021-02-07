const baseURL: string = "https://jspaste.tnfangel.repl.co";

export async function eliminar(key: string, secret: string) {
  try {
    if (!key) {
      throw console.error(
        "[DTSPaste Error] No has puesto la key que quieres eliminar.",
      );
    }

    if (!secret) {
      throw console.error(
        "[DTSPaste Error] No has puesto el secret para poder eliminar la key.",
      );
    }

    let obtenido: boolean = false;

    await fetch(`${baseURL}/documents/${key}/delete`, {
      method: "POST",
      headers: {
        "Secret": `${secret}`,
      },
      body: JSON.stringify(key),
    }).then(() => {
      obtenido = true;
    }).catch((err) => {
      obtenido = false;
      console.error(`[DTSPaste Error] [${err.status}] ==> ${err.statusText}`);
    });

    if (!obtenido) {
      throw console.error(
        "[DTSPaste Error] No se obtuvo ninguna respuesta del servidor.\nKey: " +
          key + "\nSecret: " + secret,
      );
    }

    return obtenido;
  } catch (error) {
    throw console.error(
      "[DTSPaste Error] Ocurrió un error desconocido obteniendo los datos.",
    );
  }
}
