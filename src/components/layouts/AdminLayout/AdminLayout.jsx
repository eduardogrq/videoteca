
import { useState, useContext } from "react";
import { DataContext } from "./../../../context/DataContext";
import { ArrowRightOnRectangleIcon, ArrowUpOnSquareIcon, ChatBubbleBottomCenterTextIcon, Cog6ToothIcon, MicrophoneIcon, PlayIcon, Squares2X2Icon, UserCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Navbar from './Navbar/Navbar';
import Sidebar from "./Sidebar/Sidebar";


const AdminPanelLayout = ({ children }) => {

    const { userData, setUserData } = useContext(DataContext)

    const [isHidden, setIsHidden] = useState(true)

    const turnToHidden = () => {
        setIsHidden(!isHidden)
    }

    return (
        <div className="flex min-h-screen">
            {/* sidebar */}
            <div className={
                `bg-gray-800 text-white fixed top-0 px-5
                ${isHidden ? '-left-full' : 'left-0'} 
                lg:static lg:w-80 w-[75%] md:w-[40%] overflow-y-scroll z-50 transition-all`
            }>
                {/* avatar section */}
                <div className="flex flex-col justify-between min-h-screen pb-5">
                    <div>
                        <div className="flex items-center justify-between lg:justify-center h-20">
                            <div className="flex items-center gap-3 lg:hidden">
                                <img src="https://picsum.photos/40/40" alt="" className="rounded-full" />
                                <span className="text-sm">Eduardo Quiñonez</span>
                            </div>
                            <XMarkIcon className="w-6 h-6 lg:hidden" onClick={turnToHidden} />
                            <img src="https://picsum.photos/200/40" className="rounded-lg hidden lg:block" alt="" />
                        </div>
                        <ul className="pt-8 flex flex-col gap-8">
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
                    </div>

                    <ul className="flex flex-col gap-8">
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
            <div className="w-full col-span-12 bg-red-200">
                <button onClick={turnToHidden}>yei</button>
            </div>
        </div>

        // <div className="flex h-screen">
        //     <Sidebar isHidden={isHidden} turnToHidden={turnToHidden} userAttributes={userData} />
        //     {/* Contenido principal */}
        //     <div className={`flex-1  ${isHidden || 'lg:ml-64'} `}>

        //         <Navbar turnToHidden={turnToHidden} isHidden={isHidden} userAttributes={userData} />

        //         <div className="bg-red-500">
        //             {children}
        //         </div>
        //     </div>
        // </div>


    );
}

export default AdminPanelLayout;
