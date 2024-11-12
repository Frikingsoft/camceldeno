// cors.ts
import { Context } from "./deps.ts";

// Middleware para CORS
export const cors = async (context: Context, next: () => Promise<void>) => {
  // Establecer encabezados CORS
  context.response.headers.set("Access-Control-Allow-Origin", "*");
  context.response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  context.response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (context.request.method === "OPTIONS") {
    context.response.status = 204; // No Content para solicitudes OPTIONS
  } else {
    await next(); // Continuar con la siguiente capa de middleware
  }
};
