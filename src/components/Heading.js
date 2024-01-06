import React from 'react'

const Heading = () => {
    return (
        <div className='flex flex-col pt-3  gap-1'>
            <div className='text-3xl font-bold'>Vikas Kumar Yadav</div>
            <div class="flex flex-row items-center justify-center">
                <div class="flex-shrink-0">vikasdbg453@gmail.com</div>
                <div class="border-l h-4 mx-3"></div>
                <div class="flex-shrink-0">+91 9798525268</div>
            </div>
            <div className='flex flex-row gap-3 items-center justify-center underline'>
                <div>Github</div>
                <div class="border-l h-4 mx-3"></div>
                <div>LeetCode</div>
                <div class="border-l h-4 mx-3"></div>
                <div>Linkedln</div>
                <div class="border-l h-4 mx-3"></div>
                <div>GFG</div>
            </div>
        </div>
    )
}

export default Heading
