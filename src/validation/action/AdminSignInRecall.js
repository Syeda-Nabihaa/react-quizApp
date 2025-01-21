// import { number } from "zod";
import { AdminSignInSchema } from "../config/zodSchema";
import HandleError from "./errorhandle";

async function AdminSignInRecall(formData) {
    const SignInData = {
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        email: formData.get("email"),
        password: formData.get("password"),
        number:formData.get("number"),
        work: formData.get("work")
    };

    const result = AdminSignInSchema.safeParse(SignInData);
    return HandleError(result);
    
}
export default AdminSignInRecall;