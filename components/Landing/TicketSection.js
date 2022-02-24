import Link from "next/link";
import React from "react";
import Ticket from "./Ticket";

const TicketSection = () => {
  return (
    
    <div className="bg-hero2 bg-no-repeat bg-cover px-4 border-t-2 border-gray-800 pb-24 relative">
      
      <h1 className="absolute z-0 font-['Airbnb Cereal App'] font-bold opacity-20 text-transparent bg-clip-text bg-gradient-to-r from-transparent to-primary text-8xl tracking-widest top-[15%] left-2 ">
        FLEX
      </h1>
      <h1 className="absolute z-0 font-['Airbnb Cereal App'] font-bold opacity-20 text-transparent bg-clip-text bg-gradient-to-r from-primary-metallic to-transparent text-8xl tracking-widest top-[35%] left-36 ">
        TEAM
      </h1>
      <h1 className="absolute z-0 font-['Airbnb Cereal App'] font-bold opacity-20 text-transparent bg-clip-text bg-gradient-to-r from-transparent to-primary-metallic text-8xl tracking-widest top-[60%] left-2 ">
        FLEX
      </h1>
      <h1 className="absolute z-0 font-['Airbnb Cereal App'] font-bold opacity-20 text-transparent bg-clip-text bg-gradient-to-r from-primary to-transparent text-8xl tracking-widest top-[75%] left-36 ">
        TEAM
      </h1>
      
      <div className="flex items-center justify-center flex-wrap ">
        <div className="grid gap-4 grid-cols-2">
          <div className="-rotate-6 space-y-3">
            <Ticket variant={'white'}/>
            <Ticket variant={'black'}/>
            </div>
            <div className="-rotate-6 space-y-3">
            <Ticket variant={'black'}/>
            <Ticket variant={'white'}/>
            </div>
        </div>
        <div className="px-4 py-4 flex items-center justify-center flex-col mt-12">
          <h1 className="text-primary italic font-bold text-5xl text-shadow">
            TOP TIKETI OVE GODINE
          </h1>
          <p className="text-gray-200 mt-6">
            Tipsteri Flex Team organizacije se smatraju jednim od najtrazenijih
            tipstera na balkanu, koji su postavili brojne rekorde u analizi
            sportskih dogadjaja. Danas rade za grupu Flex Team, pružajući moćne
            pakete svima koji žele da zarade u sportu.
          </p>
          <Link href='/profit-tabela'>
          <button className="text-gray-200 font-bold italic mt-10 shadow-xl px-4 py-2 text-2xl rounded-full hover:-translate-y-2 transform ease-in-out duration-300 bg-gradient-to-b from-primary">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-300 hover:from-primary-metallic">PROFIT TABELA</h1>
          </button>
          </Link>
          
          
            
        </div>
      </div>
    </div>
    
  );
};

export default TicketSection;
