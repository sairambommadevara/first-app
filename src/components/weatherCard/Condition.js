import React from "react";
import styled from "@emotion/styled";
import Reel from "react-reel";

const Condition = ({ temp, condition }) => {
  

  return (
    <>
      <Temp> </Temp>
      <div style={{ fontSize: "1.5rem" }}>
        <Reel theme={reelStyle} text={`${temp}°C`} />
      </div>
      <Climet> {condition}</Climet>
    </>
  );
};

export default Condition;

const Temp = styled.h1`
    font-family: "Fira Sans", sans-serif;
    font-size: 2rem;
    font-weight: 200;
    position:relative;
    coursor:pointer;
    &:hover{
      left:5px;
  `;
const Climet = styled.h3`
    font-family: "Merriweather", sans-serif;
    font-size: 1.2rem;
        coursor:pointer;
    &:hover{
      right:5px
  `;
const reelStyle = {
  reel: {
    height: "0.85em",
    display: "flex",
    alignItems: "flex-end",
    overflowY: "hidden",
    lineHeight: "1em",
    justifyContent: "center",
  },
  group: {
    transitionDelay: "0 ms",
    transitionTimingFunction: "ease-in-out",
    transform: "translate(0,0)",
    height: "1.5em",
  },
  number: {
    height: "lem",
    fontFamily: "Ferie Sans",
  },
};