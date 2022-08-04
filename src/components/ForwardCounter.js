import useCounter from '../store/use-counter';
import Card from './Card';

const ForwardCounter = () => {
  const count = useCounter();
  return <Card>{count}</Card>;
};

export default ForwardCounter;
