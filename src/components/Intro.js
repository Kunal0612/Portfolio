import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Me from "../assets/Images/mee.jpg";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 65vw;
  height: 60vh;
  display: flex;
  @media (min-width: 800px) {
    border-top: 2px solid ${(props) => props.theme.body} 50%;
    border-top: 2px solid ${(props) => props.theme.text} 50%;
    border-left: 2px solid ${(props) => props.theme.body};
  }
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-top: 2px solid ${(props) => props.theme.text} ;
  border-bottom: 2px solid ${(props) => props.theme.text};
  border-left: 2px solid #fff;
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;
  @media only screen and (max-width: 50em) {
    border-right-width: initial;
    border-left-width: initial;
    border-right-color: initial;
    border-left-color: initial;
    border-style: solid;
    border-image: initial;
    border-top: 2px solid rgb(0, 0, 0);
    border-bottom: 2px solid rgb(0, 0, 0);
    background-position: 0px 0px, 100% 0px;
  }
  @media (max-width: 30em) {
    width: 70vw;
  }
  @media (max-width: 40em) {
    width: 60vw;
  }
  @media (max-width: 50em) {
    width: 50vw;
    background-size: 100% 2px;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  @media (max-width: 60em) {
    width: 70vw;
  }
  @media (max-width: 1200em) {
    width: 65vw;
  }
`;
const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 48%;
    height: 75%;
    align-items: center;
    justify-content: center;
    border-radius: 10%;
    @media (max-width: 30em) {
      width: 90%;
    }

    @media (max-width: 40em) {
      width: 80%;
    }
    @media (max-width: 50em) {
      width: 60%;
    }
  }

  .resume {
    position: absolute;
    align-items: center;
    justify-content: center;
    bottom: 2%;
    left: 36%;
    @media (max-width: 50em) {
        bottom:-1%;
        left: 24%;
    }
    .button-89 {
      --b: 3px; /* border thickness */
      --s: 0.45em; /* size of the corner */
      --color: #373b44;

      padding: calc(0.5em + var(--s)) calc(0.9em + var(--s));
      color: var(--color);
      --_p: var(--s);
      background: conic-gradient(
          from 90deg at var(--b) var(--b),
          #0000 90deg,
          var(--color) 0
        )
        var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p))
        calc(100% - var(--b) - 2 * var(--_p));
      transition: 0.3s linear, color 0s, background-color 0s;
      outline: var(--b) solid #0000;
      outline-offset: 0.6em;
      font-size: 16px;

      border: 0;

      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
    }

    .button-89:hover,
    .button-89:focus-visible {
      --_p: 0px;
      outline-color: var(--color);
      outline-offset: 0.05em;
    }

    .button-89:active {
      background: var(--color);
      color: #fff;
    }
  }
  @media (max-width: 50em) {
    width: 100%;
    height: 50%;
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
  @media (max-width: 40em) {
    font-size: calc(1rem + 1.5vw);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "70vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hey,</h1>
          <h3>I'm Kunal Shaw</h3>
          <h5>A Competitive Programmer and a MERN Stack Developer</h5>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img
            className="pic"
            src={Me}
            alt="Profile Pic"
            height={1}
            width={0}
          />
          <a
            className="resume"
            href="https://drive.google.com/file/d/1AoqLb5uEQ_X-xIuYOPo6qTSPnVs22R28/view"
          >
            <button className="button-89">Show Resume</button>
          </a>
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
