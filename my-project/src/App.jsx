import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registerpage from "./pages/registerpage.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element= { <Registerpage/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App



/*
import React from "react"

export default function App() {
  return (

    <div className="flex flex-col bg-gray-300 w-screen h-screen">
      <div className="bg-blue-300 p-4 m-2 h-1/2 max-full">01</div>
      <div className="flex bg-gray-500 m-2 h-72 max-w-full ">
        <div className=" flex bg-blue-400 p-4 m-2 w-1/2">02</div>
        <div className=" flex flex-col bg-gray-600 m-2 w-1/2">
          <div className=" flex bg-blue-500 w-full h-full">03
            <div className=" flex-row bg-gray-700">
              <div className=" bg-blue-600 h-1/2">04</div>
              <div className=" bg-blue-700">05</div>
              </div>
          </div>
        </div>
      </div>
    </div>
 )
}
*/
/*
import React from "react"

export default function App() {
  return (
    //EJER1
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
          
      <div class="rounded-3xl shadow-md hover:shadow-blue-500 transition-shadow duration-300 bg-gray-200">
      <div class="flex justify-center p-2">
      <img src="src/assets/react.svg" alt="Imagen 1" class="w-100 h-48"/>
        </div>
        <div class="p-3 bg-blue-300">
          <h2 class="text-lg font-bold mb-2">Tarjeta 1</h2>
          <p class="text-sm mb-2">Este es un texto pequeño.</p>
          <p class="text-base mb-2">Este es un texto de tamaño base.</p>
          <p class="text-lg mb-2">Este es un texto más grande.</p>
          <p class="text-xl break-words">Este es un texto extra grande que se ajustará al ancho de la tarjeta si es demasiado largo para evitar desbordamiento.</p>
        </div>
      </div>
     
      <div class="rounded-md shadow-md hover:shadow-green-500 animate-pulse duration-[5s] bg-gray-200">
      <img src="https://picsum.photos/1920/1080" alt="Imagen 2" class="w-full h-48 object-cover rounded-t-lg"/>
        <div class="p-3 bg-red-400" >
          <h2 class="text-lg font-bold mb-2">Tarjeta 2</h2>
          <p class="text-xs mb-2">Este es un texto extra pequeño.</p>
          <p class="text-sm mb-2">Este es un texto pequeño.</p>
          <p class="text-base mb-2">Este es un texto de tamaño base.</p>
          <p class="text-lg truncate">Este es un texto más grande que se truncará si es demasiado largo para caber en una línea.</p>
        </div>
      </div>
    </div>
  )
}
*/

/*
import React, { useState } from 'react';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Usuario:', username, 'Contraseña:', password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-300">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Iniciar Sesión</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="username">Nombre de usuario</label>
              <input
                type="text"
                placeholder="Nombre de usuario"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="password">Contraseña</label>
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-baseline justify-center">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Iniciar Sesión</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
*/