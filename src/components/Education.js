import React from 'react'

const Education = () => {
    return (
        <div>
            <div>
                <div className='text-2xl font-bold flex'>Education</div>
                <div class="border-t-2 border-black flex-grow font-bold text-2xl my-1"></div>
                <div>
                    <div className='pb-3'>
                        <div className='grid lg:grid-cols-2 sm:grid-cols-1 justify-between'>
                            <div className='text-justify text-1xl font-bold'>Muzaffarpur Institute of Technology</div>
                            <div className='text-justify text-1xl font-bold'>Muzaffarpur, Bihar, India</div>
                        </div>
                        <div className='leading-tight'>
                            <div className=' text-left'>B.Tech in Information Technology, 2020-24</div>
                            <div className='text-left font-bold pl-4 list-disc'>CGPA : 7.89</div>
                        </div>
                    </div>

                    <div className='pb-3'>
                        <div className='grid lg:grid-cols-2 sm:grid-cols-1 justify-between'>
                            <div className='text-justify text-1xl font-bold'>Kunwar Singh College Laheriasarai, Darbhanga</div>
                            <div className='text-justify text-1xl font-bold'>Darbhanga, Bihar , India</div>
                        </div>
                        <div className='leading-tight'>
                            <div className=' text-left'>Higher Secondary Education 2017 - 2019</div>
                            <div className='text-left font-bold pl-4 list-disc'>Perecentage : 67%</div>
                        </div>
                    </div>
                    <div className='pb-3'>
                        <div className='grid lg:grid-cols-2 sm:grid-cols-1 justify-between'>
                            <div className='text-justify text-1xl font-bold'>Maunbehat High School</div>
                            <div className='text-justify text-1xl font-bold'>Darbhanga, Bihar , India</div>
                        </div>
                        <div className='leading-tight'>
                            <div className=' text-left'>Secondary School 2015 - 2017</div>
                            <div className='text-left font-bold pl-4 list-disc'>Perecentage : 72%</div>
                        </div>
                    </div>
                    <div className='text-justify text-1xl font-bold pb-3'>Jee Main Percentile : 92</div>
                </div>

            </div>



        </div>
    )
}

export default Education
