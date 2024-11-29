import express from  'express'  // importamos morgan
import morgan from 'morgan' //  informa de las solicitudes de entrada
import routes from './routes/Auth.routes.js'
import cors from "cors"

const app = express() // para que use morgan con el .use
//Middlewares
app.use(cors()) //para cors con el front Origin para llamadas
app.use(express.json()); //para que utilice el servicio bbdd express
app.use(morgan('dev')); //morgan para ver los cambios  actualizados
//Rutas
app.use(routes) // rutas de los metodos contra la bbdd /register /login etc

export default app;