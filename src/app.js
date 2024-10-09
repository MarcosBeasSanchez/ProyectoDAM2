import express from  'express'  // importamos morgan
//import morgan from 'morgan' //  informa de las solicitudes de entrada
import routes from './routes/Auth.routes.js'


const app = express() // para que use morgan con el .use
//app.use(express.json());
//app.use(morgan());
//app.use(routes)

export default app;