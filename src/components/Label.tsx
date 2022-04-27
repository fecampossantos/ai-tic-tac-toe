import React from "react";
import styled from "styled-components";

const Lb = styled.label`
  color: white;
`

interface Props {
  for: string;
  children: any;
}
const Label = (props: Props) => {

  return(<Lb htmlFor={props.for}>{props.children}</Lb>)
}

export default Label;