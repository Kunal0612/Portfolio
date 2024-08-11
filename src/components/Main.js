import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
// import PowerButton from '../subComponents/PowerButton'
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";
import { FaLinkedinIn } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import "./app.scss";
import { motion, AnimatePresence } from "framer-motion";
import Intro from "./Intro";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;
const Navright = styled.div`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 5;
  @media (min-width: 1300px) {
    display: none;
  }
`;

const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(4rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  position: fixed;
  left: 25rem;
  top: 2rem;
  z-index: 3;
  @media (max-width: 1300px) {
    display: none;
  }
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  position: fixed;
  left: 32rem;
  top: 2rem;
  z-index: 3;
  @media (max-width: 1300px) {
    display: none;
  }
`;
const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  position: fixed;
  left: 39rem;
  top: 2rem;
  z-index: 3;
  @media (max-width: 1300px) {
    display: none;
  }
`;

const CODING = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  position: fixed;
  left: 48rem;
  top: 2rem;
  z-index: 3;
  @media (max-width: 1300px) {
    display: none;
  }
`;
const ACHIEVEMENT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  position: fixed;
  left: 62rem;
  top: 2rem;
  z-index: 3;
  @media (max-width: 1300px) {
    display: none;
  }
`;

const EXPERIENCE = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  position: fixed;
  left: 73.5rem;
  top: 2rem;
  z-index: 1;
  @media (max-width: 1300px) {
    display: none;
  }
`;

const BottomBar = styled.div`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  @media (max-width: 1300px) {
    top: ${(props) => (props.click ? "92.5%" : "50%")};
    left: ${(props) => (props.click ? "85%" : "50%")};
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const aa = styled.div``;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #1f1717;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "100%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
  @media (max-width: 50em) {
    height: 50%;
    right: 0px;
    width: 100%;
    width: ${(props) => (props.click ? "100%" : "0%")};
    height: ${(props) => (props.click ? "50%" : "0%")};
    transition: width 0.5s ease 0s, height 1s ease 0.5s;
  }
`;

const Main = () => {
  const [open, setOpen] = useState(false);

  const isOpen = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  //lets start animation
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 1.2,
      },
    },
  };

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <MainContainer>
      <Navright onClick={isOpen}>
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
          {open && click && setClick(!click)}
          <TiThMenu />
        </motion.h2>
      </Navright>
      <AnimatePresence>
        {open && (
          <motion.div
            className="menu_container"
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit="exit"
          >
            <div className="btn_close" onClick={closeMenu}>
              <TiThMenu />
            </div>
            <motion.a
              href="/about"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 1,
                },
              }}
            >
              About.
            </motion.a>
            <motion.a
              href="/skills"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.8,
                },
              }}
            >
              Skills.
            </motion.a>
            <motion.a
              href="/work"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.6,
                },
              }}
            >
              Projects.
            </motion.a>
            <motion.a
              href="/coding_profile"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.4,
                },
              }}
            >
              Coding Profiles.
            </motion.a>
            <motion.a
              href="/achievement"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
            >
              Achievement.
            </motion.a>
            <motion.a
              href="/experience"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              exit={{
                opacity: 0,
                y: 90,
                transition: {
                  ease: "easeInOut",
                  delay: 0.2,
                },
              }}
            >
              Experience.
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
      <DarkDiv click={click} />
      <Container>
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons />

        <Center click={click}>
          {!open && (
            <YinYang
              onClick={() => handleClick()}
              width={click ? 120 : 200}
              height={click ? 120 : 200}
              fill="currentColor"
            />
          )}
          {!open && <span>Show Portfolio</span>}
        </Center>

        <Contact
          target="_blank"
          href="https://www.linkedin.com/in/kunal-shaw-/"
        >
        </Contact>
        <EXPERIENCE to="/experience">
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
            Experience.
          </motion.h2>
        </EXPERIENCE>
        <CODING to="/coding_profile">
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
            Coding Profiles.
          </motion.h2>
        </CODING>
        <WORK to="/work" click={+click}>
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
            Projects.
          </motion.h2>
        </WORK>
        <BottomBar>
          <ABOUT to="/about" click={+click}>
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
              About.
            </motion.h2>
          </ABOUT>
          <SKILLS to="/skills" click={+click}>
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
              Skills.
            </motion.h2>
          </SKILLS>
          <ACHIEVEMENT to="/achievement">
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
              Achievement.
            </motion.h2>
          </ACHIEVEMENT>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
