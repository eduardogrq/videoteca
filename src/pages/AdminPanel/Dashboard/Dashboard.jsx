

import { AdminLayout } from '../../../components/layouts';

const Dashboard = () => {
  return (

    <AdminLayout>
      <div className="grid grid-cols-4 bg-red-500">
        <div className="col-span-3 bg-gray-200 h-64"></div>
        <div className="col-span-1 bg-red-200 h-64"></div>
        <div className="col-span-1 bg-yellow-200 h-64"></div>
        <div className="col-span-3 bg-purple-200 h-64"></div>
        <div className="col-span-2 bg-blue-200 h-64"></div>
        <div className="col-span-2 bg-orange-200 h-64"></div>
        <div className="col-span-3 bg-gray-200 h-64"></div>
        <div className="col-span-1 bg-red-200 h-64"></div>
        <div className="col-span-1 bg-yellow-200 h-64"></div>
        <div className="col-span-3 bg-purple-200 h-64"></div>
        <div className="col-span-2 bg-blue-200 h-64"></div>
        {/* <div className="col-span-2 bg-orange-200 h-64"></div>
        <div className="col-span-3 bg-gray-200 h-64"></div>
        <div className="col-span-1 bg-red-200 h-64"></div>
        <div className="col-span-1 bg-yellow-200 h-64"></div>
        <div className="col-span-3 bg-purple-200 h-64"></div>
        <div className="col-span-2 bg-blue-200 h-64"></div>
        <div className="col-span-2 bg-orange-200 h-64"></div> */}

      </div>
    </AdminLayout>
  )
}

export default Dashboard;