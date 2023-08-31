import { useEffect } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import ShowSingleCard from '@/components/ShowSingleCard';

const SingleCardContainer = ({ id }) => {
  const { show, getShow, showLoading } = useAppContext();

  useEffect(() => {
    if (id) {
      getShow(id);
    }
  }, [id, getShow]);

  return (
    <>
      {showLoading && <p>LOADING....</p>}
      {!showLoading && <ShowSingleCard show={show} />}
    </>
  );
};

export default SingleCardContainer;