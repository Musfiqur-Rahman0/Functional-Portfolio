import React, { useEffect, useState } from "react";
import useCurd from "./useCurd";
import Error from "@/pages/error/Error";
import { Loader } from "lucide-react";

const usePaginate = (endpoint, initialPage = 1, limit = 10) => {
  const [page, setPage] = useState(initialPage);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(null);
  const [totalPage, setTotalPage] = useState();

  const { read } = useCurd(`${endpoint}?page=${initialPage}&limit=${limit}`);
  const { data: response, isPending, isError } = read;

  useEffect(() => {
    if (response) {
      setData(response.data);
      setPage(response.page);
      setTotal(response.total);
      setTotalPage(response.totalPages);
    }
  }, [response]);

  if (isPending) {
    return <Loader />;
  }
  if (isError) {
    return <Error />;
  }

  return {
    data,
    total,
    page,
    totalPage,
  };
};

export default usePaginate;
