// import { Button } from "@/components/ui/button";
// import React from "react";
// import { MdOutlineArrowOutward } from "react-icons/md";
// import { useLoaderData, useParams } from "react-router-dom";

// const ProjectsDetails = () => {
//   // const { projectId } = useParams();
//   const projects = useLoaderData();
//   console.log(projects);
//   // const singleProjects = projects.find((project) => project.id === projectId);
//   const {
//     type,
//     technologies,
//     purpose,
//     projectImage,
//     id,
//     name,
//     features,
//     detailImages,
//     description,
//     category,
//     live,
//     github,
//     projectGoals,
//     developmentProcess,
//   } = projects;

//   return (
//     <div className="max-w-7xl mx-auto grid grid-cols-2 gap-5 py-16">
//       <div className="col-span-2 space-y-20">
//         <div className="space-y-5">
//           <figure>
//             <img
//               src={projectImage}
//               alt={name}
//               className="w-full  rounded-md border border-gray-200"
//             />
//           </figure>
//           <div className="flex items-center justify-center gap-5">
//             <div className="flex items-center gap-1 bg-secondary  hover:bg-secondary/90 text-foreground px-4 py-2 rounded-md">
//               <a
//                 href={live}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className=" mr-2"
//               >
//                 Preview Live
//               </a>
//               <MdOutlineArrowOutward className="text-2xl " />
//             </div>
//             <div className="flex items-center gap-1 bg-secondary hover:bg-secondary/90 text-foreground px-4 py-2 rounded-md">
//               <a
//                 href={github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className=" mr-2"
//               >
//                 Github
//               </a>
//               <MdOutlineArrowOutward className="text-2xl " />
//             </div>
//           </div>
//           <div className="space-y-3">
//             <h2 className="text-5xl font-semibold">Project-{name}</h2>
//             <p className="text-2xl text-justify">{description}</p>
//             <div>
//               <h4 className="text-3xl font-bold">Key Features</h4>
//               <ul className="mt-3">
//                 {features?.map((f, i) => (
//                   <li
//                     key={i}
//                     class="flex items-center space-x-3 rtl:space-x-reverse"
//                   >
//                     <svg
//                       class="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 16 12"
//                     >
//                       <path
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M1 5.917 5.724 10.5 15 1.5"
//                       />
//                     </svg>
//                     <span className="text-lg">{f}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="space-y-3">
//               <h4 className="text-3xl font-bold">Purpose of this project </h4>
//               <p className="text-xl max-w-[80%]">
//                 {purpose} And {projectGoals}
//               </p>
//             </div>
//             <div className="space-y-3">
//               <h4 className="text-3xl font-bold">Deployment process</h4>
//               <p className="text-xl max-w-[60%]">{developmentProcess}</p>
//             </div>
//             <div className=" ">
//               <h2 className="text-3xl font-semibold">Tech Stack</h2>
//               <div className="flex  gap-4 mt-4">
//                 {technologies?.map((tech, index) => (
//                   <Button
//                     key={index}
//                     dis
//                     className="cursor-pointer bg-secondary text-foreground hover:bg-secondary/90"
//                   >
//                     {tech}
//                   </Button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="space-y-5 ">
//           <h2 className="text-4xl font-semibold ">Project gallery</h2>
//           <div className="grid grid-cols-3 gap-4 ">
//             {detailImages?.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 className="h-[200px] border border-gray-200 w-full object-cover rounded-lg"
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectsDetails;
