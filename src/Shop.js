import React, { useEffect } from 'react';
import { useShop, useCart, useLogin } from './store';



const ProductItem = (item) => ( 
  <div style={{padding: 10}}>
    <h4> {item.title} </h4>
    <div>
      <img src={ item.image } style={{width: 100, height: 100}} />
    </div>

    <span> {item.price} $ </span>
    <button onClick={e => item.addCart(item) } >Add to Cart </button>
  </div>
);

function Shop() {
  const { logout } = useLogin();
  const { products, getAllProduct } = useShop();
  const { addCart, carts } = useCart();

  useEffect(() => {
    getAllProduct();
  }, []);


  if(products.length == 0) {
    return (
      <div>로딩 중..</div>
    );
  }

  return (
    <div style={{margin: 3}}>
      <div>
        <a href="/cart">My Cart: {carts.length}</a> &nbsp;
        <a href="" onClick={logout}>logout</a>
      </div>

      <div>
        { products.map(item => <ProductItem {...Object.assign(item, {addCart})} key={item.id} />) }
      </div>
    </div>
  );

}

export default Shop;
