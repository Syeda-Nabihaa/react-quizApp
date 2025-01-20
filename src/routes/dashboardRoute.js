import AdminDashboard from "../layout/AdminLayout";
import AddQuestion from "../pages/admin/question/AddQuestion";
import ShowQuestion from "../pages/admin/question/ShowQuestion";

const DashboardRoutes = [
    {
    path: "/dashboard",
    children: [
        {
            path: "dashboard", 
            element: <AdminDashboard />,
          },
          {
            path: "showquestion", 
            element: <ShowQuestion />,
          },
          
          {
            path: "addquestion", 
            element: <AddQuestion />,
          },
          
    ]
    }
]

export default DashboardRoutes;