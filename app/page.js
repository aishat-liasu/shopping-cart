import Image from 'next/image';
import styles from './page.module.css';
import CartItem from '@/components/cart-item';

export default function Home() {
  //Styling variables
  const BLUE = '#172162'; //"rgb(23, 33, 98)";
  const LIGHT_GREY = '#6e7484';
  const BLACK = '#000000';

  //First part given
  const lineItems = [
    {
      id: 1,
      title: 'Grey Sofa',
      price: 499.99,
      quantity: 1,
      image:
        'https://www.cozey.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0277%2F3057%2F5462%2Fproducts%2F2_Single_shot_DARK_GREY_OFF_OFF_SLOPE_17f0f115-11f8-4a78-b412-e9a2fea4748d.png%3Fv%3D1629310667&w=1920&q=75',
      swatchColor: '#959392',
      swatchTitle: 'Grey',
    },
    {
      id: 2,

      title: 'Blue Sofa',
      price: 994.99,
      quantity: 1,
      image:
        'https://www.cozey.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0277%2F3057%2F5462%2Fproducts%2F3_Seater_SofaSofa_Ottoman_Off_Arm_Configuration_Two_Arms_Arm_Design_Slope_Chaise_Off_Fabric_Navy_Blue2.png%3Fv%3D1629231450&w=1920&q=75',
      swatchColor: '#191944',
      swatchTitle: 'Blue',
    },
    {
      id: 3,
      title: 'White Sofa',
      price: 599.99,
      quantity: 1,

      image:
        'https://www.cozey.ca/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0277%2F3057%2F5462%2Fproducts%2F2_Single_shot_IVORY_OFF_OFF_SLOPE_5379af1f-9318-4e37-b514-962d33d1ce64.png%3Fv%3D1629231450&w=1920&q=75',
      swatchColor: '#F8F1EC',
      swatchTitle: 'White',
    },
  ];

  const SUBTOTAL = 2094.97;
  const HST = 272.3461;
  const TOTAL = 2382.3161;
  const ESTIMATED_DELIVERY = 'Nov 24, 2021';

  return (
    <main className={styles.main}>
      <h1>Your Cart</h1>

      <section className={styles.cartList}>
        {lineItems.map(item => (
          <CartItem {...item} key={item.id} />
        ))}
      </section>
    </main>
  );
}
