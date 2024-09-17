function Card({ item, handleClick }) {
  return (
    <img
      key={item.id}
      className="card"
      src={item.images.original.url}
      onClick={() => {
        handleClick(item);
      }}
      alt="gif"
    />
  );
}

export { Card };
