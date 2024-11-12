import { Router} from "../deps.ts"
import { inicio } from "./get/inicio.ts"
import { registro_post } from "./registro_post.ts"
import { login } from "./get/login.ts"
const router = new Router()

router.get("/",inicio)
router.get("/login", login)
router.post("/registro", registro_post) 

export default router