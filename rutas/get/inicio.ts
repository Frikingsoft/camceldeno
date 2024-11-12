import { Context } from "../../deps.ts";
const inicio = async(context:Context)=>{
    context.response.status = 200;
    context.response.body = "pagina de inicio";
     
}

export {
    inicio
}