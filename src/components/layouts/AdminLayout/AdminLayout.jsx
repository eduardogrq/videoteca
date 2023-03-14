
import { useState, useContext } from "react";
import { DataContext } from "./../../../context/DataContext";
import { XMarkIcon } from "@heroicons/react/24/outline";
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
            <div className={`bg-red-500 fixed top-0 ${isHidden ? '-left-full' : 'left-0'} lg:static lg:w-80 w-[75%] md:w-[40%] overflow-y-scroll z-50 transition-all`}>
                {/* avatar section */}

                <div className="flex p-5 flex-col justify-between min-h-screen">
                    <div>
                        <div className="flex items-center justify-between">
                            <img src="https://picsum.photos/50/50" alt="" className="rounded-full"/>
                            <span className="text-sm">Eduardo Quiñonez</span>
                            <XMarkIcon className="w-6 h-6" onClick={turnToHidden}/>
                        </div>
                        <ul>
                            <li>Primero</li>
                            <li>Primero</li>
                            <li>Primero</li>
                            <li>Primero</li>
                            <li>Primero</li>
                        </ul>
                    </div>

                    <ul>
                        <li>segundo</li>
                        <li>segundo</li>
                        <li>segundo</li>
                        <li>segundo</li>
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
