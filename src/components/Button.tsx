import React from "react";
import styled from "styled-components";

const Bt = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  margin: 20px;
  background-color: #ef802e;
  color: #121212;
  cursor: pointer;
  padding: 5px 15px 7px 15px;
  border-radius: 50px;
  background-image: linear-gradient(45deg, #c270c0, #ff991f);
  font-size: 25px;
  font-weight: 600;
  box-shadow: 0px 0px 10px #fff;
  transition: all 0.2s ease-in-out;

  :hover {
    background-image: linear-gradient(90deg, #c270c0, #ff991f);
  }

  :active {
  box-shadow:  0px 0px 6px #fff;

  }
`;



const Button = ({ onClick, label = "button", children }: any) => {
  return <Bt onClick={onClick}>{children || label}</Bt>;
};

export default Button;
