import axios from "axios";
 import { allApiEndPoints } from "./apiUrl";

export class AuthService {
    async UserSignIn(body){
        try{
            const response = await axios.post(allApiEndPoints.userSignIn, body,{
                headers :{
                    "Content-Type" : "application/json",
                },
            });
            return response.data;
        }catch(error){
            const errorMessage = error.response?.data?.message || error.message || "An unknown error occured";
            console.error("SignIn error :", errorMessage);
            throw new Error(errorMessage);
        }
    }

    async AdminSignIn(body){
        try{
            const response = await axios.post(allApiEndPoints.adminSignIn, body,{
                headers :{
                    "Content-Type" : "application/json",
                },
            });
            return response.data;
        }catch(error){
            const errorMessage = error.response?.data?.message || error.message || "An unknown error occured";
            console.error("SignIn error :", errorMessage);
            throw new Error(errorMessage);
        }
    }


    async AdminLogin(body){
        try{
            const response = await axios.post(allApiEndPoints.adminLogin, body,{
                headers :{
                    "Content-Type" : "application/json",
                },
            });
            return response.data;
        }catch(error){
            const errorMessage = error.response?.data?.message || error.message || "An unknown error occured";
            console.error("login error :", errorMessage);
            throw new Error(errorMessage);
        }
    }
}
export default AuthService;