import { environment } from "../environment/environment";

export const allApiEndPoints = {
    userSignIn : `${environment.baseURL}addUser`,
    adminSignIn: `${environment.baseURL}addAdmin`,
    loginUser: `${environment.baseURL}loginUser`,
    showQuestion: `${environment.baseURL}admin/showQuestion`,
    addQuestion: `${environment.baseURL}admin/addQuestion`,
   
}