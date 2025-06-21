import React from "react";

const Exprience = ({ data, index }) => {
  const { company, date, position, description } = data;
  const Icon = data.icon;

  return (
    <div>
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-5">
          <Icon size={40} color={index === 2 ? "#5BADFF" : ""} />
          <h3 className="text-xl font-semibold">
            {position} at {company}
          </h3>
        </div>
        <p className="text-gray-400 text-sm">{date}</p>
      </div>
      <p className="mt-2 ">{description}</p>
    </div>
  );
};

export default Exprience;

// company
// :
// "Meta"
// date
// :
// "Jan 2017 - Oct 2018"
// description
// :
// "At Meta, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability."
// icon
// :
// ƒ FaMeta(props)
// position
// :
// "Software Engineer"
