// app.ts
import { Application } from "./deps.ts";
import { cors } from "./cors.ts"; // Importa el middleware de CORS
import  router  from "./rutas/controlador.ts"
const app = new Application();

app.use(cors);

// Usar rutas y métodos permitidos
app.use(router.routes());
app.use(router.allowedMethods());

// Iniciar el servidor con puerto tipado
const port: number = 80;
console.log(`Server running on http://localhost:${port}`);
await app.listen({ port });


export {
  router
}