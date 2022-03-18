import Head from 'next/head'
import Footer from '../components/Footer'
import { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Services from '../components/PaketiPage/Services';


export default function Paketi() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Head>
        <title>Flex Team | Paketi</title>
        <meta name="description" content="Dobrodošli u Flex Team, najjaču tipstersku organizaciju na Balkanu!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Sidebar toggle={toggle} isOpen={isOpen}/>
        <Services toggle={toggle} isOpen={isOpen}/>
        <Footer />
      </div>
      
  )
}