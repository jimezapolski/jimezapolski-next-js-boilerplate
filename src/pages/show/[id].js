import SingleCardContainer from '@/containers/SingleCardContainer';
import { useRouter } from 'next/router';

const Show = () => {
  const router = useRouter();
  const { id } = router.query;

  return <SingleCardContainer id={id} />;
};

export default Show;

//https://api.tvmaze.com/search/shows?q=batman
