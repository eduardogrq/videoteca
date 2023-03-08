

import { AdminLayout } from '../../../components/layouts';

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="flex">
        <div className="w-1/3 bg-red-300 h-24"></div>
        <div className="w-2/3 bg-blue-300 h-24"></div>
      </div>
    </AdminLayout>
  )
}

export default Dashboard;