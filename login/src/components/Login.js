import * as React from 'react'

export default function Form() {
    return(
        <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-[url('https://web.mineracentinela.cl/media/4083/centinela-6.jpg')]">
            <div className="rounded-xl bg-gray-800 bg-opacity-50 px-20 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                <div className="text-white">
                    <div className="mb-8 flex flex-col items-center">
                        <img src="https://voltea.cl/aminerals/resultados1q/img/Logo-AM-Gris.png" width="150" alt="" srcset="" />
                        <h1 className="mb-2 text-2xl flex">Sistema Reportes Mina</h1>
                        <span className="text-gray-300">Ingrese sus datos</span>
                    </div>
                <form action="#">
                    <div className="relative">
                        {/* RUT */}
                    <input autoComplete="off" 
                        //id="email"   type='text' value={correo}  onChange={}" 
                        type="text" 
                        className="peer placeholder-transparent bg-transparent h-10 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:border-white" 
                        placeholder="RUT" />
                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-white text-bold peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">Email</label>
                    </div>

                    <div className="relative mt-10">
                        {/* CLAVE */}
                    <input autoComplete="off" 
                        //id='contraseña' type='text' value={contraseña} onChange={}
                        type="password" 
                        className="peer placeholder-transparent bg-transparent h-10 w-full border-b-2 border-gray-300 text-white focus:outline-none focus:border-white" 
                        placeholder="RUT" />
                        <label htmlFor="userRut" className="absolute left-0 -top-3.5 text-white text-bold peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm">Contraseña</label>
                    </div>
                    <div className="mt-8 flex justify-flex text-lg text-black">
                        <button type="submit" className="mr-5 rounded-3xl bg-sky-700 bg-opacity-20 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-sky-800 backdrop-blur-md">Login</button>
                        <button type="submit" className="rounded-3xl bg-sky-700 bg-opacity-20 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-sky-800">Visita</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}