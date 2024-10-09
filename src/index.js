import app from "./app.js";
import {connectDB} from "./db.js";
connectDB()
app.listen(5000);

console.log("Servidor activado en el puerto ", 5000)