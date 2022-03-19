import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Router from 'next/router';
import Biography from '../components/Biography';
import Footer from '../components/Footer';

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
      <>
      <Head>
        <title>Flex Team | O Nama</title>
        <meta name="description" content="Dobrodošli u Flex Team, najjaču tipstersku organizaciju na Balkanu!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Sidebar toggle={toggle} isOpen={isOpen}/>
        <Biography toggle={toggle} isOpen={isOpen}/>
        <Footer />
    </>
      
  )
}