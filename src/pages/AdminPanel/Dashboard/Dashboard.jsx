

import { AdminLayout } from '../../../components/layouts';

const Dashboard = () => {

  return (

    <AdminLayout>
      <div className="min-h-screen bg-gray-100">

        <div className="">

          <div className="grid grid-cols-12 p-5 xl:p-7 gap-4 xl:gap-7">
            <div className="col-span-12 lg:col-span-7 bg-blue-300 h-40 lg:h-52 xl:h-96 rounded-md shadow-md">
              <div className='flex h-full'>
                <div className="w-1/2 h-full flex items-center">
                  <p className="text-2xl pl-10">
                    Colección
                  </p>
                </div>
                <div className="w-1/2">
                  <div className="flex h-full justify-end items-end pr-10">
                    Aquí el primerito
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 h-52 xl:h-96 gap-y-4 xl:gap-7 flex flex-col ">
              <div className="h-1/2 flex items-center p-5 bg-purple-300 rounded-md shadow-md">simon</div>
              <div className="h-1/2 flex items-center p-5 bg-blue-500 rounded-md shadow-md">simon</div>
            </div>

            <div className="col-span-12 lg:col-span-7 h-36 lg:h-48 xl:h-80 bg-white shadow-md">Dale</div>
            <div className="col-span-12 lg:col-span-5 h-36 lg:h-48 xl:h-80 bg-white shadow-md">Peggo</div>
          </div>

        </div>

      </div>

    </AdminLayout>
  )
}

export default Dashboard;