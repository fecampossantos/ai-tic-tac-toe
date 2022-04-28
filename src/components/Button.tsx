import React from "react";
import styled from "styled-components";

const Bt = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ef802e;
  color: #121212;
  cursor: pointer;

  width: 60px;
  margin: 20px;
  padding: 5px 15px 7px 15px;
  border-radius: 50px;
  font-size: 25px;
  font-weight: 600;

  background-image: linear-gradient(45deg, #c270c0, #ff991f);

  box-shadow: 0px 0px 10px #fff;
  transition: all 0.2s ease-in-out;

  :hover {
    background-image: linear-gradient(90deg, #c270c0, #ff991f);
  }

  :active {
    box-shadow: 0px 0px 6px #fff;
  }

  @media (max-width: 500px) {
    width: 50px;
    font-size: 20px;
  }

  @media (max-width: 300px) {
    width: 30px;
    font-size: 15px;
  }
`;

const Button = ({ onClick, label = "button", children }: any) => {
  return <Bt onClick={onClick}>{children || label}</Bt>;
};

export default Button;
