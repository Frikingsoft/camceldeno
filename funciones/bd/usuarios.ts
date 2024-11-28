import { bd , Usuarios} from "../../base_de_datos/bd.ts"
import { Usuario } from "../../interfaces/usuario.ts"


const crear_usuarios = async (usuario:string,email:string,password:string) => {
    const guardar_usuario: Usuario = {
        usuario,
        email,
        password,
    }
    let buscar_usuario = await Usuarios.findOne({email})
    
    if(buscar_usuario){
        console.log("el usuario ya existe")
    }
    if(!buscar_usuario){
        await Usuarios.insertOne(guardar_usuario)
        return true
    }
    
    
}

export{
    crear_usuarios
}