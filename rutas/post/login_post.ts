import { Context } from "../../deps.ts"
const login_post = async (context: Context) => {
    const { request, response } = context
    try{
          const body = await request.body()
          const data = await body.value
          console.log(data)
    }
    catch{

    }  
}

export{
    login_post
} 