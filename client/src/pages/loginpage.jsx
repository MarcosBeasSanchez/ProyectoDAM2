import { useForm } from "react-hook-form";
import { loginRequest } from "../api/Request.js";
import React from "react";

function LoginPage() {
    
    const { register, handleSubmit } = useForm();

    return (
        <div>
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
                            <div className="flex -0 items-center">
                                <img className="h-8 w-auto" src="https://site.educa.madrid.org/ies.villablanca.madrid//wp-content/uploads/ies.villablanca.madrid/2022/04/IES-Villablanca-horizontal-color.png" alt="Your Company" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block ">
                                <div className="flex space-x-4 ">
                                    <a href="http://localhost:5173/register" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white ">Register</a>
                                    <a href="http://localhost:5173/login" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Login</a>
                                    <a href="http://localhost:5173/search" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Search</a>
                                    <a href="http://localhost:5173/list" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">List</a>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                </svg>
                            </button>
                            <div className="relative ml-3">
                                <div>
                                    <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src="https://cdn.iconscout.com/icon/free/png-256/free-person-2653741-2202553.png?f=webp" alt="" />
                                    </button>
                                </div>
                                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          
            </nav>


            <div className="flex flex-row justify-center my-40">
                <div className="bg-zinc-800 max-w-md rounded-md p-6">
                    <h1 className="text-white text-center font-medium">LOGIN</h1>
                    <form onSubmit={handleSubmit((values) => { loginRequest(values) })}>
                        <input type="text"
                            {...register("username", { required: true })}
                            className="w-full bg-zinc-700 text-white px-5 py-2 my-3 rounded-md"
                            placeholder="Username" />
                        <input type="password"
                            {...register("password", { required: true })}
                            className="w-full bg-zinc-700 text-white px-5 py-2 my-3 rounded-md"
                            placeholder="Password" />
                        <div className="flex justify-center mt-3">
                            <button type="submit" className="flex-auto bg-zinc-900 p-2 rounded-md text-white hover:bg-slate-800">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;