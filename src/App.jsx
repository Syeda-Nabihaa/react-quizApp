import { Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import SignInRoutes from "./routes/SignInRoutes";
import AdminDashboard from "./layout/AdminLayout";
import DashboardRoutes from "./routes/dashboardRoute";

const App = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        {SignInRoutes.map((route, index) => (
          <Route key={index} path={route.path}>
            {route.children.map((child, childIndex) => (
              <Route
                key={childIndex}
                path={child.path}
                element={child.element}
              />
            ))}
          </Route>
        ))}
      </Route>

      <Route element={<AdminDashboard />}>
        {DashboardRoutes.map((route, index) => (
          <Route key={index} path={route.path}>
            {route.children.map((child, childIndex) => (
              <Route
                key={childIndex}
                path={child.path}
                element={child.element}
              />
            ))}
          </Route>
        ))}
      </Route>
    </Routes>
  );
};

export default App;
