"use client";

import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { ConfettiButton } from "./../../components/ui/confetti";


export const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "portfolio_jdzm2003", 
                "template_gyg0uh3", 
                e.target as HTMLFormElement, 
                "_iA1ubS9KIyWcFWcw" 
            )
            .then(
                (result) => {
                    alert("Mensaje enviado con éxito, muchas gracias por visitar mi portafolio :)");
                    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
                },
                (error) => {
                    alert("Hubo un error al enviar el mensaje: " + error.text);
                }
            );
    };

    return (

        <div className="flex flex-col py-12 items-center justify-center">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-md shadow-lg border-white/5 border-2 p-6">
                <h2 className="text-4xl font-semibold text-gray-200 mb-4">Contactame</h2>

                <form onSubmit={handleSubmit} className="flex flex-wrap">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-white/5 backdrop-blur-lg text-gray-100 placeholder-zinc-200 border-0 rounded-md p-2 mb-4 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                        placeholder="Nombre"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white/5 backdrop-blur-lg text-gray-100 placeholder-zinc-200 border-0 rounded-md p-2 mb-4 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white/5 backdrop-blur-lg text-gray-100 placeholder-zinc-200 border-0 rounded-md p-2 mb-4 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                        placeholder="Telefono"
                    />
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-white/5 backdrop-blur-lg text-gray-100 placeholder-zinc-200 border-0 rounded-md p-2 mb-4 focus:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                        placeholder="Empresa o proyecto"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-white/5 backdrop-blur-lg hover:text-gray-800 placeholder-zinc-200 border-0 rounded-md p-2 mb-auto focus:bg-white focus:outline-none focus:ring-2 focus:ring-white md:mb-auto md:w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
                        placeholder="Mensage"
                    ></textarea>

                    <div className="pt-4 w-full flex justify-center items-center">
                        <ConfettiButton
                            className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
                                    border-blue-600
                                    border-b-[4px] hover:brightness-110 hover:bg-blue-700 hover:-translate-y-[1px] hover:border-b-[6px]
                                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                        >
                            Submit
                        </ConfettiButton>
                    </div>
                </form>
            </div>
        </div>

    );
}