//Enviamos un res a nuestro front mediante una funcion flecha

import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {

    const { username, email, password } = req.body
    // Hash de la contraseña (esperamos a que la promesa se resuelva)
    const passwordHash = await bcrypt.hash(password, 10)

    //console.log((passwordHash).toString())

    try {
        const newUser = new User({
            username,
            email,
            password: passwordHash // Asignamos el hash de la contraseña, no la promesa
        });

        // Guardar el usuario en la base de datos
        const userSaved = await newUser.save();

        // Responder con el usuario guardado
        res.status(201).json(userSaved);

        console.log("Usuario registrado correctamente")

    } catch (error) {
        console.log(error)
    }

}

export const login = async (req, res) => {
    const { username, password } = req.body
    try {
        const u = await User.findOne({ username });
        if (u != null) {
            // Esperar a que bcrypt compare la contraseña
            if (await bcrypt.compare(password, u.password)) {
                res.send("Contraseña correcta");
            } else {
                res.send("Error en el login: Contraseña incorrecta");
            }
        } else {
            res.send("Error en el login: Usuario no encontrado");
        }
    } catch (error) {
        console.error(error);
        return res.send("Error en el servidor");
    }
}