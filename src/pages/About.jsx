import { aboutMe } from "@/consents/data";
import { AuthContext } from "@/Context/AuthContext";
import Comments from "@/myComponents/Comments";
import React from "react";


const About = () => {

  

  
    return <div className="flex flex-col  justify-center pt-12 gap-10">
    <h2 className="text-5xl font-bold text-center mb-10 text-primary">About me!</h2>
   
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    <p>{aboutMe}</p>
    <figure className="bg-gray-100 rounded-lg">
      {/* <img src="" alt="noImg" /> */}
    </figure>
  </div>

  <div>
    <h2 className="text-5xl font-bold text-center mt-10 text-primary">Reviews</h2>
  </div>

   <Comments/>
  </div>;
  
  

 
};

export default About;
