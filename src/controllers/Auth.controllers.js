//Enviamos un res a nuestro front mediante una funcion flecha

import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import axios from "axios";

export const register = async (req, res) => {

    const { username, email, password } = req.body
    // Hash de la contraseña (esperamos a que la promesa se resuelva)
    const passwordHash = await bcrypt.hash(password, 10)

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

export const update = async (req, res) => {
    const { username, oldpassword, newpassword } = req.body; // Lo que recibo del front

    console.log(req.body);

    try {
        // Buscar el usuario por nombre de usuario
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).send("Error en el login: Usuario no encontrado");
        }

        // Comparar la contraseña actual (oldpassword) con la contraseña en la base de datos
        const passCorrecta = await bcrypt.compare(oldpassword, user.password);

        if (!passCorrecta) {
            return res.status(400).send("Contraseña actual no es correcta");
        }

        // Encriptar la nueva contraseña
        const newPass = await bcrypt.hash(newpassword, 10);

        // Actualizar la contraseña en la base de datos
        user.password = newPass;

        // Guardar los cambios en la base de datos
        await user.save();

        // Enviar respuesta de éxito
        return res.send("Contraseña cambiada exitosamente");

    } catch (error) {
        console.error(error);
        return res.status(500).send("Error en el servidor");
    }
};


export const deleteUser = async (req, res) => {
    try {
        const { username, password } = req.body; //front

        const usu = await User.findOne({ username })//back .find trae todo

        if (!usu) {
            return res.status(404).send("Error en el login: Usuario no encontrado");
        }

        const passCorrecta = await bcrypt.compare(password, usu.password);

        if (!passCorrecta) {
            return res.status(400).send("Contraseña actual no es correcta");
        }

        await User.deleteOne({ username });

        return res.send("Usuario eliminado exitosamente");


    } catch (error) {
        res.send(error)
    }

}

export const search = async (req, res) => {
    try {
        const { username } = req.body; //front
        const usu = await User.findOne({ username }) //back

        if (!usu) {
            return res.status(404).send("Usuario no encontrado");
        } else {
            const { username, email, password } = usu.toObject();

            //return res.json(usu)
            //return res.send("usuario encotrado");

            return res.json({ message: "Usuario encontrado", usu  });
        }
    } catch (error) {
        res.send(error)
        console.log(error)
    }
}