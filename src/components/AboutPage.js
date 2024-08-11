import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { FaLinkedinIn } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
// import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import astronaut from "../assets/Images/logo192.jpg";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;


const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`;
const Spaceman = styled.div`
  position: absolute;
  top: 12%;
  right: 2%;
  width: 20vw;
  img {
    width: 100%;
    height: auto;
    border-radius:50px;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 63vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
  @media (max-width: 30em){
    width: 50vw;
    height: auto;
    backdrop-filter: none;
    margin-top: 2rem;
}
@media (max-width: 40em){
    width: 60vw;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
`;
const AboutPage = () => {
  
  return (
    <ThemeProvider theme={DarkTheme}>
      
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        {/* <PowerButton /> */}
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
          Hello, I'm Kunal Shaw, a passionate Competitive Programmer and Full Stack MERN Developer. 
          <br /> <br />
          With a track record of solving over 3000 problems across various coding platforms, I've honed my problem-solving skills. Additionally, I have hands-on experience developing numerous Frontend and Full Stack MERN projects.
          <br /> <br />I think it's our Process and Consistency that what
          matters and on that we should focus on result is just a by product of what you have followed.
          <br /> <br /> 
          So let's Connect on Linkedin and Help each other to Grow.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
