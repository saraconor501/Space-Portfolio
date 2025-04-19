import React from 'react';
import ProjectCard from '../sub/ProjectCard';

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20 flex-wrap' id='projects'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            My Projects
        </h1>
       <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10 '>
            <ProjectCard 
            src='/future-movies.png'
             title='Future Movies' 
             description='Future Movies is a website for watching movies, TV series, and cartoons.'/>
             <ProjectCard 
            src='/parallax.png'
             title='Parallax' 
             description='This is an amazing website using parallax effect and other effects.'/>
             <ProjectCard 
            src='/space-portfolio.png'
             title='Space Portfolio'
             description='This is my personal portfolio website, where I showcase my projects and skills.'/> 
             {/* <ProjectCard 
            src='/rick-morty.png'
             title='Rick and Morty' 
             description='This is a website dedicated to the Rick and Morty universe.'/> */}
        </div> 
    </div>
  )
}

export default Projects