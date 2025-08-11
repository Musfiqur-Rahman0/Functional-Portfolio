import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import Swal from "sweetalert2";

const useCurd = (endpoint, { readEnabled = true } = {}) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const read = useQuery({
    queryKey: [endpoint],
    queryFn: async () => {
      const res = await axiosSecure.get(endpoint);
      return res.data;
    },
  });

  const create = useMutation({
    mutationFn: async (newItem) => {
      const res = await axiosSecure.post(endpoint, newItem);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([endpoint]);
    },
  });

  const updateWithPut = useMutation({
    mutationFn: async ({ id, updatedItems }) => {
      const res = await axiosSecure.put(`${endpoint}/${id}`, updatedItems);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([endpoint]);
    },
  });

  const updateWithPatch = useMutation({
    mutationFn: async ({ id, updatedItems }) => {
      const res = await axiosSecure.patch(`${endpoint}/${id}`, updatedItems);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([endpoint]);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const res = await axiosSecure.delete(`${endpoint}/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries([endpoint]);
    },
  });

  return { create, read, updateWithPut, deleteMutation, updateWithPatch };
};

export default useCurd;
