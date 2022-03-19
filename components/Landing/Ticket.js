import React from 'react'

const Ticket = ({variant, id, naslov, igra, uplata, dobitak, kvota}) => {
  return (
    <div className={` shadow-xl p-2 md:p-4 overflow-hidden ${variant == 'white' ? 'bg-white text-black' : 'bg-black text-gray-200'}`}>
        <div className={`text-xxs md:text-sm font-semibold  border-b-2 ${variant == 'white' ? 'border-black' : 'border-white'}`}>
            Tiketi Singl
        </div>
        <div className={` border-b-2 ${variant == 'white' ? 'border-black' : 'border-white'}`}>
            <h1 className='font-semibold md:text-sm text-xxs'>
                {id}
            </h1>
            <h1 className='text-xxs md:text-lg mt-3 md:mt-7 md:mb-4 mb-2'>
                {naslov}
                <br/>
                <span className='text-xs'>{igra}</span>
            </h1>
        </div>
        <div className={`text-xxxs md:text-xs border-b-2 py-2 ${variant == 'white' ? 'border-black' : 'border-white'}`}>
            <p>Ukupna uplata:     {uplata}</p>
            <p>Dobitak:           {dobitak}</p>
        </div>
            <p className=' text-xxxs md:text-xs mt-2'>Ukupna kvota:      {kvota}</p>
    </div>
  )
}

export default Ticket