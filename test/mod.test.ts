import { eliminar, obtener, paquete, publicar } from "../mod.ts";

Deno.test({
  name: "[TSPaste] Publicando...",
  async fn() {
    let res = await publicar("Hola esto es una prueba");
    // console.log(res);
  },
});

Deno.test({
  name: "[TSPaste] Obteniendo...",
  async fn() {
    let res = await obtener("off3");
    // console.log(res);
  },
});

/* Deno.test({
  name: "[TSPaste] Eliminando...",
  async fn() {
    let res = await eliminar("a");
    console.log(res);
  },
}); */

Deno.test({
  name: "[TSPaste] Info Paquete...",
  async fn() {
    let res = paquete;
    console.log(res);
  },
});
