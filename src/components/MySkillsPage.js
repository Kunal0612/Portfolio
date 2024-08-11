import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";
import { FaLinkedinIn } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
// import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1300px){
    flex-direction: column;
    padding: 8rem 0px;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
  @media (max-width: 30em)> :nth-child(5) {
    margin-bottom: 4rem;
  }
  @media (max-width: 50em)> :nth-child(5) {
    margin-bottom: 5rem;
  }
  @media (max-width: 60rem){
    width: 50vw;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 4rem;
  }

`;



const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
  @media (max-width: 1300px){
    font-size: calc(1em + 2vw);
    margin-bottom: 1rem 
    margin:0;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        {/* <PowerButton /> */}
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Develope width={40} height={40} /> Mern Stack Developer
          </Title>
          <Description >A Full Stack Mern Developer !</Description>
          <Description>
            <strong>Skills</strong>
            <p>
              Html, Css, Javascript, React, Tailwind, Bootstrap, Scss, Node js,
              Express Js, Numpy, Pandas etc.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Github, Mongo DB, Postman, Dev C++,  etc.</p>
          </Description>
        </Main>

        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Develope width={40} height={40} /> Competitive Programmer 
          </Title>
          <Description>
            Solved around 42`00+ Algorithmic Problems in total of all coding
            platforms !
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>C++ ,C ,Python ,Java etc.</p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Dev C++ etc.</p>
          </Description>
        </Main>
        <BigTitle text="SKILLS" top="5%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
