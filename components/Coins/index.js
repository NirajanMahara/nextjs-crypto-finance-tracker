import styles from './Coins.module.css';

const Coins = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id,
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
  );
};

export default Coins;
