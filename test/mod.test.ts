import { eliminar, obtener, paquete, publicar } from "../mod.ts";

let secret: any;
let key: any;

Deno.test({
  name: "[TSPaste] Publicando...",
  async fn() {
    let res = await publicar("alo como andan?");
    console.info(res);
    key = res.key;
    secret = res.secret;
  },
});

Deno.test({
  name: "[TSPaste] Obteniendo...",
  async fn() {
    let res = await obtener(key);
    console.info(res);
  },
});

Deno.test({
  name: "[TSPaste] Eliminando...",
  async fn() {
    let res = await eliminar(key, secret);
    console.info(res);
  },
});

Deno.test({
  name: "[TSPaste] Info Paquete...",
  async fn() {
    let res = paquete;
    console.info(res);
  },
});
