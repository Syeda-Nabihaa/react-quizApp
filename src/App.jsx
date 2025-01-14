
import { Routes, Route } from "react-router-dom";
import AdminSignIn from "./pages/auth/AdminSignIn";
import UserSignIn from "./pages/auth/UserSignIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminSignIn />}>
        <Route path="register" element={<UserSignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
