import React from "react";
import styled, { keyframes } from "styled-components";

const zoomBadge = keyframes`
0%{
  opacity: 0;
  transform: rotate(45deg) scale(.8, .8);
}

77%{
  opacity: 1;
  transform: rotate(45deg) scale(1.2, 1.2);
}

100% {
  opacity: 0;
  transform: rotate(45deg) scale(.4, .4);
}

`;

const Bdg = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 35%;
  left: 40%;
  height: 200px;
  width: 200px;

  font-size: 30px;

  transform: rotate(45deg);

  background-color: rgb(255,255,255,0.4);
  box-shadow: 0px 0px 100px 40px rgb(255, 255, 255, 0.4);
  opacity: 0;

  animation: ${zoomBadge} 2s ease-in-out 1;
`;

const TextWrapper = styled.span`
  position: absolute;
  transform: rotate(-45deg);
  text-align: center;
`;

interface Props {
  children: any;
}
const Badge = (props: Props) => {
  return (
    <Bdg>
      <TextWrapper>{props.children}</TextWrapper>
    </Bdg>
  );
};

export default Badge;
