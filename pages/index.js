import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Hero from '../components/Landing/Hero';
import TicketSection from '../components/Landing/TicketSection';
import NewsSection from '../components/Landing/NewsSection';
import Footer from '../components/Footer';
import Join from '../components/Landing/Join';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
        <Head>
          <title>Flex Team</title>
          <meta name="description" content="Dobrodošli u Flex Team, najjaču tipstersku organizaciju na Balkanu!" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          
        </Head>
        <Sidebar toggle={toggle} isOpen={isOpen}/>
        <Hero toggle={toggle} isOpen={isOpen}/>
        <TicketSection />
        <Join />
        <NewsSection />
        <Footer />
      </div>
      
  )
}
