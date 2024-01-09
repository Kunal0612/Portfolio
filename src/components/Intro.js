import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Me from '../assets/Images/mee.jpg'


const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 65vw;
height:60vh;
display: flex;


background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};


    z-index:1;

`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic{
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%,0%);
    width: 48%;
    height: 75%;
    align-items:center;
    justify-content:center;
    border-radius:10%;
}

.resume{
    position: absolute;
    align-items:center;
    justify-content:center;
    bottom: 2%;
    left: 35%;
    .button-89 {
        --b: 3px;   /* border thickness */
        --s: .45em; /* size of the corner */
        --color: #373B44;
        
        padding: calc(.5em + var(--s)) calc(.9em + var(--s));
        color: var(--color);
        --_p: var(--s);
        background:
          conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)
          var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
        transition: .3s linear, color 0s, background-color 0s;
        outline: var(--b) solid #0000;
        outline-offset: .6em;
        font-size: 16px;
      
        border: 0;
      
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
      }
      
      .button-89:hover,
      .button-89:focus-visible{
        --_p: 0px;
        outline-color: var(--color);
        outline-offset: .05em;
      }
      
      .button-89:active {
        background: var(--color);
        color: #fff;
      }
}

`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;

}
`

const Intro = () => {
    return (
        <Box
        initial={{height:0}}
        animate={{height: '70vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hey,</h1>
                    <h3>I'm Kunal Shaw</h3>
                    <h6>A Competitive Programmer and a MERN Stack Developer</h6>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ duration:1, delay:2 }}

                >
                    <img className="pic" src={Me} alt="Profile Pic" height={1} width={0}   />
                    <a className="resume" href="https://drive.google.com/file/d/1AoqLb5uEQ_X-xIuYOPo6qTSPnVs22R28/view">  
                        <button className="button-89">Show Resume</button> 
                    </a>
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro