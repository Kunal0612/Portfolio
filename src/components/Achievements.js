import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { FaLinkedinIn } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
// import PowerButton from "../subComponents/PowerButton";

import { Achieve } from "../data/AchiementData.js";
import Carda from "../subComponents/Carda.js";
import { YinYang } from "./AllSvgs";
import BigTitlte from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};

  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(4rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  color: white;
  @media (max-width: 40em){
    left: calc(2rem + 15vw);
}

@media (max-width: 40em){
    top: 30%;
    left: calc(6rem + 15vw);
}
@media (max-width: 50em){
    left: calc(8rem + 15vw);
}
`;
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;


// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Contact
          target="_blank"
          href="https://www.linkedin.com/in/kunal-shaw-/"
        >
          <motion.h2
            initial={{
              y: -150,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedinIn />
          </motion.h2>
        </Contact>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        {/* <PowerButton /> */}

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Achieve.map((d) => (
            <Carda key={d.id} data={d} />
          ))}
        </Main>
        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>

        <BigTitlte text="ACHIEVEMENTS" top="10%" right="20%"/>
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;