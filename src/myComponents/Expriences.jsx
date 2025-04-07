import { experienceData } from "@/consents/data";
import Exprience from "./Exprience";

const Expriences = ({}) => {
  return (
    <div className="flex flex-col gap-8  mt-5">
      {experienceData.map((data, index) => (
        <Exprience data={data} index={index} key={index} />
      ))}
    </div>
  );
};

export default Expriences;
