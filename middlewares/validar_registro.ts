const validar_string = (texto)=>{
    const regex = /[:<>]|script/i
    return !regex.test(texto)
}
const validar_correo = (texto) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(texto)
};
const validar_nombre =(texto)=>{
    return texto.length >= 8
}
const validar_contra = (texto) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;
    return regex.test(texto)
};
const datos_invalidos =(response)=>{
    response.status = 400
    response.body = { message: "No se enviaron datos." }
}
// middleware
const validar_registro = async (ctx: any, next: any) => {
    const { request, response } = ctx
    try {
        const body = await request.body()
        const data = await body.value // Obtenemos los datos del body
        const { nombre, correo, contra } = data
        if (validar_string(nombre) && validar_string(correo) && validar_string(contra)){
            if(validar_nombre(nombre) && validar_correo(correo) && validar_contra(contra)){
                await next()
            }
            else{
               datos_invalidos(response)
               return 
            }
        }
        else{
            console.log("datos invalidos")
        }
        if (!data) {
            
            //datos_invalidos(response)
            //return
        }
    }
    catch (error) {
        response.status = 500
        response.body = { message: "Error en el servidor.", error }
    }
}

export{
    validar_registro
}  