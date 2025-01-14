import { Routes, Route } from "react-router-dom";

import AuthLayout from "./layout/AuthLayout";
import AdminSignIn from "./pages/auth/AdminSignIn";
import UserSignIn from "./pages/auth/UserSignIn";
import AdminLogin from "./pages/auth/AdminLogin";

const App = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<AdminSignIn />} />
        <Route path="/userSignIn" element={<UserSignIn />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
      </Route>
      {/* <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} /> */}
    </Routes>
  );
};

export default App;
