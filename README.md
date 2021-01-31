![logo](https://cdn.discordapp.com/attachments/700345457343201314/804447945814441994/japastelogo.png)

# jspaste
 - Paquete jspaste oficial. Publica y obten datos de [jspaste](https://jspaste.tnfangel.repl.co/).

- El modulo es muy rapido, se tiene que usar con async/await

- El modulo ha sido desarrollado por `tnfAngel#8642`
# Documentacion
**Definir**
- Para declararlo en tu codigo puedes poner lo siguiente:
```js

const jsp = require('jspaste')

```

**Funciones**
- publicar

Publica un codigo a jspaste, devuelve el enlace entero.
```js

await jsp.publicar('Hola, esto es una prueba')

/* 
Esto daria un objeto como este: {
  url: 'https://jspaste.tnfangel.repl.co/teMtAKuetGO',
  clave: 'teMtAKuetGO',
  secret: 'wp3du8494325422c4z2c22x4f3f3z32f3trxd'
} 
*/


/* Tambien puedes definir un enlace de esta manera: */

let link = await jsp.publicar('Hola, esto es una prueba')

console.log(link.url)

/* Tambien puedes publicar temporalmente: */

let link = await jsp.publicar('Hola, esto es una prueba', 10000) // Tiempo en milisegundos

console.log(link.url)

```

- obtener

Obtiene un codigo de jspaste, usando su clave unica.
```js

await jsp.obtener('iRhkODYUYG')

/*
Esto daria un objeto, con la clave y el contenido, en este caso:
{ key: "iRhkODYUYG", data: "Hola, esto es una prueba"}
*/


/* Tambien puedes definirlo de esta manera: */

let obtenido = await jsp.obtener('iRhkODYUYG')

console.log(obtenido.data) // Hola, esto es una prueba

```

- eliminar

Elimina un codigo de jspaste, usando su clave unica y secret.
```js

await jsp.eliminar('clave', 'secret')


/*
Si todo sale bien, retornara true.
*/


/* Tambien puedes definirlo de esta manera: */

let eliminado = await jsp.eliminar('iRhkODYUYG', '324353543xc3ex3rc3rcrrwqzxxrwr')

console.log(eliminado) // true

```
# Ejemplo completo

- Ejemplo completo usando jspaste

```js

const jsp = require('jspaste')

let enlace = await jsp.publicar('Bienvenido a jspaste.')

console.log(enlace.url)

let obtenido = await jsp.obtener(enlace.clave)

console.log(obtenido.data)

```

# Instalacion

_Si tienes problemas con la instalacion puedes unirte al [servidor de soporte de Discord](https://discord.gg/8RNAdpK)._

**Linux y Windows**

`npm i jspaste`

**Mac**

Instala: `XCode`

Pon: `npm i -g node-gyp` en terminal

Pon: `npm i jspaste`