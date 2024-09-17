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
        <Scores score={score} bestScore={best}></Scores>
      </div>
      <p> Do not click the same image twice!</p>
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
