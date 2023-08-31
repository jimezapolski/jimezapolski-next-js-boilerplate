import Link from 'next/link';

const ShowCard = ({ actualShow }) => {
  const { show } = actualShow;
  const { name, id } = show;
  return (
    <div className='show_container'>
      <h2>{name}</h2>
      <Link href={`/show/${id}`}>View Show</Link>
    </div>
  );
};

export default ShowCard;