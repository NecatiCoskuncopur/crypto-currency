const FrontSide = ({ image, name }) => {
  return (
    <>
      <img
        src={image}
        alt={name}
        width={70}
        height={70}
      />
      <h1>{name}</h1>
    </>
  );
};

export default FrontSide;
