import React from 'react'
import ReactPlayer from 'react-player'

const Hero = () => {
  return (
    <div className='bg-hero1  bg-no-repeat bg-fixed bg-cover'>
        <div className='grid'>
            <div className='flex py-4 px-4 flex-col items-center justify-center text-4xl text-primary mt-8'>
                    <h1 className='font-bold italic tracking-tight text-shadow-lg'>
                        PODIGNI SVOJE ULOGE
                    </h1>
                    <p className='text-gray-200 py-4 text-lg'>
                       Rezultati ne lažu! Ovo je vaša prilika da radite sa najboljima u poslu i da se upustite u akciju. Pretplatite se na Flex Team. 
                    </p>
            </div>
            <div className='w-full px-4 mb-8'>
            <div className='pt-[56.25%] flex relative'>
                <ReactPlayer width='100%' height='100%' style={{position: 'absolute', top:'0', left: '0'}} url='https://www.youtube.com/watch?v=79pwXIqngAI' controls />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero