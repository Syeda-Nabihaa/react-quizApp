import routeHelpers from "../helpers/RouteHelpers";
import AdminDashboard from "../layout/AdminLayout";
import AddQuestion from "../pages/admin/question/AddQuestion";
import ShowQuestion from "../pages/admin/question/ShowQuestion";
import UpdateQuestion from "../pages/admin/question/UpdateQuestion";

const DashboardRoutes = [
    {
    path: routeHelpers.admin.inRoutesFile,
    children: [
        {
            path: "", 
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
          {
            path: "updatequestion", 
            element: <UpdateQuestion />,
          },
          
    ]
    }
]

export default DashboardRoutes;