import axios from "axios"

const API = "http://localhost:5000"

export const registerRequest = (user) => {

    return axios.post("http://localhost:5000/register", user) //otra manera

        .then(function (response) {
            console.log(response)
        })

        .catch(function (error) {
            console.log(error)
        })
}

export const loginRequest = (user) => {

    return axios.post(`${API}/login`, user) //una manera
        .then(function (response) {
            console.log(response)
            return response.data
        })
        .catch(function (error) {
            console.log(error)
            throw error
        })
}

export const searchRequest = ()=>{
    
     axios.get(`${API}/search`)

     .then(function(response){
        console.log(response.data)
     })
     .catch(function(error){
        console.log(error)
     })
}

export const listarRequest = () =>{

    return axios.get(`${API}/list`)

    .then((response) => response)
    .catch((error) => {
        console.error("Error en la solicitud:", error);
        throw error;
    });
}

