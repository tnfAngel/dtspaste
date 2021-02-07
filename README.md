# DTSPaste

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=AlexxTek_tspaste&metric=alert_status)](https://sonarcloud.io/dashboard?id=AlexxTek_tspaste)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=AlexxTek_tspaste&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=AlexxTek_tspaste)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=AlexxTek_tspaste&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=AlexxTek_tspaste)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=AlexxTek_tspaste&metric=security_rating)](https://sonarcloud.io/dashboard?id=AlexxTek_tspaste)

>> Port de [jspaste](https://www.npmjs.com/package/jspaste). Pública y obtén datos de [jspaste](https://jspaste.tnfangel.repl.co/) en Deno 🦕
>> 
>> Paquete original hecho por `tnfAngel#8642` e porteado por `AlexTek#0840`

# Documentación

**Funciones**

- Publica un código a jspaste, devuelve la **Key** y el **Secret**:

```typescript
import { publicar } from "https://deno.land/x/dtspaste/mod.ts";

const res = await publicar("Hello, world!");

console.log(res);

/* 
{
  key: 'abcdefgh',
  secret: 'zyzasaasdtslasebjd8w9sa'
}
*/
```

- Obtiene un código de jspaste, usando su **Key**:

```typescript
import { obtener } from "https://deno.land/x/dtspaste/mod.ts";

const res = await obtener("abcdefgh");

console.log(res);

/*
{ 
  key: "abcdefgh",
  data: "Hello, world!"
}
*/
```

- Elimina un código de jspaste, usando su **Key** y **Secret**:

```typescript
import { eliminar } from "https://deno.land/x/dtspaste/mod.ts";

const res = await eliminar("abcdefgh", "zyzasaasdtslasebjd8w9sa");

console.log(res);

/*
true 
*/
```

- Informacion paquete:

```typescript
import { paquete } from "https://deno.land/x/dtspaste/mod.ts";

const res = await eliminar("abcdefgh", "zyzasaasdtslasebjd8w9sa");

console.log(res);

/*
{
  version: "x.x.x",
  creador: "tnfAngel#8642",
  porter: "AlexTek#0840",
  creditos: [ "x", ... ],
  web: "https://jspaste.tnfangel.repl.co"
}
*/
```
