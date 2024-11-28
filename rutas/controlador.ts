import { Router} from "../deps.ts"
import { inicio } from "./get/inicio.ts"
import { registro_post } from "./post/registro_post.ts"
import { login } from "./get/login.ts"
import { login_post } from "../rutas/post/login_post.ts"
import { validar_registro } from "../middlewares/validar_registro.ts"

const router = new Router()


router.get("/",inicio)
router.get("/login", login)
//router.post("/login", login_post)
router.post("/registro", /*validar_registro,*/ registro_post) 
router.post("/login",login_post)
export default router