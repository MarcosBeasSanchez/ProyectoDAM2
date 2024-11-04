import express from  'express'  // importamos morgan
import morgan from 'morgan' //  informa de las solicitudes de entrada
import routes from './routes/Auth.routes.js'
import cors from "cors"

const app = express() // para que use morgan con el .use
app.use(cors({origin:"http://localhost:5173"}))
app.use(express.json());
app.use(morgan('dev'));
app.use(routes)

export default app;