// import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import InputField from "../../components/fields/InputField";
import { useState } from "react";
import AuthService from "../../services/AuthService";
import AdminSignInRecall from "../../validation/action/AdminSignInRecall";
import Loader from "../../components/loader/loader";
import { Outlet } from "react-router-dom";



// import Checkbox from "components/checkbox";

export default function AdminSignIn() {
      const authService = new AuthService();
      const [formData, setFormData] = useState({
          firstname:"",
          lastname:"",
          work:"",
          number:"",
          email: "",
          password: "",
          image:""
        });

        const [formState, setFormState] = useState({
          data: null,
          errors: {},
          isLoading: false,
        });
      
        
        function handleChange(event){
          const {name , value , type , checked} = event.target
          setFormData({
            ...formData,
            [name]:type ==="checkbox"? checked : value,
         
          })
        }

        async function submit(event) {
          event.preventDefault();
          setFormState((prev) => ({ ...prev, isLoading: true }));
      
          const formDataObj = new FormData();
          Object.entries(formData).forEach(([key, value]) => {
            formDataObj.append(key, value);
          });
      
          const result = await AdminSignInRecall(formDataObj);
          if (!result.success) {
            setFormState((prev) => ({
              ...prev,
              isLoading: false,
              errors: result.error,
            }));
          } else {
            try {
              const {firstname,lastname,work,email, password,number } = formData;
              const response = await authService.AdminSignIn({firstname, lastname,work, number, email, password });
              const data = response;
      
              if (data.statusCode === 200) {
                setFormState((prev) => ({ ...prev, isLoading: false, errors: {} }));
                console.log("Login successful:", data);
              } else {
                setFormState((prev) => ({
                  ...prev,
                  isLoading: false,
                  errors: { general: "Login failed. Please try again." },
                }));
              }
            } catch (error) {
              const errorMsg = error.response?.data?.message || error.message || "An unknown error occurred.";
              console.error("Login error:", errorMsg);
      
              setFormState((prev) => ({
                ...prev,
                isLoading: false,
                errors: {
                  email: error.response?.data?.email || [errorMsg],
                  password: error.response?.data?.password || [errorMsg],
                },
              }));
            }
          }
        }

  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
         Admin Sign In
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to sign in!
        </p>
        <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Sign In with Google
          </h5>
        </div>
        <div className="mb-6 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> or </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div>
      
      <form onSubmit={submit}>

        <InputField
          variant="auth"
          extra="mb-3"
          label="FisrtName*"
          placeholder="Enter firstname"
          id="firstname"
          type="text"
          name = "firstname"
          value ={formData.firstname}
          onChange = {handleChange}
          
          />
        {formState.errors.firstname && <p className="text-red-500">{formState.errors.firstname[0]}</p>}

         <InputField
          variant="auth"
          extra="mb-3"
          label="LastName*"
          placeholder="Enter lastname"
          id="lastname"
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange = {handleChange}
        />
       {formState.errors.lastname && <p className="text-red-500">{formState.errors.lastname[0]}</p>}

          <InputField
          variant="auth"
          extra="mb-3"
          label="work"
          placeholder="Enter work"
          id="work"
          type="text"
          name="work"
          value={formData.work}
          onChange = {handleChange}

          />
        {formState.errors.work && <p className="text-red-500">{formState.errors.work[0]}</p>}


          <InputField
          variant="auth"
          extra="mb-3"
          label="work"
          placeholder="Enter number"
          id="number"
          type="number"
          name="number"
          value={formData.number}
          onChange = {handleChange}
        />
        {formState.errors.number && <p className="text-red-500">{formState.errors.number[0]}</p>}



        <InputField
          variant="auth"
          extra="mb-3"
          label="Email*"
          placeholder="mail@simmmple.com"
          id="email"
          type="text"
          name="email"
          value={formData.email}
          onChange = {handleChange}
          />
        {formState.errors.email && <p className="text-red-500">{formState.errors.email[0]}</p>}


        <InputField
          variant="auth"
          extra="mb-3"
          label="Password*"
          placeholder="Min. 8 characters"
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange = {handleChange}
          />
       {formState.errors.password && <p className="text-red-500">{formState.errors.password[0]}</p>}

         <InputField
          variant="auth"
          extra="mb-3"
          label="Image*"
          placeholder="Image"
          id="image"
          type="image"
          name="image"
          value={formData.image}
          onChange = {handleChange}
          />
        {/* Checkbox */}
        <div className="mb-4 flex items-center justify-between px-2">
          <div className="flex items-center">
            {/* <Checkbox /> */}
            <p className="ml-2 text-2xl font-medium text-navy-700 dark:text-white">
              Keep me logged In
            </p>
          </div>
          <a
            className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            href=" "
          >
            Forgot Password?
          </a>
        </div>
        <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          Sign In
        </button>
        {formState.isLoading && <Loader />}
      </form>
        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Not registered yet?
          </span>
          <a
            href=" "
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Create an account
          </a>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
