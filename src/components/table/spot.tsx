import React, { MutableRefObject } from "react";
import styled from "styled-components";

const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 100px;

  width: 150px;
  height: 150px;
  color: white;

  background-color: rgb(255, 255, 255, 0.08);
  box-shadow: 3px 9px 10px 1px rgb(0, 0, 0);

  border-radius: 10px;

  transition: all 0.2s ease-in-out;

  :hover {
    transform: translateY(-3px);
    background-color: rgb(255, 255, 255, 0.15);
    box-shadow: 7px 10px 20px 1px rgb(0, 0, 0);
  }

  @media (max-width: 1024px) {
    width: 90px;
    height: 90px;
    font-size: 60px;
  }

  @media (max-width: 500px) {
    width: 60px;
    height: 60px;
    font-size: 40px;
  }

  @media (max-width: 300px) {
    width: 50px;
    height: 50px;
    font-size: 30px;
  }
`;

interface Props {
  id: string;
  ref: MutableRefObject<null>;
  onClick: any;
  value: number;
  label: string;
}

const Spot = React.forwardRef((props: Props, ref: any) => {
  const handleClick = () => {
    props.onClick(props.id);
  };

  return (
    <Container id={props.id} ref={ref} onClick={handleClick}>
      {" "}
      {props.label || ""}
    </Container>
  );
});

export default Spot;
