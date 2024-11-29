import {Router} from 'express'
import {register, login, update, deleteUser, search, listarUsuarios} from "../controllers/Auth.controllers.js"

const router = Router() //Importamos Router()

router.post('/login',login) // login con usuario y contraseña
router.post('/register',register) // registro
router.put('/update',update) // reemplaza la contraseña por una nueva
router.delete("/deleteUser",deleteUser) // muestra todos los usuarios
router.get("/search",search) // busca un usuario en especifico y lo muestra
router.get("/list",listarUsuarios) // muestra todos los usuarios

export default router;