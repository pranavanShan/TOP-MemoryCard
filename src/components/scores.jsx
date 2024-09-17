function Scores({ score, bestScore }) {
  return (
    <div className="scoresContainer"> 
      <p> Score: {score} </p>
      <p> Best Score: {bestScore}</p>
    </div>
  );
}

export { Scores };
