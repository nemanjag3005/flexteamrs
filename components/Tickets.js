import Navbar from '../components/Navbar'
import React from "react";
import Navbar from "../components/Navbar";

const Tickets = ({ isOpen, toggle }) => {

  return (
    <Navbar toggle={toggle} isOpen={isOpen} />
  )

};

export default Tickets;