import React from 'react'

const data = [
    "NPTEL Excellence Awards “Data Structure And Algorithms Using Java” .",
    "Introduction to Network (Received LOM), Cybersecurity Essentials and Programming Essentials",
    "Silver Badge and 2 Star on Codechef",
    "Secured 3 rd. position in college Tech-fest Coding",
    "Secured 3 rd. position in college Tech-fest Web Developement",
    "Solve 1000+ question on CodeChef + GFG + HackerRank + Leetcode",
]
const Achievement = () => {
    return (
        <div>
            <div className='text-2xl font-bold flex'>Achievements</div>
            <div class="border-t-2 border-black flex-grow font-bold text-2xl my-1"></div>
            {data.map(( data, index) => (
                <ul className='list-disc text-justify pl-6 text-sm'>
                    <li >{data}</li>
                </ul>
            ))}

        </div>
    )
}

export default Achievement
