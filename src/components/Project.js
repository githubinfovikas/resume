import React from 'react'
const project = {

    markMyAttendance: [
        {
            name: "Junoon : Arts & cultural club, MIT Muzaffarpur",
            objective: "The objective of the project is to create a web application which allows a user to register differnet culture event.",
            techStack: "MERN Stack( MongoDB, ExpressJs, ReactJs, NodeJs)"

        },
        {
            name: "Mark My Attendence , Bihar Government Website.",
            objective: "This platform offers a comprehensive attendance management system, showcasing individual attendance percentages. Users can effortlessly download attendance PDFs, verify attendance percentages and etc.",
            techStack: "MERN Stack, Material Ui, PrimeReact, Tailwind."

        },
        {
            name: "Wether Tracking website.",
            techStack: " JavaScript, React.js, Node.js, mongodb"
        },
    ]
}

console.log(project)
const Project = () => {
    return (
        <div>
            <div className='text-2xl font-bold flex pt-3'>Project</div>
            <div class="border-t-2 border-black flex-grow font-bold text-2xl my-1"></div>
            {project.markMyAttendance.map((project, index) => (
                <div className='pt-3'>
                    <div className='flex flex-col text-left pl-2'>
                        <div className='text-1xl font-bold text-justify'>{project.name}</div>
                        <div className='text-sm text-justify'>{project.objective}</div>
                        <div className='flex gap-1 flex-row items-center text-justify'>
                            <div className='text-1xl font-bold text-justify'>Tech Stack :</div>
                            <div className='text-sm text-justify pt-0.5'>{project.techStack}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Project
