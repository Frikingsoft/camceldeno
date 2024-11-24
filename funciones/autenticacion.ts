import { create, getNumericDate } from "../deps.ts"
const Llave_secreta = new TextEncoder().encode("n&|Hi$IQ@836")


const generateToken = async(payload: Record<string, unknown>): Promise<string> =>{
    console.log("Llave secreta:", Llave_secreta)
    return await create(
      { alg: "HS256", typ: "JWT" },
      { ...payload, exp: getNumericDate(60 * 60) }, // Token expira en 1 hora
      Llave_secreta,
    )
}

export{
    generateToken
}