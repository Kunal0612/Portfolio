import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
// import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
@media (max-width: 1300px){
    flex-direction: column;
    padding: 8rem 0px;
    height: auto;
  }
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;
font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;
&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
@media (max-width: 30em)> :nth-child(5) {
    margin-bottom: 4rem;
  }
  @media (max-width: 50em)> :nth-child(5) {
    margin-bottom: 5rem;
  }
  @media (max-width: 60rem){
    width: 50vw;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 4rem;
  }

`


const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
@media (max-width: 1300px){
    font-size: calc(1em + 2vw);
    margin-bottom: 1rem 
  }
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}



strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
li{
    ::marker {
        unicode-bidi: isolate;
        font-variant-numeric: tabular-nums;
        text-transform: none;
        text-indent: 0px !important;
        text-align: start !important;
        text-align-last: start !important;
    }
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
{/* <PowerButton /> */}
<ParticleComponent theme='light' />
            <Main>

<Title>
    Teaching Assistant (CSFORALL)
    DEC 2023 - Present 
</Title>
<Description>
• Served as an Online Teaching Assistant (TA) for multiple DSA and Competitive
Programming batches, also reviewed their coursework.
<br/>
• Collaborated with fellow Team members to improve various Course Materials
</Description>


            </Main>
            <ParticleComponent theme='light' />
            <Main>
<Title>
    Teaching Assistant (Ask Senior)
    JAN 2024 - Present 
</Title>
<Description>
• Created CP editorials on an "Ask Senior" platform to aid students with concise and clear explanations of competitive programming problems.
<br/>
• Addressed numerous DSA and CP-related queries, offering solutions and clarifications to aid fellow students in their learning journey.
</Description>


            </Main>
            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage