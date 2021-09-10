import React , { useMemo} from 'react';
import { useCart } from './store';

const ProductItem = (item) => ( 
  <div style={{padding: 10}}>
    <b> {item.title} </b>
    <img src={item.image} style={{width: 100, height: 100}}/>
    <span> {item.price} $ </span>
  </div>
);


function Cart() {

  const { carts } = useCart();

  const sum = useMemo(() => carts.reduce((i,j) => i +j.price, 0), [carts]);

  return (
    <div>
      Cart: {carts.length}
      <div>
        { carts.map( item => <ProductItem {...item} key={item.id} />) }
      </div>

      <div>Sum: {sum} </div>
    </div>
  );
}


export default Cart;
