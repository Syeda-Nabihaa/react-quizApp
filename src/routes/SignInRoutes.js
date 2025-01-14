import AdminSignIn from "../pages/auth/AdminSignIn";
import UserSignIn from "../pages/auth/UserSignIn";

const SignInRoutes = [
  {
    path: "/",
    element: <AdminSignIn />, // Default route for "/auth"
    children: [
      {
        path: "register", // Nested path "/auth/register"
        element: <UserSignIn />,
      },
    ],
  },
];

export default SignInRoutes;
