
import { Routes, Route } from "react-router-dom";

import AuthLayout from "./layout/AuthLayout";
import SignInRoutes from "./routes/SignInRoutes";

const App = () => {
  return (
    <Routes>
      <Route  element={<AuthLayout />}>
        {/* <Route path="" element={<AdminSignIn />} />
        <Route path="register" element={<UserSignIn />} /> */}
        {SignInRoutes?.children?.map((x,index)=>{
          <Route key={index} path={x.path} element={x.element} />
        })}
      </Route>
    </Routes>

  );
};

export default App;
