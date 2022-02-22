import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import Sidebar from '../components/Sidebar';


export default function ProfitTabela() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar toggle={toggle} isOpen={isOpen}/>
        <Sidebar toggle={toggle} isOpen={isOpen}/>
        
      </div>
      
  )
}