import {Router} from 'express'
import {register, login} from "../controllers/Auth.controllers.js"

const router = Router() //Importamos Router()

router.post('/login',login) // login 
router.post('/register',register) // registro

export default router;