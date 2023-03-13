

import { AdminLayout } from '../../../components/layouts';
import { PeopleIcon } from '../../../assets/icons';
import MicrophoneIcon from '../../../assets/icons/MicrophoneIcon/MicrophoneIcon';

const Dashboard = () => {

  return (

    <AdminLayout>
      <div className="h-screen my-auto bg-gray-100" style={{ height: 'calc(100vh - 80px)' }}>

        <div className="">

          <div className="grid grid-cols-12 p-5 xl:p-7 gap-4 xl:gap-7 text-white">
            <div className="col-span-12 lg:col-span-7 h-40 lg:h-56 xl:h-80 rounded-md shadow-md
              bg-gradient-to-r from-cyan-500 to-blue-500">
              <div className='flex h-full'>
                <div className="w-1/2 h-full flex flex-col justify-center gap-4">
                  <p className="text-2xl pl-10 block">
                    Colección
                  </p>
                  <p className="text-sm pl-10 block">descripción...</p>
                </div>
                <div className="w-1/2">
                  <div className="flex h-full justify-end items-end pr-10">
                    <PeopleIcon classes="h-48 lg:h-52 xl:h-80" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 h-56 xl:h-80 gap-y-4 xl:gap-7 flex flex-col ">

              <div className="h-1/2 flex items-center pl-10  rounded-md shadow-md
                bg-gradient-to-r from-indigo-500 to-purple-500">
                <div className="h-full flex items-center justify-center gap-4">
                  <div className="h-12 w-12 rounded-md bg-indigo-400 flex justify-center items-center">

                    <MicrophoneIcon classes="w-8 h-8" />

                  </div>
                  <div>
                    <p className="text-2xl ">
                      Colección
                    </p>
                    <p className="text-sm ">descripción...</p>
                  </div>

                </div>
              </div>

              <div className="h-1/2 flex items-center pl-10 rounded-md shadow-md
                bg-gradient-to-r from-blue-800 to-blue-600">
                <div className="h-full flex items-center justify-center gap-4">
                  <div className="h-12 w-12 rounded-md bg-blue-600 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl ">
                      Colección
                    </p>
                    <p className="text-sm ">descripción...</p>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </AdminLayout>
  )
}

export default Dashboard;