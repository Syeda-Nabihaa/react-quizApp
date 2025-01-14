import { adminLoginSchema } from "../config/zodSchema";
import HandleErorrs from "./errorhandle";

async function AdminLoginRecall(formData) {
  const logInData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = adminLoginSchema.safeParse(logInData);
  return HandleErorrs(result);
}
export default AdminLoginRecall;
