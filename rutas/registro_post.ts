import { Context } from "../deps.ts";

const registro_post = async (context: Context) => {
  try {
    const body = await context.request.body();
    const data = await body.value; // Obtenemos los datos del body
    
    if (!data) {
      context.response.status = 400;
      context.response.body = { message: "No se enviaron datos." };
      return;
    }

    context.response.status = 200;
    context.response.body = { message: "Datos recibidos correctamente.", data };
  } catch (error) {
    context.response.status = 500;
    context.response.body = { message: "Error en el servidor.", error };
  }
};

export { registro_post };
