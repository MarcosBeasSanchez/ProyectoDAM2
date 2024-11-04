import axios from "axios"

const API = "http://localhost:5000"

export const registerRequest = (user) => {

    return axios.post("http://localhost:5000/register", user)

        .then(function (response) {
            console.log(response)
        })

        .catch(function (error) {
            console.log(error)
        })
}

