import { useState } from "react";
import { CardContainer } from "./components/cardContainer";
import { Scores } from "./components/scores";

function MemoryGame() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  return (
    <div className="MemoryGameContainer">
      <CardContainer
        score={score}
        setScore={setScore}
        best={best}
        setBest={setBest}
      ></CardContainer>
      <Scores score={score} bestScore={best}></Scores>
    </div>
  );
}

export { MemoryGame };
