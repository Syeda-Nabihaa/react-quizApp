import { environment } from "../environment/environment";

export const allApiEndPoints = {
    userSignIn : `${environment.baseURL}addUser`,
    adminSignIn: `${environment.baseURL}addAdmin`,
    adminLogin: `${environment.baseURL}loginAdmin`
}