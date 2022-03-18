import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Tickets from '../components/Tickets';
import Footer from '../components/Footer';

export default function Tiketi() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Head>
        <title>Flex Team | Tiketi</title>
        <meta name="description" content="Dobrodošli u Flex Team, najjaču tipstersku organizaciju na Balkanu!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Sidebar toggle={toggle} isOpen={isOpen}/>
        <Tickets toggle={toggle} isOpen={isOpen}/>
        <Footer />
      </div>
      
  )
}