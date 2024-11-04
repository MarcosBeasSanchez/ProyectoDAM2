import {Router} from 'express'
import {register, login, update} from "../controllers/Auth.controllers.js"

const router = Router() //Importamos Router()

router.post('/login',login) // login 
router.post('/register',register) // registro
router.post('/update',update) // reemplaza la contraseña por una nueva

export default router;