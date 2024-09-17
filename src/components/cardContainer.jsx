import { useEffect, useState } from "react";
import { Scores } from "./scores";
// not mine: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array
  }


function alreadyClicked(clicked, setClicked, url) {
    if(clicked.includes(url)) return true;
    else setClicked([...clicked, url])
    return false
  }

function CardContainer() {
  const [gifs, setGifs] = useState(false);
  const [clicked, setClicked] = useState([])
  const [score, setScore] = useState(0)
  const [best, setBest] = useState(0)
  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/search?q=cat&limit=10&api_key=xAXwA9hrraLD33fYZTvcYMlTLjkyNUVX",
      { mode: "cors" }
    )
      .then((response) => response.json())
      .then((response) => setGifs(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {gifs && (
        <div>
          {gifs.map((item) => {
            return (
              <img
                key={item.id}
                className="gif"
                src={item.images.original.url}
                onClick={() => {
                  setGifs([...shuffle(gifs)]);
                  if(alreadyClicked(clicked, setClicked, item.images.original.url)) {
                    setClicked([])
                    setScore(0)
                    if(score > best) setBest(score)
                  } else {
                    setScore(score + 1)
                  }
                }}
                alt="gif"
              />
            );
          })}
          <Scores
          score={score}
          bestScore={best}
          ></Scores>
        </div>
      )}
    </>
  );
}

export { CardContainer };
