import { bd , Usuarios} from "../../base_de_datos/bd.ts"
import { Usuario } from "../../interfaces/usuario.ts"


const crear_usuarios = async (nombre:string,correo:string,contra:string) => {
    const guardar_usuario: Usuario = {
        nombre,
        correo,
        contra,
    }
    let buscar_usuario = await Usuarios.findOne({correo})
    
    if(buscar_usuario){
        console.log("el usuario ya existe")
    }
    if(!buscar_usuario){
        await Usuarios.insertOne(guardar_usuario)
        console.log("Usuario creado con ID:", guardar_usuario)
    }
    
    
}

export{
    crear_usuarios
}