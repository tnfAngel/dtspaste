# TSPaste
- Port del paquete de [jspaste](https://www.npmjs.com/package/jspaste). Publica y obten datos de [jspaste](https://jspaste.tnfangel.repl.co/) en Typescript.

- El modulo es muy rapido, se tiene que usar con async/await

- El paquete original esta hecho por `tnfAngel#8642`
# Documentacion
**Funciones**
- Publicar:

Publica un codigo a jspaste, devuelve el enlace entero.
```typescript
import { publicar } from "...";

const respuesta = await publicar("Hello, world!");

console.log(respuesta);

/* 
{
  url: 'https://jspaste.tnfangel.repl.co/abcdefgh',
  clave: 'abcdefgh',
  secret: 'zyzasaasdtslasebjd8w9sa'
}
*/
```

- Obtener:

Obtiene un codigo de jspaste, usando su clave unica.
```typescript
import { publicar } from "...";

const respuesta = await obtener("abcdefgh");

console.log(respuesta);

/*
{ 
  key: "abcdefgh",
  data: "Hello, world!"
}
*/
```

- Eliminar:

Elimina un codigo de jspaste, usando su clave unica y secret.
```typescript
import { publicar } from "...";

const respuesta = await eliminar('abcdefgh', 'zyzasaasdtslasebjd8w9sa');

console.log(respuesta);

/*
true
*/
```
# Ejemplo completo

- Ejemplo completo usando jspaste

```typescript
.
```

# Instalacion:

_Si tienes problemas con la instalacion puedes unirte al **[servidor de soporte de Discord](https://discord.gg/8RNAdpK)**._

1. `...`
