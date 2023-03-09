
import { useState } from "react";
import Navbar from './Navbar/Navbar';
import Sidebar from "./Sidebar/Sidebar";

const AdminPanelLayout = ({ children }) => {

    const [isHidden, setIsHidden] = useState(true)

    const turnToHidden = () => {
        setIsHidden(!isHidden)
    }

    return (
        // <div className="lg:flex">
        //     {/* Sidebar component */}
        //     <Sidebar isHidden={isHidden} turnToHidden={turnToHidden} />
        //     {/* Main container */}
        //     <main className="h-screen w-screen lg:relative bg-gray-200">
        //         {/* Navbar component */}
        //         <Navbar turnToHidden={turnToHidden} />
        //         {/* Content */}
        //         <div className="container px-4 py-6">
        //             {children}
        //         </div>
        //     </main>
        // </div>

        <div className="flex h-screen">

            <Sidebar isHidden={isHidden} turnToHidden={turnToHidden}/>
            {/* Contenido principal */}
            <div className={`flex-1 ${isHidden || 'lg:ml-64'} `}>

                <Navbar turnToHidden={turnToHidden} />

                <div className="bg-white p-10 rounded-md shadow-md">
                    {children}
                </div>
            </div>
        </div>

    );
}

export default AdminPanelLayout;
