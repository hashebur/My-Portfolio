import React from 'react';

const Education = () => {
    return (
        <div>
            <h2 className='text-center  font-[Inter] text-[32px] font-bold capitalize leading-[123px] '>Education</h2>
            <p className='text-center mb-[50px] px-24 text-[#767676]  font-[Inter] text-[15px] font-normal capitalize leading-6'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>


            <div className='bg-[#FFFFFF]'>
                {/* section 1 */}
                <div className='flex px-[37px]  '>
                    <div className='w-1/2'>
                        <h2 className='font-[Inter] mt-4 mb-4 text-lg leading-[22px] capitalize font-medium'>University Of Toronto</h2>
                        <p className='font-[Inter] text-[15px] leading-[24px] capitalize font-normal text-[#767676]'>Student : <span className='bg-[#FFB400] text-white p-1'>Jan 2013- Dec2021 </span></p>
                    </div>
                    <div className='w-1/2'>
                        <h2 className='font-[Inter] mt-4 mb-4 text-lg leading-[22px] capitalize font-medium'>Certificate Of Web Training </h2>
                        <p className='font-[Inter] text-[15px] leading-[24px] capitalize font-normal text-[#767676]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odit aliquam modi labore earum est omnis nostrum facere laboriosam culpa vitae, neque praesentium ipsam voluptatum?</p>
                    </div>
                </div>

                <div className='h-[1.5px] w-[750px] mt-[30px]   bg-[#F0F0F6]  mb-10 mx-auto'></div>

                {/* section 2 */}
                <div className='flex px-[37px]  '>
                    <div className='w-1/2'>
                        <h2 className='font-[Inter] mt-4 mb-4 text-lg leading-[22px] capitalize font-medium'>Programming Course</h2>
                        <p className='font-[Inter] text-[15px] leading-[24px] capitalize font-normal text-[#767676]'>Student : <span className='bg-[#FFB400] text-white p-1'>Jan 2013- Dec2021 </span></p>
                    </div>
                    <div className='w-1/2'>
                        <h2 className='font-[Inter] mt-4 mb-4 text-lg leading-[22px] capitalize font-medium'>Certificate Of Web Training </h2>
                        <p className='font-[Inter] text-[15px] leading-[24px] capitalize font-normal text-[#767676]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odit aliquam modi labore earum est omnis nostrum facere laboriosam culpa vitae, neque praesentium ipsam voluptatum?</p>
                    </div>
                </div>

                <div className='h-[1.5px] w-[750px] bg-[#F0F0F6]  mt-[30px] mb-10 mx-auto'></div>
                {/* section 3 */}
                <div className='flex px-[37px]  '>
                    <div className='w-1/2'>
                        <h2 className='font-[Inter] mt-4 mb-4 text-lg leading-[22px] capitalize font-medium'>Web developer courses</h2>
                        <p className='font-[Inter] text-[15px] leading-[24px] capitalize font-normal text-[#767676]'>Student : <span className='bg-[#FFB400] text-white p-1'>Jan 2013- Dec2021 </span></p>
                    </div>
                    <div className='w-1/2'>
                        <h2 className='font-[Inter] mt-4 mb-4 text-lg leading-[22px] capitalize font-medium'>Certificate Of Web Training </h2>
                        <p className='font-[Inter] text-[15px] leading-[24px] capitalize font-normal text-[#767676]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio odit aliquam modi labore earum est omnis nostrum facere laboriosam culpa vitae, neque praesentium ipsam voluptatum?</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Education;