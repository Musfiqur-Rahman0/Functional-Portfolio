import React from "react";

const Card = () => {
  return (
    <div className="z-10 grid grid-cols-4 gap-3 items-center p-8 rounded-xl border-t border-[#693B93] bg-gradient-to-br to-[#2C1250] from-[#2C1250]">
      <figure>
        <img src="/src/assets/Group 2.png" alt="" />
      </figure>
      <div className="col-span-3">
        <h2 className="text-3xl font-semibold ">CIB on the Mobile</h2>
        <p className="text-sm my-1">
          Take your client onboard seamlessly by our amazing tool of digital
          onboard process.
        </p>
        <button className="px-5 py-1 mt-2 rounded-xl cursor-pointer bg-[#693B93] border-[#693B93]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
