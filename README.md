# TSPaste

- Port de [jspaste](https://www.npmjs.com/package/jspaste). Pública y obtén datos de [jspaste](https://jspaste.tnfangel.repl.co/) en Typescript.

- El paquete original está hecho por `tnfAngel#8642`

- El módulo es muy rápido, se tiene que usar con async/await

# Documentacion

**Funciones**

- Publica un código a jspaste, devuelve la **Key** y el **Secret**.

```typescript
import { publicar } from "...";

const respuesta = await publicar("Hello, world!");

console.log(respuesta);

/* 
{
  key: 'abcdefgh',
  secret: 'zyzasaasdtslasebjd8w9sa'
}
*/
```

- Obtiene un código de jspaste, usando su **Key**.

```typescript
import { obtener } from "...";

const respuesta = await obtener("abcdefgh");

console.log(respuesta);

/*
{ 
  key: "abcdefgh",
  data: "Hello, world!"
}
*/
```

- Elimina un código de jspaste, usando su **Key** y **Secret**.

```typescript
import { eliminar } from "...";

const respuesta = await eliminar("abcdefgh", "zyzasaasdtslasebjd8w9sa");

console.log(respuesta);

/*
true
*/
```
