import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from "./../../components/ui/badge";

const Prcard = () => {
    return (
        <div className="flex flex-col md:flex-row items-center p-3 w-3/5 h-auto bg-white/10 backdrop-blur-md rounded-md shadow-lg border-white/5 border-2 md:w-3/5 md:h-48">
            {/* Avatar */}
            <section className="hidden md:flex justify-center items-center m-6 rounded-full shadow-md bg-gradient-to-r from-[#268C5C] to-[#0F402E]">
                <Image src="/images/fotopersonal.png" alt="avatar" width={200} height={200} className="rounded-full" />
            </section>

            {/* Text Content */}
            <section className="w-full pt-5 md:pt-1 md:pb-5">
                <div className="text-center md:text-left">
                    <h1 className="text-gray-200 font-bold text-2xl md:text-4xl">
                        Juan David Zapata Márquez
                    </h1>
                    <h3 className="text-gray-200 text-base md:text-lg mb-2">Desarrollador web</h3>
                </div>

                {/* Badge */}
                <div className="flex justify-center md:justify-start">
                    <Badge className="bg-white text-black hover:text-white text-sm flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" className="pr-1">
                            <path fill="#dc2626" d="M19 9A7 7 0 1 0 5 9c0 1.387.409 2.677 1.105 3.765h-.008L12 22l5.903-9.235h-.007A6.97 6.97 0 0 0 19 9m-7 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6" />
                        </svg>
                        <h1 className="cursor-text">Medellin - Antioquia</h1>
                    </Badge>
                </div>

                {/* Contact Options */}
                <div className="flex flex-col gap-3 pt-5 justify-center md:flex-row items-center sm:justify-center">
                    <Badge className="w-52 bg-white/10 backdrop-blur-lg text-black hover:text-white text-sm flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" className="pr-2 fill-current">
                            <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm3.519 0L12 11.671L18.481 6zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16z" />
                        </svg>
                        juanzapata10b@gmail.com
                    </Badge>

                    <Link href="https://www.linkedin.com/in/juan-david-zapata-marquez-9691b0190/" target="_blank" aria-label="LinkedIn" title="LinkedIn">
                        <button className="cursor-pointer bg-white/10 backdrop-blur-sm text-white inline-flex items-center gap-2 rounded-md text-sm font-medium transition-colors hover:border-2 border-blue-400 h-7 px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3" /><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z" /></svg>
                            LinkedIn
                        </button>
                    </Link>

                    <Link href="https://github.com/MrError2003" target="_blank" aria-label="GitHub" title="GitHub">
                        <button className="cursor-pointer bg-white/10 backdrop-blur-sm text-white inline-flex items-center gap-2 rounded-md text-sm font-medium transition-colors hover:border-2 border-gray-600 h-7 px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="#1f2937" d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.64 3.64 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2 2 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.1 2.1 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.9 3.9 0 0 1 1.025-2.688a3.6 3.6 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.6 3.6 0 0 1 .1 2.65a3.87 3.87 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.37 2.37 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247" /></svg>
                            GitHub
                        </button>
                    </Link>

                    <Link href="/docs/cv_juanzapata.pdf" target="_blank" download="CV_JuanZapata.pdf" aria-label="Curriculum" title="CV">
                        <button className="cursor-pointer bg-white/10 backdrop-blur-sm text-white inline-flex items-center gap-2 rounded-md text-sm font-medium transition-colors hover:border-2 border-zinc-300 h-7 px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20"><g fill="#ffffff"><path d="M7.8 6.35c.56 0 1.01</button>-.45 1.01-1.01S8.36 4.33 7.8 4.33s-1.01.45-1.01 1.01s.45 1.01 1.01 1.01" /><path fillRule="evenodd" d="M9.83 8.55c0-1.08-.91-1.86-2.03-1.86s-2.03.78-2.03 1.86v.51c0 .09.04.18.1.24s.15.1.24.1h3.38c.09 0 .18-.04.24-.1s.1-.15.1-.24zM5.75 11.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clipRule="evenodd" /><path fillRule="evenodd" d="M2.5 2.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2zm8.689 0H4.5v15h11V7.192l-4.296-4.685l-.003-.001z" clipRule="evenodd" /><path fillRule="evenodd" d="M11.19.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1" clipRule="evenodd" /></g></svg>
                            Curriculum
                        </button>
                    </Link>
                </div>
            </section>
        </div>

    );
}

export default Prcard;
