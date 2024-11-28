"use client";

import Link from "next/link";

export const Navbar = () => {

    return (
        <div className="bg-white/10 backdrop-blur-md w-2/4 m-auto mt-6 rounded-md border-white/5 border-2 flex justify-center items-center">
            <div className="px-4 py-1.5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">

                {/*Se agregan estilos combinados (tailwind y CSS) para evitar resize del div principal*/}

                <div className="relative flex items-center justify-between">
                    <ul className="flex items-center space-x-12 lg:flex">
                        <li>
                            <Link
                                href="#aboutme"
                                scroll={false}
                                aria-label="About me"
                                title="Sobre mi">

                                <button
                                    className="cursor-pointer flex items-center justify-center rounded-md hover:border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 focus:backdrop-blur-lg focus:bg-white/20 active:bg-white/30 transition-all"
                                    style={{
                                        width: "82px",
                                        height: "28px",
                                        boxSizing: "border-box"
                                    }}
                                >
                                    <span className="text-gray-100">Sobre mi</span>
                                </button>


                            </Link>
                        </li>
                        <li>
                        <Link
                                href="#projects"
                                scroll={false}
                                aria-label="proyectos"
                                title="projects">

                                <button
                                    className="cursor-pointer flex items-center justify-center rounded-md hover:border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 focus:backdrop-blur-lg focus:bg-white/20 active:bg-white/30 transition-all"
                                    style={{
                                        width: "82px",
                                        height: "28px",
                                        boxSizing: "border-box"
                                    }}
                                >
                                    <span className="text-gray-100">Proyectos</span>
                                </button>


                            </Link>
                        </li>
                        <li>
                        <Link
                                href="#education"
                                scroll={false}
                                aria-label="educación"
                                title="education">

                                <button
                                    className="cursor-pointer flex items-center justify-center rounded-md hover:border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 focus:backdrop-blur-lg focus:bg-white/20 active:bg-white/30 transition-all"
                                    style={{
                                        width: "82px",
                                        height: "28px",
                                        boxSizing: "border-box"
                                    }}
                                >
                                    <span className="text-gray-100">Educación</span>
                                </button>


                            </Link>
                        </li>
                        <li>
                        <Link
                                href="#contact"
                                scroll={false}
                                aria-label="contacto"
                                title="contact">

                                <button
                                    className="cursor-pointer flex items-center justify-center rounded-md hover:border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 focus:backdrop-blur-lg focus:bg-white/20 active:bg-white/30 transition-all"
                                    style={{
                                        width: "82px",
                                        height: "28px",
                                        boxSizing: "border-box"
                                    }}
                                >
                                    <span className="text-gray-100">Contacto</span>
                                </button>


                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
};