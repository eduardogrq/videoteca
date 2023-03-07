
import React from 'react';

const Sidebar = () => {
    return (
        <div className="flex items-stretch">
            <div className="animate__animated animate__fadeInLeft fixed top-0 left-0 h-full w-4/5 md:w-2/5 lg:w-80 lg:relative lg:min-h-screen z-50 bg-gray-800 px-5 lg:px-10 py-10">

                <div className="flex flex-col justify-between min-h-full text-white">

                    {/* first Block */}
                    <div>
                        {/* profile header */}
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-3">
                                <img src="https://picsum.photos/seed/picsum/40/40"
                                    className="text-lg rounded-full"
                                    alt=""
                                />
                                <span>Eduardo Quiñonez</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 lg:hidden">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                            </svg>

                        </div>
                        <div className='mt-8 lg:mt-10'>
                            <ul className='space-y-7 lg:space-y-5'>
                                <li>Inicio</li>
                                <li>Colección</li>
                                <li>Transcripción</li>
                                <li>Reconocimiento</li>
                                <li>Subir archivo</li>
                            </ul>
                        </div>

                    </div>

                    {/* Second block */}
                    <div>
                        <hr className='mb-10' />
                        <div>
                            <ul className='space-y-7 lg:space-y-5'>
                                <li>Notificaciones</li>
                                <li>Ajustes</li>
                                <li>Salir</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className="fixed w-full bg-black min-h-screen lg:hidden opacity-50"></div>
        </div>
    );
}

export default Sidebar;
