# api-template Express + Extended Server Features

Este proyecto es un boilerplate para crear servicios con [superexpress](./src/utils/superexpress.js).

superexpress extiende `Express` usando el Patrón `Builder` para permitir una configuración modular y fluida de los servidores. Puedes agregar de forma sencilla los servidores REST, Health Check y GraphQL a tu aplicación Express usando una interfaz encadenada.

```js
import express from "./src/utils/superexpress.js"; // Importa la versión extendida de express

// Crea una instancia de la aplicación Express (como siempre)
const app = express();

// Construye el servidor usando el Patrón Builder
app
  .createRestServer()         // Crea el servidor REST API
  .createHealthCheckServer()  // Crea el servidor de Health Check API
  .createGraphQLServer()      // Crea el servidor GraphQL
  .createGraphiQLServer()     // Crea la interfaz GraphiQL
  .listen(3000, () => {
    console.log(c"Server running on http://localhost:3000");
  });

```

## Métodos añadidos a Express (Builder)

Cada uno de estos métodos añade un paso en la construcción del servidor Express, siguiendo el patrón Builder para una configuración modular:

| Método                                                      | Descripción                                                                         |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`createRestServer()`](./src/rest/restService.js)           | Crea un servidor RESTful API accesible desde `/api`. Configura las rutas de la API. |
| [`createHealthCheckServer()`](./src/rest/restService.js)    | Crea un servidor de chequeo de salud accesible desde `/health`.                     |
| [`createGraphQLServer()`](./src/graphql/graphqlService.js)  | Crea un servidor GraphQL accesible desde `/graphql`.                                |
| [`createGraphiQLServer()`](./src/graphql/graphqlService.js) | Crea una interfaz web interactiva de GraphQL accesible desde `/ruru`.               |

## Tecnologías

## Puesta en marcha

1. Instala todas las dependencias

```bash
npm install
```

> ### Dependencias
>
> | npm package             | Descripción                                                                              |
> | ----------------------- | ---------------------------------------------------------------------------------------- |
> | `chalk`                 | Librería para dar color a la consola.                                                    |
> | `dotenv`                | Librería para cargar variables de entorno desde un archivo .env.                         |
> | `express`               | Framework para crear aplicaciones web en Node.js.                                        |
> | `graphql`               | Librería para crear y ejecutar consultas GraphQL.                                        |
> | `graphql-http`          | Middleware para GraphQL que permite manejar peticiones HTTP.                             |
> | `@graphql-tools/schema` | Herramienta para crear y manipular esquemas GraphQL.                                     |
> | `helmet`                | Middleware para proteger aplicaciones Express de vulnerabilidades comunes.               |
> | `morgan`                | Middleware para registrar peticiones HTTP en la consola.                                 |
> | `nodemon`               | Herramienta para reiniciar automáticamente el servidor al detectar cambios en el código. |
> | `ruru`                  | Generador del cliente graphiQL para crear y ejecutar consultas GraphQL.                  |

2. Copia .env.sample a .env y edita las variables de entorno según sea necesario.

```bash
cp .env.sample .env
```

3. Ejecuta el servidor

```bash
npm run dev
```
