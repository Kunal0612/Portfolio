import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import Home from '../subComponents/Home'
// import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { YinYang } from './AllSvgs'
import { FaLinkedinIn } from "react-icons/fa";
import Intro from './Intro';


const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled.a`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`
const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
position: fixed;
left: 30rem;
top: 2rem;
z-index:3;
`

const SKILLS = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
position: fixed;
left: 37rem;
top: 2rem;
z-index:3;
`
const WORK = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
position: fixed;
left: 44rem;
top: 2rem;
z-index:3;
`

const CODING = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
position: fixed;
left: 53rem;
top: 2rem;
z-index:3;
`
const ACHIEVEMENT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
position: fixed;
left: 67rem;
top: 2rem;
z-index:3;
`

const EXPERIENCE = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
position: fixed;
left: 79.5rem;
top: 2rem;
z-index:1;
`



const BottomBar = styled.div`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`



const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' :'50%'  };
left: ${props => props.click ? '92%' :'50%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
    animation: ${rotate} infinite 1.5s linear;
}

&>:last-child{
    display: ${props => props.click ? 'none' :'inline-block'  };
    padding-top: 1rem;
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #1F1717;
bottom: 0;
right: 50%;
width: ${props => props.click ? '100%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`

const Main = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
            <DarkDiv   click={click} />
            <Container>
            {/* <PowerButton /> */}
            <LogoComponent theme={click ? 'dark' :'light'}/>
            {/* <Home theme={click ? 'dark' :'light'}/> */}
            <SocialIcons theme={click ? 'dark' :'light'} />
           
            <Center click={click}>
                <YinYang  onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
                <span>Show Portfolio</span>
            </Center>

            <Contact target="_blank" href="https://www.linkedin.com/in/kunal-shaw-/" >
                <motion.h2
                initial={{
                    y:-150,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    <FaLinkedinIn />
                </motion.h2>
            </Contact>
            <EXPERIENCE to="/experience" >
            <motion.h2
                initial={{
                    y:-150,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                
                >
                    Experience.
                </motion.h2>
            </EXPERIENCE>
            <CODING to="/coding_profile" >
                <motion.h2
                initial={{
                    y:-150,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Coding Profiles.
                </motion.h2>
            </CODING>
            <WORK to="/work" click={+click}>
                <motion.h2
                initial={{
                    y:-150,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Projects.
                </motion.h2>
            </WORK>
            <BottomBar>
            <ABOUT to="/about" click={+click}>
            <motion.h2
                initial={{
                    y:-150,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                
                >
                    About.
                </motion.h2>
            </ABOUT>
            <SKILLS to="/skills" click={+click}>
                <motion.h2
                initial={{
                    y:-150,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                
                >
                    Skills.
                </motion.h2>
            </SKILLS>
            <ACHIEVEMENT to="/achievement" >
            <motion.h2
                initial={{
                    y:-150,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Achievement.
                </motion.h2>
            </ACHIEVEMENT>

            </BottomBar>

            </Container>
            {click ? <Intro click={click} /> : null }
        </MainContainer>
    )
}

export default Main