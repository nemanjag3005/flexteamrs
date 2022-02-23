import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-hero2 bg-cover '>
       <div className='flex flex-wrap justify-between items-center py-4 px-8'>
           <div className='p-4'>
           <Image src='/flex1.png' height='130px' width='111px'>

           </Image>
           </div>
           <div className='flex items-center justify-center space-x-4'>
                <div>
                    <h1 className='text-primary'>Kontakt</h1>
                    <ul>
                        <li>

                        </li>
                        <li>

                        </li>
                        <li>

                        </li>
                        <li>

                        </li>
                    </ul>
                </div>
                <div>
                <h1 className='text-primary'>O Nama</h1>
                    <ul>
                        <li>

                        </li>
                        <li>

                        </li>
                        <li>

                        </li>
                        <li>
                            
                        </li>
                    </ul>
                </div>
           </div>
       </div>
    </div>
  )
}

export default Footer