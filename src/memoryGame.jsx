import { useState } from "react";
import { CardContainer } from "./components/cardContainer";
import { Scores } from "./components/scores";

function MemoryGame() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  return (
    <div className="MemoryGameContainer">
        <div className="header">
        <h1> Memory game</h1>
        <p> Dont click the same gif twice!</p>
        </div>
        <Scores score={score} bestScore={best}></Scores>

      <CardContainer
        score={score}
        setScore={setScore}
        best={best}
        setBest={setBest}
      ></CardContainer>
    </div>
  );
}

export { MemoryGame };
