import { Context } from "../../deps.ts";



const registro_post = async (context: Context) => {
  try {
    const body = await context.request.body();
    const data = await body.value; // Obtenemos los datos del body
    
    if (!data) {
      context.response.status = 400;
      context.response.body = { message: "No se enviaron datos." };
      return;
    }
    
    const { nombre, correo, contra } = data; // Desestructuramos los datos
    encriptar_contra(contra)
    context.response.status = 200;
    context.response.body = { message: "Datos recibidos correctamente.", data };
    
  } catch (error) {
    context.response.status = 500;
    context.response.body = { message: "Error en el servidor.", error };
  }
};
const encriptar_contra = async (contra: string) => {
 console.log(contra)
};

export { registro_post };
