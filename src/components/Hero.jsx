import React from 'react'
import LeftHeroSection from './LeftHeroSection'
import RightHeroSection from './RightHeroSection'

const Hero = () => {
    return (
        <div className='isolate'>
            <div className='absolute inset-0 -z-10'>
                <div className='absolute top-0 -left-1/4 w-1/2 h-1/2 bg-amber-400 dark:amber-500 rounded-full blur-3xl opacity-20' />
            </div>

            <div className='container mx-auto px-6 py-20 md:py-24 lg:py-28 xl:py-32'>
                <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16'>

                    {/* Left Section */}
                    <LeftHeroSection />

                    {/* Right Section */}
                    <RightHeroSection />

                </div>
            </div>

            <div className='hidden md:block absolute bottom-8 left-8 lg:bottom-10 lg:left-10 animate-bounce'>
                <div className='flex items-center bg-neutral-900 text-white px-2.5 py-1.5 rounded-lg text-xs lg:text-sm shadow-lg'>
                    <i className='bx bx-check-circle mr-1 text-amber-500'></i>Responsive
                </div>
            </div>

            <div className='hidden md:block absolute top-8 right-[15%] lg:top-20 lg:right-[20%] animate-bounce delay-300'>
                <div className='flex items-center bg-neutral-900 text-white px-2.5 py-1.5 rounded-lg text-xs lg:text-sm shadow-lg'>
                    <i className='bx bx-check-circle mr-1 text-amber-500'></i>Accessible
                </div>
            </div>
        </div>
    )
}

export default Hero;
