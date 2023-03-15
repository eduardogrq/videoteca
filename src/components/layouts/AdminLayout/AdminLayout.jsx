
import { useState, useContext } from "react";
import { DataContext } from "./../../../context/DataContext";
import { ArrowRightOnRectangleIcon, ArrowUpOnSquareIcon, ChatBubbleBottomCenterTextIcon, Cog6ToothIcon, MicrophoneIcon, PlayIcon, Squares2X2Icon, UserCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Navbar from './Navbar/Navbar';
import Sidebar from "./Sidebar/Sidebar";


const AdminPanelLayout = ({ children }) => {

    const { userData, setUserData } = useContext(DataContext)
    const [isHidden, setIsHidden] = useState(true)
    const [isVisibleOnLargeScreen, setIsVisibleOnLargeScreen] = useState(true)

    const turnToHidden = () => {
        setIsHidden(!isHidden)
    }

    const turnToNotVisible = () => {
        setIsVisibleOnLargeScreen(!isVisibleOnLargeScreen)
        console.log('Si funciona')
    }

    return (
        <div className="flex min-h-screen">
            {/* sidebar */}
            <Sidebar
                turnToHidden={turnToHidden}
                isHidden={isHidden}
                isVisibleOnLargeScreen={isVisibleOnLargeScreen}
            />
            <div className="w-full col-span-12 bg-red-200">
                <Navbar 
                    turnToHidden={turnToHidden}
                    turnToNotVisible={turnToNotVisible} 
                />
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
