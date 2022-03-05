import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import Sidebar from '../components/Sidebar';
import Router from 'next/router';
import Biography from '../components/Biography';

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
      <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Sidebar toggle={toggle} isOpen={isOpen}/>
        <Biography toggle={toggle} isOpen={isOpen}/>
    </>
      
  )
}