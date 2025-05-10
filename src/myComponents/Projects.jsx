import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { LuMousePointerClick } from "react-icons/lu";

const Projects = ({order}) => {
    
    console.log(order)
    return (
       order  !== "reversed" ? <>
         <div className='grid grid-cols-2  relative items-center mt-10'>
            {/* background circle  */}
            <div className={`h-full w-1/3  absolute bg-radial from-[#763CAC] to-primary blur-[80px] left-[50%]  -top-[5%]  rounded-full z-[5px] `}></div>
            <div className=''>
                <p className='text-xs'>Featured Projects</p>
                <h3 className='text-3xl font-semibold'>Example Project</h3>
        
             <div className='z-20 my-10 relative w-[110%] p-8 rounded-lg bg-[#2B0B3A]/70 backdrop-blur-sm'><p className=''>A web app for visualizing personalized Spotify data. View your
top artists, top tracks, recently played tracks, and detailed audio
information about each track. Create and save new playlists of
recommended tracks based on your existing playlists and more.</p></div>
          
        <div className="flex items-center gap-3">
            <LuMousePointerClick size={25} />
            <LuMousePointerClick size={25} />
        </div>
            </div>
            <div className={`pt-10 pl-10 bg-black rounded-xl z-10 `} >
                <figure>
                    <img src="/src/assets/Screenshot 2022-09-20 at 11.44 1.png" alt="" className='h-full w-full' />
                </figure>
            </div>
        </div>
       </> : <>
        <div className='grid grid-cols-2 gap-8 relative items-center mt-10'>
        <div className={`h-full w-1/3  absolute bg-radial from-[#763CAC] to-primary blur-[80px] left-0  top-[5%]  rounded-full z-[5px] `}></div>
        <div className={`pt-10 pr-10 bg-black rounded-xl z-10 `} >
                <figure>
                    <img src="/src/assets/Screenshot 2022-09-20 at 11.44 1 (1).png" alt="" className='h-full w-full rounded-tr-lg' />
                </figure>
            </div>
            <div className=''>
                <p className='text-xs'>Featured Projects</p>
                <h3 className='text-3xl font-semibold'>Example Project</h3>
        
             <div className='z-20 my-10 relative w-full p-8 rounded-lg bg-[#2B0B3A]/70 backdrop-blur-sm'><p className=''>A web app for visualizing personalized Spotify data. View your
top artists, top tracks, recently played tracks, and detailed audio
information about each track. Create and save new playlists of
recommended tracks based on your existing playlists and more.</p></div>
          
        <div className="flex items-center gap-3">
            <LuMousePointerClick size={25} />
            <LuMousePointerClick size={25} />
        </div>
            </div>
        </div>
       </>
    );
};

export default Projects;