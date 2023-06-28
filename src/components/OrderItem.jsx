import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import styles from '@styles/OrderItem.module.scss';
import close from '@icons/icon_close.png';
import Image from 'next/image';

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image src={product?.images[0]} alt={product?.title} width={100} height={100} />
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image className={`${styles['more-clickable-area']} ${styles.pointer}`} src={close} alt="close" onClick={() => handleRemove(product)} width={100} height={100} />
    </div>
  );
};

export default OrderItem;
