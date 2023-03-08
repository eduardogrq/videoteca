
import Sidebar from './../Sidebar/Sidebar'
import Navbar from './../Navbar/Navbar'

const Dashboard = () => {
  return (
    <div className="lg:flex">

      <Sidebar/>

      <div className="h-screen w-screen lg:relative bg-gray-200">
        {/* <button className="fixed top-0 left-0 h-10 w-10 z-50"> */}
        {/* <!-- icono para abrir el sidebar --> */}
        {/* X */}
        {/* </button> */}
        {/* Aqui va el contenido del contenedor principal */}

        <Navbar />
        {/* <main className='container mx-auto h-full w-full bg-gray-500'>
          <div>
            Hello peggos
          </div>
        </main> */}
      </div>
    </div>
  )
}

export default Dashboard;