
import { useState, useContext } from "react";
import Navbar from './Navbar/Navbar';
import Sidebar from "./Sidebar/Sidebar";
import {DataContext} from "./../../../context/DataContext";

const AdminPanelLayout = ({ children }) => {

    const {userData, setUserData} = useContext(DataContext)
    
    const [isHidden, setIsHidden] = useState(true)

    const turnToHidden = () => {
        setIsHidden(!isHidden)
    }

    return (

        <div className="flex h-screen">
            <Sidebar isHidden={isHidden} turnToHidden={turnToHidden} userAttributes={userData} />
            {/* Contenido principal */}
            <div className={`flex-1  ${isHidden || 'lg:ml-64'} `}>
                
                <Navbar turnToHidden={turnToHidden} userAttributes={userData} />

                <div>
                    {children}
                </div>
            </div>
        </div>

    );
}

export default AdminPanelLayout;
