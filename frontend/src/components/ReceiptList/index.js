import React from 'react';
import { CartList, FoodName, CartListAdd } from './styles';

function ReceiptList({ name, price, count }) {
  return (
    <CartList>
      <div>
        <FoodName>{name}</FoodName>

        <CartListAdd>
          <div>
            <div type="button">x</div>
            <span>{price}</span>
          </div>
          <div>
            <div type="button">-</div>
            <span>{count}</span>
            <div type="button">+</div>
          </div>
        </CartListAdd>
      </div>
    </CartList>
  );
}

export { ReceiptList };
