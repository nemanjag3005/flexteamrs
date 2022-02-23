import React from "react";
import Ticket from "./Ticket";

const TicketSection = () => {
  return (
    <div className="bg-hero2 bg-no-repeat bg-cover px-4 border-t-2 border-gray-800 pb-24">
      <div className="flex items-center justify-center flex-wrap">
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
          <h1 className="text-primary italic font-bold text-4xl text-shadow">
            TOP TIKETI OVE GODINE
          </h1>
          <p className="text-gray-200 mt-6">
            Tipsteri Flex Team organizacije se smatraju jednim od najtrazenijih
            tipstera na balkanu, koji su postavili brojne rekorde u analizi
            sportskih dogadjaja. Danas rade za grupu Flex Team, pružajući moćne
            pakete svima koji žele da zarade u sportu.
          </p>
          <button className="text-gray-200 font-bold italic mt-6 shadow-xl px-4 py-2 text-2xl rounded-full bg-gradient-to-b from-primary">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-300 hover:from-primary-metallic">PROFIT TABELA</h1>
          </button>
          
            
        </div>
      </div>
    </div>
  );
};

export default TicketSection;
