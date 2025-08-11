import React, { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import useAuth from "@/Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { toast } from "sonner";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function AuthFormBase({ fields, onSubmit, submitText, linkText, linkHref }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showPass, setShowPass] = useState(false);
  const { loginWithGoogle } = useAuth();
  const axiosInstance = useAxiosSecure();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const res = await loginWithGoogle();
      if (res.success) {
        toast.success("Login Successfull");
        navigate("/");
      }

      const user = res?.result?.user;
      const newUser = {
        name: user?.displayName,
        email: user?.email,
        photoURL: user?.photoURL,
        last_loged_in: new Date().toISOString(),
      };

      await axiosInstance.post("/users", newUser);
    } catch (error) {
      console.log(error);
      toast.error("Error", "Failed to login", "error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full max-w-lg mx-auto"
    >
      {fields.map((field) => (
        <div key={field.name} className="space-y-1 relative">
          <Label htmlFor={field.name}>{field.label}</Label>
          <Input
            id={field.name}
            type={
              field.type === "password"
                ? showPass
                  ? "password"
                  : "text"
                : field.type
            }
            {...register(field.name, { required: true })}
          />
          {field.name === "password" && (
            <div className="absolute right-2 top-[45%] cursor-pointer h-1/2 ">
              <button type="button" onClick={() => setShowPass(!showPass)}>
                {showPass ? <FaEye size={25} /> : <FaEyeSlash size={25} />}
              </button>
            </div>
          )}

          {errors[field.name] && (
            <p className="text-sm text-red-500">{field.label} is required.</p>
          )}
        </div>
      ))}

      <Button type="submit" className="w-full">
        {submitText}
      </Button>

      <Button
        type="button"
        variant="outline"
        className="w-full flex items-center gap-2"
        onClick={handleGoogleLogin}
      >
        <FcGoogle className="text-xl" />
        Login with Google
      </Button>

      {linkText && linkHref && (
        <p className="text-sm text-center mt-2">
          <Link to={linkHref} className="text-blue-600 hover:underline">
            {linkText}
          </Link>
        </p>
      )}
    </form>
  );
}

export const AuthForm = memo(AuthFormBase);
