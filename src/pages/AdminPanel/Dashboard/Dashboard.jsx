
import Sidebar from './../Sidebar/Sidebar'
import Navbar from './../Navbar/Navbar'
import { useState } from 'react'
import { useEffect } from 'react'

const Dashboard = () => {

  const [hidden, setHidden] = useState(false)

  const turnHidden = () => {
    setHidden(!hidden)
  }

  useEffect(() => {
    if (hidden) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [hidden]);

  return (
    <div className="lg:flex">
      {/* Sidebar component */}
      <Sidebar hidden={hidden} />
      {/* Main container */}
      <div className="h-screen w-screen lg:relative bg-gray-200">
        {/* Navbar component */}
        <Navbar turnHidden={turnHidden} />
        <main>
          
        </main>
      </div>
    </div>
  )
}

export default Dashboard;