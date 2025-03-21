import React from 'react'

const RightHeroSection = () => {
    return (
        <div className='flex-1 w-full'>
            <div className='relative'>
                <div className='absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-indigo-900 rounded-2xl blur-xl opacity-50 animate-pulse' />

                <div className='relative bg-white dark:bg-neutral-900 p-4 lg:p-5 xl:p-6 rounded-2xl shadow-2xl border border-neutral dark:border-neutral-800'>
                    <div className='flex items-center justify-between mb-3 lg:mb-4'>

                        <div className='flex items-center gap-2'>
                            <span className='w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-red-500'></span>
                            <span className='w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-amber-500'></span>
                            <span className='w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-green-500'></span>
                        </div>

                        <h2 className='text-xs text-neutral-500 dark:text-neutral-400'>
                            theme-toggle.jsx
                        </h2>

                    </div>

                    <div className='relative h-56 md:h-64 lg:h-60 xl:h-72 rounded-lg bg-neutral-100 dark:bg-neutral-800 overflow-hidden'>
                        <img
                            src='/code-light.png'
                            alt='light-mode snippet'
                            className='w-full h-full object-cover object-left-top dark:hidden'
                        />

                        <img
                            src='/code-dark.png'
                            alt='light-mode snippet'
                            className='w-full h-full object-cover object-left-top dark:block'
                        />

                        <div className='absolute bottom-4 right-4'>
                            <div className='w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-amber-500 to-indigo-900 flex items-center justify-center text-white shadow-lg animate-pulse'>
                                <i className='bx bx-brightness-half text-xl lg:text-2xl'></i>
                            </div>
                        </div>
                    </div>

                    <div className='mt-3 lg:mt-4 flex justify-between items-center'>

                        <div className='flex gap-2'>
                            <span className='flex items-center px-2.5 py-1 lg:px-3 rounded-full bg-neutral-900 text-amber-400 text-xs font-medium'>
                                <i className='bx bxl-tailwind-css mr-1'></i> Tailwind v4
                            </span>

                            <span className='flex items-center px-2.5 py-1 lg:px-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-indigo-900 dark:text-indigo-400 border border-neutral-200 dark:border-neutral-700 text-xs font-medium'>
                                <i className='bx bxl-react mr-1'></i> React
                            </span>
                        </div>

                        <button className='flex items-center justify-center rounded-full w-8 h-8 lg:h-9 lg:w-9 xl:w-10 xl:h-10 bg-amber-500 text-neutral-900 hover:bg-amber-600 transition cursor-pointer'>
                            <i className='bx bx-copy text-sm'></i>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RightHeroSection;
