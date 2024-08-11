import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'
import { NavLink } from 'react-router-dom'
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico', cursive;

position: fixed;
left: 2rem;
top: 2rem;
z-index: 3;
`;

const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: fixed; /* Updated to fixed */
  top: 2rem;
  right: calc(4rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const LogoComponent = (props) => {
  return (
    <>
      <NavLink to="/">
        <Logo color={props.theme}>
          Kunal Shaw
        </Logo>
      </NavLink>
      <Contact
        target="_blank"
        href="https://www.linkedin.com/in/kunal-shaw-/"
      >
        <motion.h2
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedinIn />
        </motion.h2>
      </Contact>
    </>
  )
}

export default LogoComponent;
