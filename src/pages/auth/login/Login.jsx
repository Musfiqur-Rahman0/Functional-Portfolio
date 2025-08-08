import React from "react";
import { AuthForm } from "../authForm/AuthForm";
import { Card } from "@/components/ui/card";
import { data, useNavigate } from "react-router";
import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleLogin = async (data) => {
    const { email, password } = data;
    const res = await login(email, password);

    if (res.success) {
      navigate("/");
      Swal.fire(
        "Login Sucessfull",
        "You have successfully loged in",
        "success"
      );
    } else {
      Swal.fire("Error", "Some error happened ", "error");
    }
    const userData = res?.result?.user;
    if (userData) {
      await axiosSecure.post("/users", { email: userData?.email });
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center px-3 lg:px-0">
      <Card className="flex flex-col items-center justify-center min-h-1/2 w-full lg:w-1/2 px-4 py-3">
        <h2 className="text-center mb-7 text-2xl font-bold">
          MusfiqurRahman's Hub
        </h2>
        <AuthForm
          fields={[
            { name: "email", label: "Email", type: "email" },
            { name: "password", label: "Password", type: "password" },
          ]}
          submitText="Login"
          onSubmit={handleLogin}
          linkText="Don't have an account? Sign up"
          linkHref="/signup"
        />
      </Card>
    </div>
  );
};

export default Login;
