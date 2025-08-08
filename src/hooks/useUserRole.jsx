import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import useCurd from "./useCurd";
import { useEffect, useState } from "react";

const useUserRole = () => {
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const email = user?.email;
  const { read } = useCurd(`/users?email=${email}`);

  const { data: response, isPending, isError } = read;

  // const {
  //   data: role,
  //   isLoading,
  //   isError,
  // } = useQuery({
  //   queryKey: ["users", email],
  //   enabled: !!email,
  //   queryFn: async () => {
  //     const res = await axiosSecure.get(`/users?email=${email}`);
  //     return res.data.role;
  //   },
  // });
  useEffect(() => {
    if (response && !isPending) {
      setRole(response.role);
      setLoading(false);
    }
  }, [response, isPending]);

  return { role, roleLoading: loading };
};

export default useUserRole;
