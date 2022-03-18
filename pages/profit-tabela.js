import Head from 'next/head'
import { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Main from '../components/ProfitTable/Main';
import Footer from '../components/Footer';


export default function ProfitTabela() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Head>
        <title>Flex Team | Profit Tabela</title>
        <meta name="description" content="Dobrodošli u Flex Team, najjaču tipstersku organizaciju na Balkanu!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Sidebar toggle={toggle} isOpen={isOpen}/>
        <Main toggle={toggle} isOpen={isOpen}/>
        <Footer />
      </div>
      
  )
}