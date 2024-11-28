import { Context } from "../../deps.ts"
import { Usuario } from "../../interfaces/usuario.ts"
import { encriptar_contra, verificar_contra} from "../../funciones/contra.ts"
import { crear_usuarios } from "../../funciones/bd/usuarios.ts"


const registro_post = async (context: Context) => {
  const { request, response } = context
  
  try{
        const body = await request.body()
        const data = await body.value
        let { usuario, email, password  }:Usuario = data.datos._rawValue
        
        const contra_encriptada = await encriptar_contra(password)
        const verificar = await crear_usuarios(usuario,email,contra_encriptada)
        if(verificar){
        response.status = 200
        response.body = {message: "Usuario creado con exito"}
      
       }
      else{
        response.status = 400
        response.body = "No se pudo guardar el usuario"
      
        }
  }
  catch (error) {
        response.status = 500
        response.body = { message: "Error en el servidor.", error }
  }
 /* const { request, response } = context
  try {
    const body = await request.body()
    const data = await body.value // Obtenemos los datos del body
    
    if (!data) {
      response.status = 400
      response.body = { message: "No se enviaron datos." }
      return
    }
    
    let { nombre, correo, contra }:Usuario = data; // Desestructuramos los datos
    const contra_encriptada = await encriptar_contra(contra)
    crear_usuarios(nombre,correo,contra_encriptada)
    response.status = 200
    response.body = { message: "Datos recibidos correctamente.", data }
    
  } catch (error) {
    response.status = 500
    response.body = { message: "Error en el servidor.", error }
  }*/
}


export { registro_post }
