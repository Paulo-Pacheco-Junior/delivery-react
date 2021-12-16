import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CartArea,
         CartHeader,
         CartIcon,
         CartText,
         CartBody,
         CartItemArea,
         CartItemPhoto,
         CartItemDetails,
         CartItemName,
         CartItemPrice,
         CartItemQtArea,
         CartItemMinusQt,
         CartItemTextQt,
         CartItemPlusQt,
         CartDown } from './styled';

export default () => {
  const dispatch = useDispatch();

  const products = useSelector(state => state.cart.products);

  const [ show, setShow ] = useState(false);

  const handleQt = (key, type) => {
    dispatch ({
      type:'CHANGE_PRODUCT',
      payload:{key, type}
    });
  }

  const handleDown = () => {
      setShow(!show);
  }

  return (
    <CartArea >
      <CartHeader onClick={handleDown}>
        <CartIcon src='/assets/cart.png' />
        <CartText>Meu Carrinho ({products.length})</CartText>
        {show &&
          <CartDown src='/assets/down.png' />
        }
      </CartHeader>
      <CartBody show={show}>
        {products.map((item, index)=>(
          <CartItemArea key={index}>
            <CartItemPhoto src={item.image} />
            <CartItemDetails>
              <CartItemName>{item.name}</CartItemName>
              <CartItemPrice>R$ {Number(item.price * item.qt).toFixed(2)}</CartItemPrice>
            </CartItemDetails>
            <CartItemQtArea>
              <CartItemMinusQt onClick={()=>handleQt(index, '-')} src='/assets/minus.png' />
              <CartItemTextQt>{item.qt}</CartItemTextQt>
              <CartItemPlusQt onClick={()=>handleQt(index, '+')} src='/assets/plus.png' />
            </CartItemQtArea>
          </CartItemArea>
        ))}
      </CartBody>
    </CartArea>
  );
}