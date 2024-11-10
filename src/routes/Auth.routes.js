import {Router} from 'express'
import {register, login, update, deleteUser,search} from "../controllers/Auth.controllers.js"

const router = Router() //Importamos Router()

router.post('/login',login) // login con usuario y contraseña
router.post('/register',register) // registro
router.put('/update',update) // reemplaza la contraseña por una nueva
router.delete("/deleteUser",deleteUser) // muestra todos los usuarios
router.get("/search",search)

export default router;