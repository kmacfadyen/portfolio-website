import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
        <ProjectCard
          src="/NextWebsite.png"
          title="Advanced Web Applications"
          // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          description="Designed and developed a secure web application with authentication, enhancing data protection. Built robust API endpoints for article management."
        />
        <ProjectCard
          src="/CardImage.png"
          title="OpenAI Web Application"
          // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          description="Developed a dynamic React application with interactive features, enhancing user engagement across web and mobile platforms."

        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Advanced State Management"
          // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          description="Engineered a React web page with multiple tabs using React-Redux for real-time updates. Enhanced user interactions and control with Node.js and Axios."
        />
        </div>
    </div>
  )
}

export default Projects