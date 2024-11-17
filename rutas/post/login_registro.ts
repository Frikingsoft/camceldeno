import { Context } from "../../deps.ts"
import { verificar_contra } from "../../funciones/contra.ts"

const login_post = async (context: Context) => {
    const { request, response } = context
    try {
        const body = await request.body()
        const data = await body.value // Obtenemos los datos del body
        if (!data) {
            response.status = 400
            response.body = { message: "No se enviaron datos." }
            return
        }
        response.status = 200
        let {nombre,contra } = data
        await verificar_contra(contra,nombre)
        
    } 
    catch{
        console.log("Error")
    }   
}

export { 
    login_post
}