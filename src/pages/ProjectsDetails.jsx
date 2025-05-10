import { Button } from '@/components/ui/button';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProjectsDetails = () => {

    const {projectId} = useParams();
    const projects =  useLoaderData();
    const singleProjects = projects.find(project => project.id === projectId);
    const  {type, technologies, purpose, projectImage, id, name, features, detailImages, description, category, } = singleProjects

    return (
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-5 py-16">
      
      <div className="col-span-2 space-y-5">
        <figure>
          <img
            src={singleProjects.projectImage}
            alt={singleProjects.name}
            className="w-full h-[500px] rounded-md border border-gray-200"
          />
        </figure>
        <h2 className="text-5xl font-semibold">Project-{singleProjects.name}</h2>
        <p className='text-2xl text-justify'>{singleProjects.description}</p>
        <div className=" rounded-lg mt-5">
          <h2 className="text-5xl font-semibold">Tech Stack</h2>
          <div className="flex  gap-4 mt-4">
            {/* {speaker_info.map((speaker, i) => (
              <SpeakerInfo key={i} info={speaker} />
            ))} */}
            {
                technologies.map((tech, index)=> <Button key={index} className="cursor-pointer text-lg">{tech}</Button >)
            }
          </div>
        </div>
        <div className="space-y-5 p-5">
          <h2 className="text-4xl font-semibold ">Project gallery</h2>
          <div className="grid grid-cols-3 gap-4 ">
            {detailImages.map((image, index)=> <img key={index} src={image} className="h-[200px] border border-gray-200 w-full object-cover rounded-lg"/>)}
          </div>
        </div>
      </div>
  
    </div>
    );
};

export default ProjectsDetails;