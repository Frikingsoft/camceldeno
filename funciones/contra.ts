import { hash, compare} from "../deps.ts"
import { Usuarios } from "../base_de_datos/bd.ts"
import {generateToken} from "../funciones/autenticacion.ts"
const encriptar_contra = async (contra: string) => {
    contra = await hash(contra)
    return contra
    
}
const verificar_contra = async (contra: string, usuario: string) => {
    // Buscar el usuario en la colección
    const buscar_coleccion = await Usuarios.findOne({ nombre: usuario })

    if (!buscar_coleccion) return false

    // Comparar la contraseña proporcionada con la contraseña encriptada en la base de datos
    const comparar = await compare(contra, buscar_coleccion.contra)
    if(comparar){
       delete buscar_coleccion.contra 
       const payload = {
        id: buscar_coleccion._id.$oid, // Convertir ObjectId a string
        usuario: buscar_coleccion.usuario,
        correo: buscar_coleccion.correo,
      }
      try {
        const token = await generateToken(payload)
        console.log("Token JWT generado:", token)
      } catch (error) {
        console.error("Error al generar el token:", error)
      }
     
    }
    if(!comparar){
        console.log("usuario o contraseña incorrectos")
    }
    
    return comparar

}
  
export{
    encriptar_contra,
    verificar_contra
}