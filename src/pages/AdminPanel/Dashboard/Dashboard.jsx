
import Sidebar from './../Sidebar/Sidebar';
import Navbar from './../Navbar/Navbar';
import { useState } from 'react';

const Dashboard = () => {

  const [isHidden, setIsHidden] = useState(false)

  const turnToHidden = () => {
    setIsHidden(!isHidden)
  }

  return (
    <div className="lg:flex">
      {/* Sidebar component */}
      <Sidebar isHidden={isHidden} turnToHidden={turnToHidden} />
      {/* Main container */}
      <div className="h-screen w-screen lg:relative bg-gray-200">
        {/* Navbar component */}
        <Navbar turnToHidden={turnToHidden} />
        <main>
          
        </main>
      </div>
    </div>
  )
}

export default Dashboard;