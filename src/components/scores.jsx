function Scores({ score, bestScore }) {
  return (
    <div className="scoresContainer"> 
      <h2> Score: {score} </h2>
      <h2> Best Score: {bestScore}</h2>
    </div>
  );
}

export { Scores };
