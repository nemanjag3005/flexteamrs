import Navbar from '../components/Navbar'
import React, {useState} from "react";


const Tickets = ({ isOpen, toggle }) => {
  
  const ticketFileNames = ['Tiket N1 1-1.png', 'Tiket zadnji 2.png', 'Tiket N3 1.png', 'Tiket N3 1.png'
  , 'Tiket N3 1.png', 'Tiket N3 1.png', 'Tiket N3 1.png', 'Tiket N3 1.png'
  , 'Tiket N3 1.png', 'Tiket N3 1.png', 'Tiket N3 1.png', 'Tiket N3 1.png']

  const trial = ['Tiket N1 1-1.png']

  const [ticketState, setTicketState] = useState('');
  const [ticketOpen, setTicketOpen] = useState(false);

  

  return (
    <div className="bg-secondary bg-repeat-y md:bg-no-repeat md:bg-cover bg-local pb-4">
      <Navbar toggle={toggle} isOpen={isOpen} />
      <div className="w-full flex items-center justify-center">
        <div
            className="mx-5 max-w-7xl
            p-4 rounded-xl bg-gradient-to-b from-transparent to-pale px-10 md:px-24"
        >
          
            <div className='grid grid-flow-row grid-cols-1 md:grid-cols-4 sm:grid-cols-2  gap-8 md:gap-x-28 md:gap-y-14 w-full'> {/* GRID */}
              {ticketFileNames.map((stringMapped, index) => {
                return (
                  <>
                  <div className='border-3 border-primary' onClick={() => {setTicketState(stringMapped) 
                  setTicketOpen(true)}}>
                    <img src= {'/tickets/' + stringMapped} className='w-full cursor-pointer'/>
                  </div>
                  </>
                )
                }
              )}
            <div className={`fixed z-10 left-0 top-0 h-full w-full overflow-auto bg-transbl grid items-center justify-center place-items-center ${ticketOpen ? 'block' : 'hidden'}`}> {/* MODAL */}
              <div>
                <div className='w-[70%] mx-auto md:w-xl mt-auto container relative'>
                  <img src= {'/tickets/' + ticketState} className='rounded-sl w-full z-20'/>
                  <span className='cursor-pointer absolute top-3 right-5 z-30 text-4xl text-white' onClick={() => setTicketOpen(false)}> &times; </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

};

export default Tickets;