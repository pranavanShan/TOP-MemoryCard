import { useEffect, useState } from "react";

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

function CardContainer() {
  const [gifs, setGifs] = useState(false);

  useEffect(() => {
    // i think this is optimal but idk
    //first use this funciton which makes a list of gifs
    //because we are relying on an api this is wrapped around a useeffect
    //then we use the results to make cards wtih card componenet
    //beagain remember that you have to be able to random sort these
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
            {/* need to somehow make it so you cant have 3 that have all been clicked on before */}
          {gifs.slice(0,3).map((item) => {
            return (
              <img
                key={item.id}
                className="gif"
                src={item.images.original.url}
                onClick={() => {
                  setGifs([...shuffle(gifs)]);
                }}
                alt="gif"
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export { CardContainer };
