import { Button } from "@/components/ui/button";
import useCurd from "@/hooks/useCurd";
import SharedTable from "@/pages/shared/SharedTable";

import React from "react";

const ManageSkills = () => {
  const { read } = useCurd("/skills");

  const { data, isPending, isError } = read;

  const headItems = ["#", "Logo", "Package Name", "Repo owner", "Actions"];

  const bodyItems = data?.map((item, index) => ({
    cells: [
      index + 1,
      <figure>
        <img
          src={item["Logo"]}
          alt={item["Package Name"]}
          height={"50"}
          width={"50"}
        />
      </figure>,
      item["Package Name"],
      item["Repo Owner"] + "/" + item["Repo Name"],
      <div className="flex gap-2">
        <Button
          size="sm"

          // onClick={() => handleApprove(item)}
          // disabled={approveMutation.isPending}
        >
          Update
        </Button>
        <Button
          variant="destructive"
          size="sm"
          // onClick={() => handleReject(item)}
          // disabled={approveMutation.isPending}
        >
          Remove
        </Button>
      </div>,
    ],
  }));

  if (isPending) return <p>Loading</p>;
  return (
    <div>
      <h2>Manage all Skills {data.length}</h2>

      <SharedTable headItems={headItems} bodyItems={bodyItems} />
    </div>
  );
};

export default ManageSkills;
