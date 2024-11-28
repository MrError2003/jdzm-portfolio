import React from 'react';

export const Education = () => {
    return (
        <div className="w-3/5 px-4 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 bg-white/10 backdrop-blur-md rounded-md shadow-lg border-white/5 border-2">
            <div className="pb-4 mt-6 text-start">
                <h1
                    className="text-white font-bold text-5xl"
                >
                    Educación
                </h1>
            </div>
            <div className="mb-2">

                <div className="grid py-8 sm:grid-cols-3">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-lg font-bold">
                            <p className="text-white">
                                CESDE
                            </p>
                            <p className="text-gray-300 text-sm">Julio 2022 - <br /> Junio 2024</p>
                        </div>
                    </div>
                    <div className="sm:col-span-2 lg:col-span-2">
                        <div className="my-0.5">
                            <p className="text-3xl text-white font-bold sm:text-4xl">
                                Tecnico en desarro de software.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-3">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-lg font-bold">
                            <p className="text-white">
                                Autodidacta
                            </p>
                            <p className="text-gray-300 text-sm">Julio 2024 - <br /> Actualidad</p>
                        </div>
                    </div>
                    <div className="sm:col-span-2 lg:col-span-2">
                        <div className="my-0.5">
                            <p className="text-3xl text-white font-bold sm:text-4xl">
                                Conocimiento y practica autodidacta.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};