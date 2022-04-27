import React from "react";
import "./App.css";
import styled from "styled-components";
import Table from "components/table";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Container>
      <Table />
    </Container>
  );
}

export default App;
