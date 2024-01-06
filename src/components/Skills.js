import React from 'react'


const education = [
    {
        programingLanguage: "Muzaffarpur Institute of Technology, Muzaffarpur, Bihar, India", // Missing colon after the object key
        webTechnology: "MERN Technology, Tailwind css, Prime React, Material UI",
        database: "Mongodb, SQL, MySQL.",
        tools: "Git, Canva, MS office, Windows, Linux.",
        softSkills: "Team Coordination, Leadership, Quick Learner, Communication, Problem Solving.",
    }
]



console.log(education)

const Skills = () => {
    return (
        <div>
            <div className='text-2xl font-bold flex'>Skills</div>
            <div class="border-t-2 border-black flex-grow font-bold text-2xl my-1"></div>
            <div className='text-left pl-2'>
                {education.map((education, index) => (
                    <div key={index}>
                        <div className='flex gap-1 items-center'>
                            <div className='text-1xl font-bold'>Programming Languages:</div>
                            <div className='text-sm'>{education.programingLanguage}</div>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <div className='text-1xl font-bold'>Databases : </div>
                            <div className='text-sm'>{education.database}</div>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <div className='text-1xl font-bold'>Tool : </div>
                            <div className='text-sm' >{education.tools}</div>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <div className='text-1xl font-bold'>Soft Skills : </div>
                            <div className='text-sm' >{education.softSkills}</div>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default Skills
