import { Context } from "../../deps.ts";
const login = async(context:Context)=>{
    context.response.status = 200;
    context.response.body = "pagina de login";
     
}

export {
    login
}