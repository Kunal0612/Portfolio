import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import img from "../assets/Images/Profile.jpg"
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons  from '../subComponents/SocialIcons'
// import PowerButton  from '../subComponents/PowerButton'

import {Blogs} from '../data/BlogData';
import BlogComponent from './BlogComponent'
// import AnchorComponent from '../subComponents/Anchor'
import BigTitle from "../subComponents/BigTitlte"
import { FaLinkedinIn } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";



const MainContainer = styled(motion.div)`
background-color: black;
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center-center;
`
const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
height:auto;

position: relative;
padding-bottom: 5rem;
@media (max-width:30em){
    padding-bottom:7rem;
}
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
@media (max-width:50em){
    grid-template-columns:100%;
}
`

// Framer-motion config
const container = {

    hidden: {opacity:0},
    show: {
      opacity:1,
  
      transition:{
        staggerChildren: 0.5,
        duration: 0.5,
      }
    }
  
  }

const BlogPage = () => {

    const [numbers, setNumbers] = useState(0);

    useEffect(() => {
        let num = (window.innerHeight - 70)/30;
        setNumbers(parseInt(num));
    }, [])


    return (
        <MainContainer
        variants={container}
        initial='hidden'
        animate='show'
        exit={{
            opacity:0, transition:{duration: 0.5}
        }}
        >
           
            <Container>
                <LogoComponent />
                {/* <PowerButton /> */}
                <SocialIcons />
                {/* <AnchorComponent number={numbers}/> */}
<Center>
<Grid>

{
    Blogs.map(blog => {
        return <BlogComponent key={blog.id} blog={blog} />
    })
}
</Grid>

</Center>
<BigTitle text="CODING PROFILES" top="5rem" left="4rem" />
            </Container>
        </MainContainer>
    )
}

export default BlogPage