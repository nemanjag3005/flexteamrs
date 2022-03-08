import Navbar from '../components/Navbar'
import React from "react";

const Tickets = ({ isOpen, toggle }) => {

  return (
    <Navbar toggle={toggle} isOpen={isOpen} />
  )

};

export default Tickets;