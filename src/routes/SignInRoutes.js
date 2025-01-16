
// import Admin from "../layout2/admin";
import AdminLogin from "../pages/auth/AdminLogin";
import AdminSignIn from "../pages/auth/AdminSignIn";
import UserSignIn from "../pages/auth/UserSignIn";

const SignInRoutes = [
  {
    path: "/",
    children: [
      {
        path: "/", 
        element: <AdminLogin />,
      },
      {
        path: "usersignin", 
        element: <UserSignIn />,
      },
      {
        path: "adminsignin", 
        element: <AdminSignIn />,
      },
    
    ],
  },
];

export default SignInRoutes;
