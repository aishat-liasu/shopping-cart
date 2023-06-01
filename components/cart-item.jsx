import Image from 'next/image';
import styles from '../styles/cart-item.module.css';

export default function CartItem({
  title,
  id,
  price,
  quantity,
  image,
  swatchColor,
  swatchTitle,
}) {
  const swatchStyle = {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    backgroundColor: swatchColor,
    borderRadius: '50%',
  };
  return (
    <article className={styles.article}>
      <div className={styles.column_1}>
        <Image
          src={image}
          width={300}
          height={160}
          alt={'Picture of ' + title}
        />
      </div>
      <div className={styles.column_2}>
        <h3>{title}</h3>
        <span style={swatchStyle}></span>
      </div>
      <div className={styles.column_3}>
        <p>{'$' + price}</p>
        <p>Estimated Delivery Date between Dec 2 - Dec 5, 2021</p>
        <button>Remove</button>
      </div>
    </article>
  );
}
