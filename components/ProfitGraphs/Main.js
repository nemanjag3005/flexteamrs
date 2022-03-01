import React from 'react'
import { Line } from 'react-chartjs-2'
import Navbar from '../Navbar'

const Main = ({toggle, isOpen}) => {
  return (
    <div className='bg-secondary min-h-screen'>
        <Navbar toggle={toggle} isOpen={isOpen}/>
        <div className='max-w-6xl py-2'>
        <div className="relative text-center">
        <img src="/brush-stroke.svg" className="-rotate-3 mx-auto md:w-5/12 w-10/12 -mt-24"></img>
        <h1 className="text-transparent italic bg-clip-text bg-gradient-to-b from-gray-700 text-shadow-lg md:text-6xl lg:text-7xl to-gray-900 text-5xl -rotate-3 font-bold absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
          PROFIT TABELA
        </h1>
      </div>
      <div>
          
      </div>
      </div>
    </div>
  )
}

export default Main