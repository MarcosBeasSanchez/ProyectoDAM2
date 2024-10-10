//Enviamos un res a nuestro front mediante una funcion flecha
import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
    const { username, email, password } = req.body
    const passwordHash = bcrypt.hash(password, 10)
    console.log((passwordHash).toString())

    try {
        const newUser = new User({
            username,
            email,
            password: passwordHash
        })

        const UserSchema = newUser.save()
        res.json(UsernameSalvado)

    } catch (error) {
        console.log(error)
    }
}

export const login = (req, res) => {
    res.send("Logeando al usuario") // Login  la respuesta del back
}

/*const{username, email, password} = req.body
console.log(username,email,password)*/
