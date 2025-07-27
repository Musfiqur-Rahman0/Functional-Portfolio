import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
// import signupAni from "../../../../src/assets/Animations/User Profile.json";
import Lottie from "lottie-react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import useAuth from "@/hooks/useAuth";
import { AuthForm } from "../authForm/AuthForm";
import { Card } from "@/components/ui/card";
import Swal from "sweetalert2";

const Signup = () => {
  const { signUp, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const axiosIntence = useAxiosSecure();

  const handleSignup = async (data) => {
    const { email, password, name } = data;

    const file = data.photo[0];

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        formData
      );
      const photoURL = res.data.data.display_url;
      const result = await signUp(email, password, name, photoURL);
      if (result.success) {
        navigate("/login");
        Swal.fire("Sucess", "Registation Successfull", "success");
      }

      const newUser = {
        name,
        email,
        photoURL,
        last_loged_in: new Date().toISOString(),
      };
      await axiosIntence.post("/users", newUser);
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="flex flex-col items-center justify-center min-h-1/2 w-1/2 px-4 py-3">
        <h2 className="text-center mb-7 text-2xl font-bold">
          MusfiqurRahman's Hub
        </h2>
        <AuthForm
          fields={[
            { name: "name", label: "Name", type: "text" },
            { name: "email", label: "Email", type: "email" },
            { name: "password", label: "Password", type: "password" },
            { name: "photo", label: "Profile Photo", type: "file" },
          ]}
          submitText="Sign Up"
          onSubmit={handleSignup}
          linkText="Already have an account? Login"
          linkHref="/login"
        />
      </Card>
    </div>
  );
};

export default Signup;
