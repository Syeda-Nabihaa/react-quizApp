import { addRecallSchema } from "../config/zodSchema";
import HandleError from "./errorhandle";

async function AdminSignInRecall(formData) {
    const SignInData = {
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        email: formData.get("email"),
        password: formData.get("password"),
        work: formData.get("work")
    };

    const result = addRecallSchema.safeParse(SignInData);
    return HandleError(result);
    
}
export default AdminSignInRecall;