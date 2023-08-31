import Image from 'next/image';

const ShowSingleCard = ({ show }) => {
  return (
    <div>
      <h2>{show.name}</h2>
      {show.image && (
        <Image
          src={show.image?.original}
          width={680}
          height={1000}
          alt={show.name}
        />
      )}
    </div>
  );
};

export default ShowSingleCard;