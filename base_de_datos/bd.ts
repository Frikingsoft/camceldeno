import { MongoClient } from "https://deno.land/x/mongo@v0.31.1/mod.ts";

// Crear una nueva instancia del cliente
const client = new MongoClient();

// Conectarse al servidor de MongoDB
await client.connect("mongodb://utu_iae:utu_iae@127.0.0.1:27017/IAE?authSource=admin");

// Acceder a la base de datos `IAE`
const bd = client.database("IAE");

console.log("Conectado a la base de datos IAE");
const Usuarios = bd.collection("usuarios");
// Exportar la base de datos para usarla en otros archivos
export { bd,Usuarios };
