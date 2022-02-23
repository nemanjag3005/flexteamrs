import React from 'react'

const Ticket = ({variant}) => {
  return (
    <div className={` shadow-xl p-2 overflow-hidden ${variant == 'white' ? 'bg-white text-black' : 'bg-black text-gray-200'}`}>
        <div className={`text-xxs font-semibold  border-b-2 ${variant == 'white' ? 'border-black' : 'border-white'}`}>
            Tiketi Singl
        </div>
        <div className={` border-b-2 ${variant == 'white' ? 'border-black' : 'border-white'}`}>
            <h1 className='font-semibold text-xxs'>
                ID:26106384923
            </h1>
            <h1 className='text-xxs mt-3 mb-2'>
                Crvena Z - Buducnost H 1 (-6.5)
            </h1>
        </div>
        <div className={`text-xxxs border-b-2 py-2 ${variant == 'white' ? 'border-black' : 'border-white'}`}>
            <p>Ukupna uplata:     136.00,00</p>
            <p>Dobitak:           202.100,00</p>
        </div>
            <p className=' text-xxxs mt-2'>Ukupna kvota:      1.90</p>
    </div>
  )
}

export default Ticket