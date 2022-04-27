import React from "react";
import styled from "styled-components";



const Rd = styled.input``;

interface Props {
  id: string;
  name: string;
  value: string;
  onChange: any;
  checked?: boolean;
}
const Radio = (props: Props) => {
  return (
        <Rd
          type="radio"
          id={props.id}
          name={props.name}
          value={props.value}
          checked={props.checked}
          onChange={props.onChange}
        />
  );
};

export default Radio;
