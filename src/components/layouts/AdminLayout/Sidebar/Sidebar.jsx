
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

const Sidebar = ({ isHidden, turnToHidden }) => {

    return (
        // {/* Sidebar */}
        // <div className="flex min-h-screen -ml-[100px]">
        //     <div 
        //         // className={`min-h-screen w-1/5 md:w-3/5 fixed right-0 bg-black opacity-40 ${!isHidden ? 'block lg:hidden' : 'hidden'}`}
        //         className={`min-h-screen w-1/5 md:w-3/5 fixed right-0 bg-black opacity-40 ${!isHidden ? 'static lg:hidden' : 'hidden'}`}
        //         onClick={turnToHidden}
        //     >
        //     </div>
        //     {/* <aside className={`w-4/5 md:w-2/5 lg:w-64 text-white fixed min-h-screen inset-y-0 left-0 bg-gray-800 ${!isHidden || 'hidden'}`}> */}
        //     <aside className={`w-4/5 md:w-2/5 lg:w-64 text-white fixed min-h-screen inset-y-0 left-0 bg-gray-800 `}>
        //         <div className="h-full bg-gray-800 pt-0 px-5">
        //             <div className="flex justify-between items-center w-full h-20 overflow-hidden">
        //                 <div className="flex items-center lg:justify-center lg:text-center lg:w-full gap-5 cursor-pointer">
        //                     <img src="https://picsum.photos/seed/picsum/40/40"
        //                         className="text-lg rounded-full lg:hidden"
        //                         alt=""
        //                     />
        //                     <img src="https://picsum.photos/seed/picsum/120/50"
        //                         className="text-lg rounded-full hidden lg:block"
        //                         alt=""
        //                     />
        //                     <span className="lg:text-xs lg:hidden whitespace-pre-wrap">Eduardo Quiñonez</span>
        //                 </div>
        //                 <XMarkIcon className="w-6 h-6 lg:hidden cursor-pointer" onClick={turnToHidden} />
        //             </div>
        //             <div className="h-screen flex flex-col justify-between">
        //                 {/* First block */}
        //                 <div className="w-full h-1/2 pt-8">
        //                     <ul className='space-y-10 lg:space-y-8'>
        //                         <li className='flex items-center'>
        //                             <span className='cursor-pointer flex items-center'>
        //                                 <Squares2X2Icon className="w-6 h-6 mr-4" />
        //                                 Inicio
        //                             </span>
        //                         </li>
        //                         <li className="flex items-center">
        //                             <span className='cursor-pointer flex items-center'>
        //                                 <PlayIcon className="w-6 h-6 mr-4" />
        //                                 Colección
        //                             </span>
        //                         </li>
        //                         <li className="flex items-center">
        //                             <span className='cursor-pointer flex items-center'>
        //                                 <MicrophoneIcon className="w-6 h-6 mr-4" />
        //                                 Transcripción
        //                             </span>
        //                         </li>
        //                         <li className="flex items-center">
        //                             <span className='cursor-pointer flex items-center'>
        //                                 <UserCircleIcon className="w-6 h-6 mr-4" />
        //                                 Reconocimiento
        //                             </span>
        //                         </li>
        //                         <li className="flex items-center">
        //                             <span className='cursor-pointer flex items-center'>
        //                                 <ArrowUpOnSquareIcon className="w-6 h-6 mr-4" />
        //                                 Subir archivo
        //                             </span>
        //                         </li>
        //                     </ul>
        //                 </div>
        //                 {/* Second block */}
        //                 <div className="w-full h-1/2 mb-56 lg:mb-28 flex items-end">
        //                     <hr className='mb-10' />
        //                     <div>
        //                         <ul className='space-y-10 lg:space-y-8'>
        //                             <li className="flex items-center">
        //                                 <span className='cursor-pointer flex items-center'>
        //                                     <ChatBubbleBottomCenterTextIcon className="w-6 h-6 mr-4" />
        //                                     Notificaciones
        //                                 </span>
        //                             </li>
        //                             <li className="flex items-center">
        //                                 <span className='cursor-pointer flex items-center'>
        //                                     <Cog6ToothIcon className="w-6 h-6 mr-4" />
        //                                     Ajustes
        //                                 </span>
        //                             </li>
        //                             <li className="flex items-center">
        //                                 <span className='cursor-pointer flex items-center'>
        //                                     <ArrowRightOnRectangleIcon className="w-6 h-6 mr-4" />
        //                                     Salir
        //                                 </span>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </aside>
            
        // </div>
        <div className='full'>

        </div>

    );
}

export default Sidebar;
