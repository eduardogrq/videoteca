
import { useState } from "react";
import Navbar from './Navbar/Navbar';
import Sidebar from "./Sidebar/Sidebar";

const AdminPanelLayout = ({ children }) => {

    const [isHidden, setIsHidden] = useState(true)

    const turnToHidden = () => {
        setIsHidden(!isHidden)
    }

    return (

        <div className="flex h-screen">

            <Sidebar isHidden={isHidden} turnToHidden={turnToHidden}/>
            {/* Contenido principal */}
            <div className={`flex-1  ${isHidden || 'lg:ml-64'} `}>
                <Navbar turnToHidden={turnToHidden} />

                <div>
                    {children}
                </div>
            </div>
        </div>

    );
}

export default AdminPanelLayout;
