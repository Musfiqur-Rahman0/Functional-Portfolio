import React, { useEffect, useState } from "react";
import useCurd from "./useCurd";

const useSkillsStats = (pkgName) => {
  const [stats, setStats] = useState({
    dailyDownloads: null,
    monthlyDownloads: null,
    stars: null,
  });

  const { read } = useCurd(`/stats?${pkgName}`);
  const { data: response, isPending, isError } = read;
  useEffect(() => {
    if (response) {
      setStats(response);
    }
  }, [response]);

  return [stats, setStats];
};

export default useSkillsStats;
