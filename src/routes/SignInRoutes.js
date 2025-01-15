import AdminSignIn from "../pages/auth/AdminSignIn";
import UserSignIn from "../pages/auth/UserSignIn";

const SignInRoutes = [
  {
    path: "/",
     // Default route for "/auth"
    children: [
      {
        path: "/", // Nested path "/auth/register"
        element: <UserSignIn />,
      },
      {
        path: "/adminsignin", // Nested path "/auth/register"
        element: <AdminSignIn />,
      },
    ],
  },
];

export default SignInRoutes;
