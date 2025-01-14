import { useState } from "react";
import InputField from "../../components/fields/InputField";
import AuthService from "../../services/AuthService";
import AdminLoginRecall from "../../validation/action/AdminLoginRecall";
import Loader from "../../components/loader/loader";

export default function AdminLogin() {
  const authService = new AuthService();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  

  const [formState, setFormState] = useState({
    data: null,
    errors: {},
    isLoading: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  async function submit(event) {
    event.preventDefault();
    setFormState((prev) => ({ ...prev, isLoading: true }));

    const formDataObj = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value);
    });

    const result = await AdminLoginRecall(formDataObj);
    if (!result.success) {
      setFormState((prev) => ({
        ...prev,
        isLoading: false,
        errors: result.error,
      }));
    } else {
      try {
        const { email, password } = formData;
        const response = await authService.AdminLogin({ email, password });
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
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">Admin Login</h4>
        <p className="mb-9 ml-1 text-base text-gray-600">Enter your email and password to log in!</p>
        <form onSubmit={submit}>
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
          {formState.errors.email && <p className="text-red-500">{formState.errors.email[0]}</p>}
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
          {formState.errors.password && <p className="text-red-500">{formState.errors.password[0]}</p>}
          <button
            type="submit"
            disabled={formState.isLoading}
            className={`linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 ${
              formState.isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-brand-600 active:bg-brand-700"
            }`}
          >
           Log In
          </button>
          {formState.isLoading && <Loader />}
          {formState.errors.general && <p className="text-red-500 mt-3">{formState.errors.general}</p>}
        </form>
      </div>
    </div>
  );
}

