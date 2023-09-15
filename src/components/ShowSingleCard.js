import Image from 'next/image';

const ShowSingleCard = ({ show, width=680, height=1000 }) => {
  return (
    <div>
      <h2>{show.name}</h2>
      {show.image && (
        <Image
          src={show.image?.original}
          width={width}
          height={height}
          alt={show.name}
        />
      )}
    </div>
  );
};

export default ShowSingleCard;