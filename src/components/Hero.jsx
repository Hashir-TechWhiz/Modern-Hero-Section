import React from 'react'

const Hero = () => {
    return (
        <div className='isolate'>
            <div className='absolute inset-0 -z-10'>
                <div className='absolute top-0 -left-1/4 w-1/2 h-1/2 bg-amber-400 dark:amber-500 rounded-full blur-3xl opacity-20' />
            </div>

            <div className='container mx-auto px-6 py-20 md:py-24 lg:py-28 xl:py-32'>
                <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16'>
                    <div className='flex-1 space-y-6 lg:space-7'>

                        <div className='space-y-4 lg:space-y-5'>
                            <div className='flex items-center'>

                                <span className='inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-900 text-amber-400 mr-2'>
                                    New
                                </span>

                                <h1 className='inline-block px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-neutral-900 text-amber-400 font-medium text-sm backdrop-blur-sm border border-neutral-800'>
                                    <i className='bx bx-trending-up mr-1'></i> Next Gen Design System
                                </h1>
                            </div>

                            <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white transition-colors duration-500'>
                                <span className='block mb-1'>
                                    Design
                                </span>
                                <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600'>
                                    Without Limits
                                </span>
                            </h1>
                            <p className='text-base lg:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl font-light transition-colors duration-500'>
                                Elevate your design process with a design system that is truly designed for the future. With a modern design, beautiful color schemes, and a wide range of components, you can create a design that is truly unique.
                            </p>

                            <div className='flex gap-3 items-center'>
                                <div className='h-px bg-neutral-300 dark:bg-neutral-700 w-12 transition-colors duration-500' />
                                <p className='uppercase text-xs tracking-widest text-neutral-500 dark:text-neutral-400 font-medium transition-colors duration-500'>
                                    Transition Seamlessly
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-wrap gap-3 lg:gap-4'>

                            <button className='flex items-center px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-900 hover:bg-black text-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-neutral-900 font-medium shadow-lg hover:shadow-neutral900/20 dark:hover:shadow-amber-500/20 cursor-pointer transition group'>
                                <i className='bx bx-code-alt mr-2 lg:mr-3 text-lg lg:text-xl group-hover:rotate-12 transition-transform'></i>
                                <span>Start Coding</span>
                            </button>

                            <button className='flex items-center px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white font-medium cursor-pointer transition group'>
                                <i className='bx bx-book-open mr-2 lg:mr-3 text-lg lg:text-xl opacity-70 group-hover:opacity-100 transition-opacity'></i>
                                <span>Documentation</span>
                            </button>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
