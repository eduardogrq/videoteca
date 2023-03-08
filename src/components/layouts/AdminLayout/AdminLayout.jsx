
import { useState } from "react";
import Navbar from './Navbar/Navbar';
import Sidebar from "./Sidebar/Sidebar";

const AdminPanelLayout = ({ children }) => {

    const [isHidden, setIsHidden] = useState(false)

    const turnToHidden = () => {
        setIsHidden(!isHidden)
    }

    return (
        <div className="lg:flex">
            {/* Sidebar component */}
            <Sidebar isHidden={isHidden} turnToHidden={turnToHidden} />
            {/* Main container */}
            <main className="h-screen w-screen lg:relative bg-gray-200">
                {/* Navbar component */}
                <Navbar turnToHidden={turnToHidden} />
                {/* Content */}
                <div className="container px-4 py-6">
                    {children}
                </div>
            </main>
        </div>
    );
}

export default AdminPanelLayout;
