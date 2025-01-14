// import InputField from "components/fields/InputField";

import { useState } from "react";
import InputField from "../../components/fields/InputField";
import AuthService from "../../services/AuthService";
// import Checkbox from "components/checkbox";
import AdminLoginRecall from "../../validation/action/AdminLoginRecall";

export default function AdminLogin() {
  const authService = new AuthService();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
 
  const [formState , setFormState] = useState({
    data : null,
    errors:{},
    isLoading:false
  })
  // const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }
  async function submit(event) {
    event.preventDefault();


    const formDataObj = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value);
    });
   
     const result = await AdminLoginRecall(formDataObj);
     console.log(result);
     
     if(!result.success){
      setFormState((prev)=>({
        ...prev,
        isLoading:false,
        errors:result.error,
      }))
      
     }else{
      try{
        const {email , password} = formData;
        const response = await authService.AdminLogin({
          email,
          password,
        })
        const data = response;
        console.log(data);

        if(data.statusCode === 200){
          setFormState((prev)=>({...prev, isLoading: false, errors:{} }));
        
        }else{
          // setErrors(response.statusCode)
        }
        console.log("response", data);
        
        
      }catch(error){
        console.log(Object.values(error));

        const errorMsg = error.response?.data?.message || error.message || "An unkonow error occured";

        console.error("login error : ", errorMsg);

        setFormState((prev)=>({
          ...prev,
          isLoading:false,
          errors:{
            email :[error.message.email],
            password : [error.message.password],
          }
        }))
        
        
      }
     }
     console.log(formState);

  }
  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Admin Login
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to log in!
        </p>

        <div className="mb-6 flex items-center  gap-3"></div>
        <form onSubmit={submit}>
          {/* Email */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Email*"
            placeholder="mail@simmmple.com"
            id="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
          {/* {formState.errors.email && <p className="text-red-500">{formState.errors.email[0]}</p>} */}
          {/* Password */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Password*"
            placeholder="Min. 8 characters"
            value={formData.password}
            onChange={handleChange}
            id="password"
            type="password"
            name="password"
          />
          {/* {formState.errors.password && (
            <p className="text-red-500">{formState.errors.password[0]}</p>
          )} */}

          {/* Checkbox */}

          <button
            type="submit"
            className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
