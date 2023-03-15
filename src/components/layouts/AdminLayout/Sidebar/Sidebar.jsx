
import { 
    MicrophoneIcon,
    PlayIcon,
    Squares2X2Icon,
    UserCircleIcon,
    ArrowUpOnSquareIcon, 
    ChatBubbleBottomCenterTextIcon,
    Cog6ToothIcon,
    ArrowRightOnRectangleIcon,
    XMarkIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react';

const Sidebar = ({ isHidden, turnToHidden, isVisibleOnLargeScreen }) => {

    return (
        <div className={
            `${isHidden ? '-left-full' : 'left-0'}
            bg-gray-800 text-white fixed top-0 px-5
            lg:static w-[75%] md:w-[40%] lg:w-80 overflow-y-scroll
            z-50 transition-all duration-500 ${!isVisibleOnLargeScreen ? 'lg:fixed -ml-full' :  ' -ml-0'}`
        }>
            {/* avatar section */}
            <div className="flex flex-col justify-between min-h-screen pb-5">
                <nav>
                    <div className="flex items-center justify-between lg:justify-center h-20">
                        <div className="flex items-center gap-3 lg:hidden">
                            <img src="https://picsum.photos/40/40" alt="" className="rounded-full" />
                            <span className="text-sm">Eduardo Quiñonez</span>
                        </div>
                        <XMarkIcon className="w-6 h-6 lg:hidden" onClick={turnToHidden} />
                        <img src="https://picsum.photos/200/40" className="rounded-lg hidden lg:block" alt="" />
                    </div>
                    <ul className="pt-8 flex flex-col gap-8 lg:gap-6">
                        <li className='flex items-center'>
                            <span className='cursor-pointer flex items-center'>
                                <Squares2X2Icon className="w-6 h-6 mr-4" />
                                Inicio
                            </span>
                        </li>
                        <li className="flex items-center">
                            <span className='cursor-pointer flex items-center'>
                                <PlayIcon className="w-6 h-6 mr-4" />
                                Colección
                            </span>
                        </li>
                        <li className="flex items-center">
                            <span className='cursor-pointer flex items-center'>
                                <MicrophoneIcon className="w-6 h-6 mr-4" />
                                Transcripción
                            </span>
                        </li>
                        <li className="flex items-center">
                            <span className='cursor-pointer flex items-center'>
                                <UserCircleIcon className="w-6 h-6 mr-4" />
                                Reconocimiento
                            </span>
                        </li>
                        <li className="flex items-center">
                            <span className='cursor-pointer flex items-center'>
                                <ArrowUpOnSquareIcon className="w-6 h-6 mr-4" />
                                Subir archivo
                            </span>
                        </li>
                    </ul>
                </nav>

                <ul className="flex flex-col gap-8 lg:gap-6">
                    <li className="flex items-center">
                        <span className='cursor-pointer flex items-center'>
                            <ChatBubbleBottomCenterTextIcon className="w-6 h-6 mr-4" />
                            Notificaciones
                        </span>
                    </li>
                    <li className="flex items-center">
                        <span className='cursor-pointer flex items-center'>
                            <Cog6ToothIcon className="w-6 h-6 mr-4" />
                            Ajustes
                        </span>
                    </li>
                    <li className="flex items-center">
                        <span className='cursor-pointer flex items-center'>
                            <ArrowRightOnRectangleIcon className="w-6 h-6 mr-4" />
                            Salir
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
