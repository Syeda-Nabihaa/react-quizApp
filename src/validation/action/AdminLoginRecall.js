import { adminLoginSchema } from "../config/zodSchema";
import HandleError from "./errorhandle";

async function AdminLoginRecall(formData) {
    const logInData = {
        email: formData.get("email"),
        password: formData.get("password"),
        
    };

    const result = adminLoginSchema.safeParse(logInData);
    return HandleError(result);
    
}
export default AdminLoginRecall;