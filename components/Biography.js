import React from 'react'
import Navbar from '../components/Navbar'

const Biography = ({ isOpen, toggle }) => {
  return (
    <div className='bg-secondary  bg-no-repeat bg-fixed bg-cover pb-2 min-h-screen'>
       <Navbar toggle={toggle} isOpen={isOpen}/>
      <div className='mx-5
       px-3 pt-3 pb-7 rounded-xl bg-gradient-to-b from-transparent to-pale'>
        <div>
          <p className="text-center text-gray-200">
            <span className="text-primary">Flex Team</span> se smatra jednim od <span className="text-primary">elitnih sportskih stranica</span> ove ere, koji je postavio brojne rekorde u 
            analizi sportskih dogadjaja. Danas je <span className="text-primary">Flex Team organizacija</span> koja pruza mocne clanske pakete za sve one koji zele da zarade od sporta.
            Poznat sam kao Matija Lazic, jedan od najtraženijih i najuspešnijih sportskih tipstera na Balkanu. Izgradio sam izuzetnu karijeru i ugled u poslednjih  godinu
            dana i stekao bogatstvo. Moja imovina vredi više od pola miliona i dolazi sa načinom života koji se samo može zamisliti. Dozvolite mi da vam pomognem u 
            izgradnji života i karijere iz snova svojim znanjem i veštinama u industriji sportskih klađenja.
            <br /><br />
            <span className="text-primary">Ovo je vaša prilika da radite sa najboljima u poslu i na akciji!</span>
            <br /><br />
            Ako upravo sada citate about us sekciju mozete primetiti da je nas sajt izgradjen da nas podigne na 
            <span className="text-primary"> najvisi nivo u nasem poslu time sto smo uveli divizije a i da napomenemo to je 
            nesto sto do sada nije vidjeno kod nas.</span>
            <br /><br />
            Sve to zahteva mnogo posla, ali mi smo od početka bili tu za vas i tako će i ostati. Od nule smo izgradili imperiju i ne nameravamo da stanemo. U ovom poslu ne postoji niko bolji od nas!
            <br /><br /><br />
            Voli vas ceo <span className="text-primary">Flex Team!</span>
          </p>
        </div>
      </div>
</div>
  )
}

export default Biography