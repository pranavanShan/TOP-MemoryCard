import { useEffect, useState } from "react";
import { Card } from "./card";
// not mine: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
function CardContainer({ score, setScore, best, setBest }) {
  const [gifs, setGifs] = useState(false);
  const [clicked, setClicked] = useState([]);
  const [active, setActive] = useState('active')
  function alreadyClicked(clicked, setClicked, url) {
    if (clicked.includes(url)) return true;
    else setClicked([...clicked, url]);
    return false;
  }
  function handleClick(item) {
    setActive("inactive")
    setTimeout(function(){
      setActive("active")
      setGifs([...shuffle(gifs)]);
    }, 500)
    if (alreadyClicked(clicked, setClicked, item.images.original.url)) {
      setClicked([]);
      setScore(0);
      if (score > best) setBest(score);
    } else {
      setScore(score + 1);
    }
  }

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
        <div className= {`cardContainer ${active}`}>
          {gifs.map((item) => {
            return (
              <Card key={item.id} item={item} handleClick={handleClick}></Card>
            );
          })}
        </div>
      )}
    </>
  );
}

export { CardContainer };
