import AdminDashboard from "../layout/AdminLayout";
import UserList from "../pages/admin/user/Userlist";

const DashboardRoutes = [
    {
    path: "/dashboard",
    children: [
        {
            path: "dashboard", 
            element: <AdminDashboard />,
          },
          {
            path: "userlist", 
            element: <UserList />,
          },
          
    ]
    }
]

export default DashboardRoutes;