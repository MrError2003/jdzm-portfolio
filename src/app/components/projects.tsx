import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Projects = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

            <div className="text-center">
                <div className="inline-flex items-center pt-2 pb-4 px-4 mx-4 text-center mb-10 text-white bg-white/10 backdrop-blur-md rounded-md shadow-lg border-white/5 border-2">
                    <h2 className="text-5xl font-bold sm:text-5xl md:mx-auto">
                        Proyectos
                    </h2>
                </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="bg-white/10 backdrop-blur-md rounded-md shadow-lg border-white/5 border-2">

                    <Image
                        src="/images/apipezcoma.webp"
                        width={600}
                        height={400}
                        className="object-cover w-full h-64 rounded"
                        alt=""
                    />

                    <div className="mx-5 py-5">

                        <p className="text-2xl text-white font-bold leading-5 mb-4">API Pezcoma</p>

                        <p className="mb-4 text-white">
                            API rest en Node.js, Express y MongoDB, con autenticación JWT y encriptado con bcrypt para plataforma de pesca deportiva.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="https://integrador4to.onrender.com"
                                target="_blank"
                                aria-label="API rest"
                                title="Proyecto Pezcoma">

                                <button className="cursor-pointer bg-white/10 backdrop-blur-sm text-white lative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors hover:border-2 hover:bg-blue-600 border-blue-400 h-7 px-2">
                                    Visitar sitio
                                </button>
                            </Link>

                            <Link
                                href="https://github.com/MrError2003/Integrador4to"
                                target="_blank"
                                aria-label="Repositorio API"
                                title="Repositorio">

                                <button className="cursor-pointer bg-white/10 backdrop-blur-sm text-black lative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors hover:border-2 hover:text-white hover:bg-gray-800 border-gray-600 h-7 pl-1 pr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" className="fill-current"><path d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.64 3.64 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2 2 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.1 2.1 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.9 3.9 0 0 1 1.025-2.688a3.6 3.6 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.6 3.6 0 0 1 .1 2.65a3.87 3.87 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.37 2.37 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247" /></svg>
                                    GitHub
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-md shadow-lg border-white/5 border-2">

                    <Image
                        src="/images/ptrm.webp"
                        width={600}
                        height={400}
                        className="object-cover w-full h-64 rounded"
                        alt=""
                    />

                    <div className="mx-5 py-5">

                        <p className="text-2xl text-white font-bold leading-5 mb-4">Favoritos Rick y Morty</p>

                        <p className="mb-4 text-white">
                        Este proyecto contiene una prueba técnica que implementa una API de Rick y Morty, mayormente desarrollada en TypeScript.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="https://pruebatecnica-c19m-9brq5pu26-mrerror2003s-projects.vercel.app/"
                                target="_blank"
                                aria-label="Our product"
                                title="Our product">

                                <button className="cursor-pointer bg-white/10 backdrop-blur-sm text-white lative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors hover:border-2 hover:bg-blue-600 border-blue-400 h-7 px-2">
                                    Visitar sitio
                                </button>
                            </Link>

                            <Link
                                href="https://github.com/MrError2003/pruebatecnica"
                                target="_blank"
                                aria-label="Pruaba tecnica"
                                title="Repositorio prueba tecnica">

                                <button className="cursor-pointer bg-white/10 backdrop-blur-sm text-black lative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors hover:border-2 hover:text-white hover:bg-gray-800 border-gray-600 h-7 pl-1 pr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" className="fill-current"><path d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.64 3.64 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2 2 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.1 2.1 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.9 3.9 0 0 1 1.025-2.688a3.6 3.6 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.6 3.6 0 0 1 .1 2.65a3.87 3.87 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.37 2.37 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247" /></svg>
                                    GitHub
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-md shadow-lg border-white/5 border-2">

                    <Image
                        src="/images/trotapp.webp"
                        width={600}
                        height={400}
                        className="object-cover w-full h-64 rounded"
                        alt=""
                    />

                    <div className="mx-5 py-5">

                        <p className="text-2xl text-white font-bold leading-5 mb-4">Participación Trotapp</p>

                        <p className="mb-4 text-white">
                            Participacion en desarrollo de componentes y funcionalidades para la interfaz en la aplicación de Trotapp (Aun en desarrollo).
                        </p>
                        <div className="flex space-x-4">
                            <Link
                               href="https://github.com/trotapp/trotapp-web"
                               target="_blank"
                               aria-label="Participacion proyecto"
                               title="Repositorio Trotapp">

                                <button className="cursor-pointer bg-white/10 backdrop-blur-sm text-white lative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors hover:border-2 hover:bg-blue-600 border-blue-400 h-7 px-2">
                                    Visitar sitio
                                </button>
                            </Link>

                            <Link
                                href="https://github.com/trotapp/trotapp-web"
                                target="_blank"
                                aria-label="Participacion proyecto"
                                title="Repositorio Trotapp">

                                <button className="cursor-pointer bg-white/10 backdrop-blur-sm text-black lative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-background transition-colors hover:border-2 hover:text-white hover:bg-gray-800 border-gray-600 h-7 pl-1 pr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" className="fill-current"><path d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.64 3.64 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2 2 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.1 2.1 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.9 3.9 0 0 1 1.025-2.688a3.6 3.6 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.6 3.6 0 0 1 .1 2.65a3.87 3.87 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.37 2.37 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247" /></svg>
                                    GitHub
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};