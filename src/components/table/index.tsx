/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Spot from "./spot";
import { letAIChoose } from "ai";
import Button from "components/Button";
import Radio from "components/Radio";
import Label from "components/Label";
import { delay } from "helpers/delay";
import { checkWin } from "helpers/checkWin";

import Badge from "components/Badge";

const _COMPUTER_STARTS = 1; // X
const _PLAYER_STARTS = 2; // O

const Tb = styled.div`
  display: grid;
  grid-template-rows: 150px 150px 150px;
  grid-template-columns: 150px 150px 150px;
  gap: 20px;

  margin: 20px;

  @media (max-width: 1024px) {
    grid-template-rows: 90px 90px 90px;
    grid-template-columns: 90px 90px 90px;
    gap: 20px;

    margin: 20px;
  }

  @media (max-width: 500px) {
    grid-template-rows: 60px 60px 60px;
    grid-template-columns: 60px 60px 60px;
    gap: 20px;

    margin: 20px;
  }

  @media (max-width: 300px) {
    grid-template-rows: 40px 40px 40px;
    grid-template-columns: 40px 40px 40px;
    gap: 20px;

    margin: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255, 0.05);
  box-shadow: 10px 10px 10px 1px rgb(0, 0, 0);
  border-radius: 10px;
  padding: 20px;

  height: 90vh;
`;

const ControllerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const SelectPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  label {
    margin: 0 10px;
  }
`;

const ControllerButtonsContainer = styled.div`
  display: flex;
  flex: 0.7;
  align-items: center;
  justify-content: center;
`;

const Table = () => {


  const [isGameRunning, setIsGameRunning] = useState(false);

  const spot1 = useRef(null);
  const spot2 = useRef(null);
  const spot3 = useRef(null);
  const spot4 = useRef(null);
  const spot5 = useRef(null);
  const spot6 = useRef(null);
  const spot7 = useRef(null);
  const spot8 = useRef(null);
  const spot9 = useRef(null);

  const [spot1text, setSpot1text] = useState("");
  const [spot2text, setSpot2text] = useState("");
  const [spot3text, setSpot3text] = useState("");
  const [spot4text, setSpot4text] = useState("");
  const [spot5text, setSpot5text] = useState("");
  const [spot6text, setSpot6text] = useState("");
  const [spot7text, setSpot7text] = useState("");
  const [spot8text, setSpot8text] = useState("");
  const [spot9text, setSpot9text] = useState("");

  const [spot1value, setSpot1value] = useState(2);
  const [spot2value, setSpot2value] = useState(2);
  const [spot3value, setSpot3value] = useState(2);
  const [spot4value, setSpot4value] = useState(2);
  const [spot5value, setSpot5value] = useState(2);
  const [spot6value, setSpot6value] = useState(2);
  const [spot7value, setSpot7value] = useState(2);
  const [spot8value, setSpot8value] = useState(2);
  const [spot9value, setSpot9value] = useState(2);

  const [plays, setPlays] = useState(1);
  const [isUserTurn, setIsUserTurn] = useState(false);

  const [startingPlayer, setStartingPlayer] = useState(_PLAYER_STARTS);

  const [showBadge, setShowBadge] = useState(false);
  const [badgeMessage, setBadgeMessage] = useState("");

  const resetGame = async () => {
    await delay(900).then(() => {
      setShowBadge(false);
      setPlays(1);
      setIsUserTurn(false);
      setStartingPlayer(_PLAYER_STARTS);
      array_setSpotTexts.forEach((t: any) => t(""));
      array_setSpotValues.forEach((t: any) => t(2));
      setIsGameRunning(false);
    });
  };

  const array_setSpotTexts = [
    setSpot1text,
    setSpot2text,
    setSpot3text,
    setSpot4text,
    setSpot5text,
    setSpot6text,
    setSpot7text,
    setSpot8text,
    setSpot9text,
  ];

  const array_setSpotValues = [
    setSpot1value,
    setSpot2value,
    setSpot3value,
    setSpot4value,
    setSpot5value,
    setSpot6value,
    setSpot7value,
    setSpot8value,
    setSpot9value,
  ];

  const array_spotTexts = [
    spot1text,
    spot2text,
    spot3text,
    spot4text,
    spot5text,
    spot6text,
    spot7text,
    spot8text,
    spot9text,
  ];

  const array_spotValues = [
    spot1value,
    spot2value,
    spot3value,
    spot4value,
    spot5value,
    spot6value,
    spot7value,
    spot8value,
    spot9value,
  ];

  const handleClick: Function = (spot: any) => {
    if (!isUserTurn) return;

    let index = parseInt(spot.current.id);
    if (!(array_spotTexts[index - 1] === "")) return;
    setPlays(plays + 1);
    array_setSpotTexts[index - 1]("O");
    array_setSpotValues[index - 1](5);
    setIsUserTurn(false);
  };

  const startGame = () => {
    setIsGameRunning(true);

    if (startingPlayer === _COMPUTER_STARTS) {
      if (plays % 2 === 0) {
        setIsUserTurn(true);
      } else {
        setIsUserTurn(false);
        callAI();
      }
    } else {
      if (plays % 2 !== 0) {
        setIsUserTurn(true);
      } else {
        setIsUserTurn(false);
        callAI();
      }
    }
  };

  useEffect(() => {
    if (!isGameRunning) return;

    if (startingPlayer === _COMPUTER_STARTS) {
      if (plays % 2 === 0) {
        setIsUserTurn(true);
      } else {
        setIsUserTurn(false);
        callAI();
      }
    } else {
      if (plays % 2 !== 0) {
        setIsUserTurn(true);
      } else {
        setIsUserTurn(false);
        callAI();
      }
    }
  }, [plays]);

  useEffect(() => {
    let { userWon, computerWon, tie } = checkWin(array_spotValues, plays);
    if (userWon) showUserBadge();
    if (computerWon) showComputerBadge();

    if (plays === 10 && tie) showTieBadge();
  }, [plays]);

  const showComputerBadge = () => {
    setBadgeMessage("Computer won!");
    setShowBadge(true);
    resetGame();
  };
  const showUserBadge = () => {
    setBadgeMessage("User won!");
    setShowBadge(true);
    resetGame();
  };
  const showTieBadge = () => {
    setBadgeMessage("It is a tie!");
    setShowBadge(true);
    resetGame();
  };

  const callAI = async () => {
    if(plays >= 9) return
    const spot: number | undefined = await letAIChoose(plays, array_spotValues);
    playN(spot!);
    setPlays(plays + 1);
    setIsUserTurn(true);
  };

  const playN = (index: number) => {
    array_setSpotTexts[index]("X");
    array_setSpotValues[index](3);
  };

  const handleStartGame = () => {
    startGame();
  };

  const handleResetGame = () => {
    resetGame();
  };

  const handleSelectedStarter = (player: number) => {
    setStartingPlayer(player);
  };

  return (
    <Container>
      {showBadge && <Badge>{badgeMessage}</Badge>}
      <ControllerContainer>
        <SelectPlayerContainer>
          <Label for="selectPlayerJogador">
            <Radio
              id="selectPlayerJogador"
              name="playerSelect"
              value="Jogador(a)"
              checked={startingPlayer === _PLAYER_STARTS}
              onChange={() => handleSelectedStarter(_PLAYER_STARTS)}
            />
            Jogador(a)
          </Label>

          <Label for="selectPlayerComputador">
            <Radio
              id="selectPlayerComputador"
              name="playerSelect"
              value="Computador"
              checked={startingPlayer === _COMPUTER_STARTS}
              onChange={() => handleSelectedStarter(_COMPUTER_STARTS)}
            />
            Computador
          </Label>
        </SelectPlayerContainer>
        <ControllerButtonsContainer>
          {!isGameRunning && <Button onClick={handleStartGame}>start</Button>}
          {isGameRunning && <Button onClick={handleResetGame}>reset</Button>}
        </ControllerButtonsContainer>
      </ControllerContainer>
      <Tb>
        <Spot
          id={"1"}
          ref={spot1}
          onClick={() => handleClick(spot1)}
          label={spot1text}
          value={spot1value}
        />
        <Spot
          id={"2"}
          ref={spot2}
          onClick={() => handleClick(spot2)}
          label={spot2text}
          value={spot2value}
        />
        <Spot
          id={"3"}
          ref={spot3}
          onClick={() => handleClick(spot3)}
          label={spot3text}
          value={spot3value}
        />
        <Spot
          id={"4"}
          ref={spot4}
          onClick={() => handleClick(spot4)}
          label={spot4text}
          value={spot4value}
        />
        <Spot
          id={"5"}
          ref={spot5}
          onClick={() => handleClick(spot5)}
          label={spot5text}
          value={spot5value}
        />
        <Spot
          id={"6"}
          ref={spot6}
          onClick={() => handleClick(spot6)}
          label={spot6text}
          value={spot6value}
        />
        <Spot
          id={"7"}
          ref={spot7}
          onClick={() => handleClick(spot7)}
          label={spot7text}
          value={spot7value}
        />
        <Spot
          id={"8"}
          ref={spot8}
          onClick={() => handleClick(spot8)}
          label={spot8text}
          value={spot8value}
        />
        <Spot
          id={"9"}
          ref={spot9}
          onClick={() => handleClick(spot9)}
          label={spot9text}
          value={spot9value}
        />
      </Tb>
    </Container>
  );
};

export default Table;
