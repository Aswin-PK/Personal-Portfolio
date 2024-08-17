import React from 'react'

function About() {
  return (
      <div name="about" className='h-[25rem] w-full bg-slate-200 flex items-center justify-center text-center px-[2rem] md:px-[6rem] 2xl:px-[10rem]'>
          <div className="flex flex-col gap-3">
              <span className='text-gray-400 text-2xl md:text-4xl'>About Me</span>
              <div>
                  <p className='text-gray-700 max-w-full md:max-w-[70rem] text-sm md:text-md lg:text-lg 2xl:text-xl mt-2 md:mt-6 mb-1 md:mb-2 text-justify'>
                      A passionate Frontend Developer with expertise in Vue.js, React.js, and Nuxt.js, I love creating dynamic, responsive web experiences that blend design and functionality. With a Master's degree in Computer Application, I have a solid foundation in programming and problem-solving, making it easy to pick up new languages and technologies. I’m always eager to learn, innovate, and collaborate on exciting projects.
                  </p>
                  <strong>Let’s build something incredible together!</strong>
              </div>
          </div>
      </div>
  )
}

export default About
