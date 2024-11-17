import { hash, compare} from "../deps.ts"
import { Usuarios } from "../base_de_datos/bd.ts"
const encriptar_contra = async (contra: string) => {
    contra = await hash(contra)
    return contra
    
}
const verificar_contra = async (contra: string, usuario: string) => {
    // Buscar el usuario en la colección
    const buscar_coleccion = await Usuarios.findOne({ nombre: usuario });

    if (!buscar_coleccion) {
        return false;
    }

    // Comparar la contraseña proporcionada con la contraseña encriptada en la base de datos
    const comparar = await compare(contra, buscar_coleccion.contra);
    if(comparar){
        console.log("usuario logueado")
    }
    if(!comparar){
        console.log("usuario o contraseña incorrectos")
    }
    
    return comparar;
};
  
export{
    encriptar_contra,
    verificar_contra
}